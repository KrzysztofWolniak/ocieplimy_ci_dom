

const Header = () => {
  return (
    <header className="bg-transparent sticky top-0 z-50">
      <div className="bg-gray-800 text-white py-2">
        <Contact />
      </div>
      <div className="bg-gray-900 text-white py-4">
        <Navigation />
      </div>
    </header>
  );
};
const Navigation = () => {
    return (
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">OcieplimyCiDom</a>
        <ul className="flex space-x-4">
          <li><a href="/o-nas" className="hover:underline">O nas</a></li>
          <li><a href="/nasza-oferta" className="hover:underline">Nasza oferta</a></li>
          <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
          <li><a href="/kontakt" className="hover:underline">Kontakt</a></li>
        </ul>
      </div>
    );
  };
  const Contact = () => {
    return (
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <a href="tel:+48 123 456 789" className="flex items-center space-x-1">
            <span>📞</span><span>+48 123 456 789</span>
          </a>
          <a href="mailto:kochiris94@gmail.com" className="flex items-center space-x-1">
            <span>✉️</span><span>kochiris94@gmail.com</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </div>
    );
  };
export default Header;