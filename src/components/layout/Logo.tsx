export default function Logo({ className = 'h-10 w-auto', light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Zotus AI Logo" role="img">
      <img
        src="/logo-mark.png"
        alt="Zotus AI"
        className="h-full w-auto object-contain"
      />
      <div className="flex flex-col justify-center">
        <span
          className="text-[20px] font-extrabold tracking-tight leading-none mb-[2px]"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          <span className={light ? "text-white" : "text-dark"}>Zotus</span>
          <span className="text-primary ml-1">AI</span>
        </span>
        <span className={`text-[8px] font-bold tracking-[0.15em] leading-none ${light ? "text-white/70" : "text-gray"}`}>
          PRIVATE LIMITED
        </span>
      </div>
    </div>
  );
}
