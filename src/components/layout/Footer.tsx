import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img 
                src={logo} 
                alt="Browns' Fencing & Equipment Logo" 
                className="h-20 w-auto bg-white/5 p-2 rounded-lg backdrop-blur-sm"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Professional fencing, mulching, and heavy equipment services in Fairmount, GA. 
              Quality craftsmanship rooted in rural values.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Service Area", path: "/service-area" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Farm Fencing", path: "/services/fencing" },
                { name: "Residential Fencing", path: "/services/fencing" },
                { name: "Forestry Mulching", path: "/services/mulching" },
                { name: "Land Clearing", path: "/services/mulching" },
                { name: "Skid Steer Work", path: "/services/skid-steer-tractor-work" },
                { name: "Tractor Services", path: "/services/skid-steer-tractor-work" },
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Fairmount, GA 30139<br />
                  Serving North Georgia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:706-847-5979" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
                  706-847-5979
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:brownsfencingnequip@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors text-sm break-all">
                  brownsfencingnequip@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs text-center md:text-left">
            &copy; {currentYear} Browns' Fencing & Equipment. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
