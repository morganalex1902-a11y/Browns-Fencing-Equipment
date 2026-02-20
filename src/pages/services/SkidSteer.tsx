import { SEO } from "@/components/SEO";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/project-6.png";
import workImg from "@/assets/project-9.png";

gsap.registerPlugin(ScrollTrigger);

const skidSteerServices = [
  "Driveway Grading & Prep",
  "Property Leveling",
  "Dirt Work & Fill",
  "Debris Removal",
  "Drainage Solutions",
  "Land Grading",
  "Site Preparation",
  "Agricultural Field Work",
];

const SkidSteer = () => {
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
        title="Skid Steer & Tractor Services"
        description="Professional skid steer and tractor services near Fairmount, GA. Grading, driveway prep, dirt work, and property leveling for residential and agricultural properties."
        canonical="/services/skid-steer-tractor-work"
      />

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Skid steer and tractor work in Fairmount GA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/65 backdrop-blur-[1px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Skid Steer & Tractor Services Near Fairmount, GA</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Reliable heavy equipment service for residential and agricultural needs.</p>
        </div>
      </section>

      <section className="py-20 content-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="fade-up text-3xl font-bold text-primary">Heavy Equipment Services</h2>
              <p className="fade-up text-lg text-muted-foreground leading-relaxed">
                Need your driveway graded, property leveled, or debris cleared? Our skid steer and tractor services handle the tough jobs that keep your property functional and looking its best. We serve homeowners, farmers, and landowners across North Georgia.
              </p>
              <p className="fade-up text-lg text-muted-foreground leading-relaxed">
                From grading driveways and preparing building sites to moving dirt and managing drainage, our experienced operators deliver precise, efficient work. Serving Fairmount, Calhoun, Jasper, and surrounding communities in Pickens, Gordon, and Bartow counties.
              </p>
              <h3 className="fade-up text-2xl font-bold text-primary pt-4">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skidSteerServices.map((svc) => (
                  <div key={svc} className="fade-up flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{svc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 bg-secondary/10 rounded-xl blur-lg" />
              <img src={workImg} alt="Tractor work and grading near Fairmount GA" className="rounded-xl shadow-xl relative z-10 w-full border border-border/50" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Equipment Work Done?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">Get a free estimate for your grading or tractor project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:706-847-5979">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold">
                <Phone className="mr-2 w-5 h-5" /> 706-847-5979
              </Button>
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Skid Steer & Tractor Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Browns' Fencing & Equipment",
          "telephone": "706-847-5979",
          "address": { "@type": "PostalAddress", "addressLocality": "Fairmount", "addressRegion": "GA" }
        },
        "areaServed": ["Fairmount, GA", "Pickens County", "Gordon County", "Bartow County"],
        "description": "Professional skid steer and tractor services including grading, driveway prep, and dirt work in Fairmount, GA."
      })}} />
    </div>
  );
};

export default SkidSteer;
