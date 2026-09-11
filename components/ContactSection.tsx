import { site } from '@/lib/site';
import Button from '@/components/ui/Button';
import SocialButton from '@/components/ui/SocialButton';

export default function ContactSection() {
  return (
    <section className="relative min-h-full px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-2xl mx-auto space-y-8 text-center">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.28em] uppercase text-violet">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Open to new opportunities
          </h2>
          <p className="text-base text-muted leading-relaxed">
            I’m available for professional opportunities, projects, collaborations, and other development work.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 rounded-2xl space-card p-6 text-left">
          <div className="space-y-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="text-lg text-foreground hover:text-violet interactive-link break-all"
            >
              {site.email}
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted">Location</p>
            <p className="text-foreground">{site.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <SocialButton platform="github" labeled />
          <SocialButton platform="linkedin" labeled />
          <Button href={site.resumePath} download variant="ghost">
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
