interface LogoProps {
  className?: string;
  light?: boolean;
  showTagline?: boolean;
}

export default function Logo({ className = 'h-9', light = false, showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Zotus AI" role="img">
      <img
        src="/logo-mark.png"
        alt=""
        className="h-full w-auto object-contain"
        loading="eager"
      />
      <div className="flex flex-col">
        <span
          className="text-[18px] font-extrabold tracking-tight leading-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className={light ? 'text-white' : 'text-[var(--color-text)]'}>ZOTUS</span>
          <span className={light ? 'text-white/60' : 'text-[var(--color-text)]'}>.</span>
          <span className="text-[var(--color-accent)]">AI</span>
        </span>
        {showTagline && (
          <span
            className={`text-[7px] font-semibold tracking-[0.06em] leading-none mt-[3px] ${
              light ? 'text-white/50' : 'text-[var(--color-text-tertiary)]'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Innovate at the speed of Light
          </span>
        )}
      </div>
    </div>
  );
}
