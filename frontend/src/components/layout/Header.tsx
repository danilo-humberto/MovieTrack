const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-center bg-[#252A2F] border-b border-muted-foreground">
      <img
        src="./logo.png"
        alt="logo do site movie track"
        className="w-40 h-20 object-contain"
      />
    </header>
  );
};

export default Header;
