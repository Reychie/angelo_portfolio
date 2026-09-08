'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Section } from '@/lib/types';
import { SECTION_HOLE_X } from '@/lib/types';

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uOffset;
uniform float uQuality;
uniform float uMotion;

varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  uv -= uOffset;

  float t = uTime * uMotion;
  float r = length(uv);
  float angle = atan(uv.y, uv.x);

  float warp = noise(uv * 2.4 + t * 0.05) * 0.045 * uMotion;
  vec2 warped = uv + uv * warp;
  float wr = length(warped);

  float hole = 1.0 - smoothstep(0.14, 0.195, wr);
  float softGlow = exp(-pow((wr - 0.24) * 8.0, 2.0)) * 0.55;
  float ring = exp(-pow((wr - 0.27) * 14.0, 2.0));
  float outerRing = exp(-pow((wr - 0.38) * 10.0, 2.0)) * 0.35;

  float swirl = sin(angle * 10.0 - t * 0.55 + wr * 18.0 + noise(warped * 3.0 + t * 0.08) * 4.0);
  float diskMask = smoothstep(0.18, 0.24, wr) * (1.0 - smoothstep(0.42, 0.56, wr));
  diskMask *= 0.55 + 0.45 * abs(warped.y / max(wr, 0.001));

  vec3 blue = vec3(0.07, 0.22, 0.85);
  vec3 gold = vec3(0.95, 0.58, 0.16);
  vec3 disk = mix(blue, gold, swirl * 0.5 + 0.5);

  vec3 color = vec3(0.015, 0.02, 0.035);
  color += disk * ring * 1.35 * diskMask;
  color += disk * outerRing * 0.55;
  color += softGlow * mix(blue, gold, 0.35) * 0.35;
  color *= 1.0 - hole * 0.98;

  float starDensity = mix(90.0, 140.0, uQuality);
  float stars = step(0.997, hash(floor(vUv * starDensity))) * (0.35 + 0.65 * hash(vUv * 40.0));
  stars *= smoothstep(0.22, 0.55, wr);
  color += vec3(0.85, 0.9, 1.0) * stars * (0.35 + 0.25 * uQuality);

  float vignette = smoothstep(1.25, 0.35, length((vUv - 0.5) * 1.2));
  color *= vignette;

  gl_FragColor = vec4(color, 1.0);
}
`;

function BlackHoleMesh({
  targetX,
  reducedMotion,
  quality,
}: {
  targetX: number;
  reducedMotion: boolean;
  quality: number;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const offset = useRef(new THREE.Vector2(targetX - 0.5, 0.02));
  const mouse = useRef(new THREE.Vector2(0, 0));
  const { size, gl } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uOffset: { value: new THREE.Vector2(targetX - 0.5, 0.02) },
      uQuality: { value: quality },
      uMotion: { value: reducedMotion ? 0 : 1 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (reducedMotion) return;
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      mouse.current.set(x * 0.03, -y * 0.02);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reducedMotion]);

  useEffect(() => {
    uniforms.uQuality.value = quality;
    uniforms.uMotion.value = reducedMotion ? 0 : 1;
  }, [quality, reducedMotion, uniforms]);

  useFrame(({ clock }) => {
    if (!material.current) return;
    const mat = material.current;
    mat.uniforms.uTime.value = clock.getElapsedTime();
    mat.uniforms.uResolution.value.set(size.width, size.height);

    const desired = new THREE.Vector2(targetX - 0.5, 0.02).add(mouse.current);
    offset.current.lerp(desired, reducedMotion ? 1 : 0.035);
    mat.uniforms.uOffset.value.copy(offset.current);
  });

  useEffect(() => {
    gl.setClearColor(new THREE.Color('#05070b'), 1);
  }, [gl]);

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

interface BlackHoleBackgroundProps {
  activeSection: Section;
}

export default function BlackHoleBackground({ activeSection }: BlackHoleBackgroundProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const targetX = SECTION_HOLE_X[activeSection] ?? 0.72;

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const widthQuery = window.matchMedia('(max-width: 768px)');
    const sync = () => {
      setReducedMotion(motionQuery.matches);
      setIsMobile(widthQuery.matches);
    };
    sync();
    motionQuery.addEventListener('change', sync);
    widthQuery.addEventListener('change', sync);
    return () => {
      motionQuery.removeEventListener('change', sync);
      widthQuery.removeEventListener('change', sync);
    };
  }, []);

  const dpr: [number, number] = isMobile ? [1, 1.1] : [1, 1.5];
  const quality = isMobile ? 0.35 : 1;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 0, 1], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <BlackHoleMesh targetX={targetX} reducedMotion={reducedMotion} quality={quality} />
      </Canvas>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,7,11,0.92) 0%, rgba(5,7,11,0.72) 38%, rgba(5,7,11,0.28) 68%, rgba(5,7,11,0.45) 100%)',
        }}
      />
    </div>
  );
}
