const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-foreground">
          Johann <span className="text-gold">Zhao</span>
        </p>
        <p className="text-muted-foreground font-body text-xs tracking-wider">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
