import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay to not annoy immediately
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100%-2rem)] bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl rounded-lg p-6 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-primary">We use cookies</h3>
        <button 
          onClick={handleDecline}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        We use cookies to enhance your browsing experience and analyze our traffic. 
        By clicking "Accept", you consent to our use of cookies.
      </p>
      <div className="flex gap-3 justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleDecline}
          className="border-primary/20 hover:bg-primary/5 hover:text-primary"
        >
          Decline
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          onClick={handleAccept}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};
