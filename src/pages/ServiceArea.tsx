import { SEO } from "@/components/SEO";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  { name: "Fairmount, GA", county: "Gordon County", primary: true },
  { name: "Calhoun, GA", county: "Gordon County", primary: false },
  { name: "Jasper, GA", county: "Pickens County", primary: false },
  { name: "Talking Rock, GA", county: "Pickens County", primary: false },
  { name: "Ellijay, GA", county: "Gilmer County", primary: false },
  { name: "Cartersville, GA", county: "Bartow County", primary: false },
];

const counties = ["Pickens County", "Gordon County", "Bartow County", "Gilmer County", "Murray County", "Cherokee County"];

const ServiceArea = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".area-card", {
      scrollTrigger: { trigger: ".areas-grid", start: "top 80%" },
      y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO
        title="Service Area"
        description="Browns' Fencing & Equipment serves Fairmount, GA and surrounding areas including Pickens, Gordon, and Bartow counties. Fencing, mulching, and tractor services."
        canonical="/service-area"
      />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Service Area</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Proudly serving Fairmount and communities across North Georgia.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-xl border border-border/50 mb-16">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105533.7!2d-84.42!3d34.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885f5e6e2a6e5d3d%3A0x4e5d3e3d3e3d3e3d!2sFairmount%2C%20GA%2030139!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary text-center mb-12">Cities We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 areas-grid">
            {areas.map((area) => (
              <div key={area.name} className="area-card flex items-center gap-4 bg-card rounded-xl p-6 shadow-sm border border-border/50">
                <MapPin className={`w-6 h-6 shrink-0 ${area.primary ? "text-secondary" : "text-muted-foreground"}`} />
                <div>
                  <p className="font-bold text-primary">{area.name}</p>
                  <p className="text-sm text-muted-foreground">{area.county}</p>
                </div>
                {area.primary && <span className="ml-auto text-xs font-bold bg-secondary/10 text-secondary px-2 py-1 rounded-full">HQ</span>}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Counties Covered</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {counties.map((c) => (
                <span key={c} className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">In Our Service Area?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">Contact us for a free on-site estimate.</p>
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
    </div>
  );
};

export default ServiceArea;
