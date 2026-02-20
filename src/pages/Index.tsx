import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import heroBg from "@/assets/project-3.png"; // Using one of the nice landscape shots
import fencingImg from "@/assets/project-1.png";
import mulchingImg from "@/assets/project-5.png";
import tractorImg from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from(".hero-content > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5 // Wait for loader
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO 
        title="Fencing & Equipment Services" 
        description="Professional fencing, mulching, skid steer & tractor work in Fairmount, GA. Durable, clean work for rural properties." 
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Rural landscape with fencing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 px-4 text-center hero-content">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/90 text-white text-sm font-semibold mb-6 tracking-wide uppercase shadow-lg backdrop-blur-sm">
            Serving Fairmount & North Georgia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Professional Fencing <br className="hidden md:block" />
            & Equipment Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md font-medium">
            Fencing, Mulching, Skid Steer & Tractor Work Done Right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:706-847-5979">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 px-8 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                706-847-5979
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-background relative services-section">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">
              We specialize in rural property improvements, delivering durable solutions that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={fencingImg} 
                  alt="Farm Fencing" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Fencing</h3>
                <p className="text-muted-foreground mb-6">
                  Farm, residential, and livestock fencing built for durability and straight lines.
                </p>
                <Link to="/services/fencing" className="text-secondary font-semibold flex items-center group/link">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={mulchingImg} 
                  alt="Forestry Mulching" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Mulching</h3>
                <p className="text-muted-foreground mb-6">
                  Professional land clearing and overgrowth removal for farms and residential lots.
                </p>
                <Link to="/services/mulching" className="text-secondary font-semibold flex items-center group/link">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={tractorImg} 
                  alt="Skid Steer Work" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Skid Steer & Tractor</h3>
                <p className="text-muted-foreground mb-6">
                  Grading, driveway prep, and heavy equipment services for property maintenance.
                </p>
                <Link to="/services/skid-steer-tractor-work" className="text-secondary font-semibold flex items-center group/link">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Browns'?</h2>
              <div className="space-y-6">
                {[
                  "Family-owned and operated local business",
                  "Specialized in rural property needs",
                  "Professional, clean, and durable work",
                  "Transparent pricing and clear communication",
                  "Licensed and insured for your peace of mind"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <p className="text-lg text-primary-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-block mt-10">
                <Button variant="secondary" size="lg">
                  More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-xl" />
              <img 
                src={heroBg} 
                alt="Our Work" 
                className="rounded-xl shadow-2xl relative z-10 border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Ready to Improve Your Property?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contact us today for a free estimate on your fencing or land management project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:706-847-5979">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg w-full sm:w-auto">
                Call 706-847-5979
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
