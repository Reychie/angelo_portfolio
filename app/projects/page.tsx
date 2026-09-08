'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/** Legacy route — redirect into the Work section on the main SPA. */
export default function AllProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#work');
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-muted text-sm">
      Redirecting to work…
    </main>
  );
}
