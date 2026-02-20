import { SEO } from "@/components/SEO";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/project-5.png";
import workImg from "@/assets/project-8.png";

gsap.registerPlugin(ScrollTrigger);

const mulchingServices = [
  "Forestry Mulching",
  "Land Clearing",
  "Brush & Overgrowth Removal",
  "Lot Clearing for Building",
  "Hunting Land Preparation",
  "Farm Property Clearing",
  "Undergrowth Management",
  "Right-of-Way Clearing",
];

const Mulching = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".fade-up", {
      scrollTrigger: { trigger: ".content-section", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO
        title="Land Clearing & Forestry Mulching"
        description="Professional forestry mulching and land clearing in Fairmount, GA. Brush removal, lot clearing, and property preparation for Pickens, Gordon, and Bartow counties."
        canonical="/services/mulching"
      />

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Forestry mulching land clearing in Fairmount GA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/65 backdrop-blur-[1px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Land Clearing & Forestry Mulching in Fairmount, GA</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Transform overgrown land into usable property — efficiently and affordably.</p>
        </div>
      </section>

      <section className="py-20 content-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:order-2 relative">
              <div className="absolute -inset-3 bg-secondary/10 rounded-xl blur-lg" />
              <img src={workImg} alt="Land clearing project in North Georgia" className="rounded-xl shadow-xl relative z-10 w-full border border-border/50" />
            </div>
            <div className="space-y-6 lg:order-1">
              <h2 className="fade-up text-3xl font-bold text-primary">Professional Mulching Services</h2>
              <p className="fade-up text-lg text-muted-foreground leading-relaxed">
                We provide professional mulching services for land clearing, overgrowth removal, and property preparation. Our forestry mulching equipment grinds brush, small trees, and undergrowth into natural mulch, leaving your property clean and ready for its next use.
              </p>
              <p className="fade-up text-lg text-muted-foreground leading-relaxed">
                Ideal for residential lots, hunting land, and farm properties across Fairmount, Pickens County, Gordon County, and Bartow County. Forestry mulching is the eco-friendly alternative to traditional land clearing — no burning, no hauling, no mess.
              </p>
              <h3 className="fade-up text-2xl font-bold text-primary pt-4">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mulchingServices.map((svc) => (
                  <div key={svc} className="fade-up flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{svc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Land Cleared?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">Get a free estimate for your mulching or land clearing project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:706-847-5979">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" /> 706-847-5979
              </Button>
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Land Clearing & Forestry Mulching",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Browns' Fencing & Equipment",
          "telephone": "706-847-5979",
          "address": { "@type": "PostalAddress", "addressLocality": "Fairmount", "addressRegion": "GA" }
        },
        "areaServed": ["Fairmount, GA", "Pickens County", "Gordon County", "Bartow County"],
        "description": "Professional forestry mulching and land clearing services in Fairmount, GA."
      })}} />
    </div>
  );
};

export default Mulching;
