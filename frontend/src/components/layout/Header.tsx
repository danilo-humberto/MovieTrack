import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 flex items-center justify-center bg-[#252A2F] border-b border-muted-foreground z-50">
      <img
        src="/logo.png"
        alt="logo do site movie track"
        className="w-40 h-20 object-contain cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
    </header>
  );
};

export default Header;
