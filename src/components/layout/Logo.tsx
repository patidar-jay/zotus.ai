interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = 'h-9', light = false }: LogoProps) {
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
          <span className={light ? 'text-white' : 'text-[var(--color-text)]'}>Zotus</span>
          <span className="text-[var(--color-primary)] ml-1">AI</span>
        </span>
        <span
          className={`text-[7px] font-bold tracking-[0.14em] leading-none mt-[2px] ${
            light ? 'text-white/50' : 'text-[var(--color-text-tertiary)]'
          }`}
        >
          PRIVATE LIMITED
        </span>
      </div>
    </div>
  );
}
