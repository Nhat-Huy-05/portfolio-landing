const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/95 mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="text-xs">Update soon</p>
      </div>
    </footer>
  );
};

export default Footer;
