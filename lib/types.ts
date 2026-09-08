export type Section = 'home' | 'work' | 'experience' | 'about' | 'contact';

export const SECTION_HOLE_X: Record<Section, number> = {
  home: 0.72,
  about: 0.8,
  work: 0.88,
  experience: 0.82,
  contact: 0.75,
};
