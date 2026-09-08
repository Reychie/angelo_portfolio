import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <p className="text-center text-sm text-muted">
        © {new Date().getFullYear()} <span className="text-accent">{site.name}</span>
      </p>
    </footer>
  );
}
