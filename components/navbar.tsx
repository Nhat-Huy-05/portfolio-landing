const navItems = [
  { href: "#about", label: "About" },
  { href: "#introduce", label: "Introduce" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <div className="text-lg font-semibold tracking-tight text-foreground">
          Portfolio
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
