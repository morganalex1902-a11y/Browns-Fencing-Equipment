import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);

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

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

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
      ref={navRef}
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
          "fixed left-0 right-0 top-0 h-screen bg-background z-30 lg:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ marginTop: scrolled ? "40px" : "52px" }}
      >
        <div className="flex flex-col h-full">
          <div className="overflow-y-auto flex-1 px-4 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block text-lg font-medium border-b border-border/50 py-4 transition-colors",
                  location.pathname === link.path ? "text-secondary font-bold" : "text-foreground hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="px-4 py-6 border-t border-border/50">
            <Link
              to="/contact"
              className="block bg-secondary text-secondary-foreground text-center py-3 rounded-md font-bold shadow-md hover:bg-secondary/90 transition-colors"
            >
              Get a Quote Today
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
