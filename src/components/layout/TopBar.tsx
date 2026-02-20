import { Phone, Mail, Facebook } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="w-full bg-primary/95 text-primary-foreground py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium border-b border-white/10 relative z-50">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <a href="tel:706-847-5979" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Phone className="w-4 h-4" />
          <span>706-847-5979</span>
        </a>
        <a href="mailto:brownsfencingnequip@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Mail className="w-4 h-4" />
          <span>brownsfencingnequip@gmail.com</span>
        </a>
      </div>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-secondary transition-colors"
          aria-label="Visit us on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
