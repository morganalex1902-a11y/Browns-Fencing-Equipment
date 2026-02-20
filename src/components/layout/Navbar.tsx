import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Service Area", path: "/service-area" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-white/20 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Browns' Fencing & Equipment Logo" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className={cn(
            "font-bold text-xl tracking-tight hidden sm:block",
            scrolled ? "text-primary" : "text-primary shadow-black/10"
          )}>
            Browns' Fencing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary relative group py-2",
                location.pathname === link.path ? "text-secondary font-bold" : "text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                location.pathname === link.path && "scale-x-100"
              )} />
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-md font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-background/95 backdrop-blur-xl z-30 lg:hidden transition-transform duration-300 ease-in-out flex flex-col pt-8 px-6 gap-6 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              "text-lg font-medium border-b border-border/50 pb-4",
              location.pathname === link.path ? "text-secondary" : "text-foreground"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="bg-secondary text-secondary-foreground text-center py-3 rounded-md font-bold mt-4 shadow-md"
        >
          Get a Quote Today
        </Link>
      </div>
    </nav>
  );
};
