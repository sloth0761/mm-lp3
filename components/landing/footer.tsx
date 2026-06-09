export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-[13px] md:flex-row">
        <div className="flex items-center gap-2 font-medium">
          <span className="size-1.5 rounded-full bg-foreground" />
          Narron
        </div>
        <p className="text-muted-foreground">Founder positioning intelligence.</p>
        <p className="text-muted-foreground">© 2026 Narron</p>
      </div>
    </footer>
  );
}