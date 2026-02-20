import { SEO } from "@/components/SEO";
import { ArrowRight, Phone, Fence, Trees, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fencingImg from "@/assets/project-1.png";
import mulchingImg from "@/assets/project-5.png";
import tractorImg from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Fencing",
    desc: "Farm, residential, and livestock fencing built to last. We handle post setting, gate installation, fence repair, and property boundary layout across Fairmount and surrounding areas.",
    img: fencingImg,
    link: "/services/fencing",
    icon: Fence,
  },
  {
    title: "Forestry Mulching",
    desc: "Professional land clearing, overgrowth removal, and property preparation. Ideal for residential lots, hunting land, and farm properties throughout North Georgia.",
    img: mulchingImg,
    link: "/services/mulching",
    icon: Trees,
  },
  {
    title: "Skid Steer & Tractor Work",
    desc: "Grading, driveway prep, dirt work, debris removal, and property leveling. Reliable heavy equipment service for residential and agricultural needs.",
    img: tractorImg,
    link: "/services/skid-steer-tractor-work",
    icon: Tractor,
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".service-block", {
      scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO
        title="Our Services"
        description="Professional fencing, forestry mulching, skid steer and tractor services in Fairmount, GA. Free estimates available."
        canonical="/services"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            From fencing to land clearing, we provide comprehensive property services across North Georgia.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 services-grid">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((svc, i) => (
            <div key={svc.title} className={`service-block grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-secondary/10 rounded-xl blur-lg" />
                  <img src={svc.img} alt={svc.title} className="rounded-xl shadow-xl relative z-10 w-full border border-border/50" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <svc.icon className="w-10 h-10 text-secondary mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{svc.title}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{svc.desc}</p>
                <Link to={svc.link}>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">Every property is different. Let's discuss your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">Request a Quote</Button>
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

export default Services;
