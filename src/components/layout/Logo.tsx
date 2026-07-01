export default function Logo({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Zotus AI Logo" role="img">
      <img
        src="/logo-mark.png"
        alt="Zotus AI"
        className="h-full w-auto object-contain"
      />
      <span
        className="text-[20px] font-extrabold tracking-tight leading-none"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        <span className="text-dark">Zotus</span>
        <span className="text-primary ml-0.5">AI</span>
      </span>
    </div>
  );
}
