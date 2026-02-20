import { SEO } from "@/components/SEO";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/project-2.png";
import workImg from "@/assets/project-4.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-hero > *", {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3,
    });
    gsap.from(".value-card", {
      scrollTrigger: { trigger: ".values-section", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Learn about Browns' Fencing & Equipment — a family-owned rural property specialist in Fairmount, GA providing fencing, mulching, and tractor services."
        canonical="/about"
      />

      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutImg} alt="Browns Fencing team at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 about-hero text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">About Browns' Fencing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Family-owned. Locally operated. Built on rural values.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Browns' Fencing & Equipment was founded with a simple mission: provide honest, durable property services to the hardworking landowners of North Georgia. Based in Fairmount, we understand the unique needs of rural properties — from farm fencing that keeps livestock secure to land clearing that prepares your property for its next chapter.
                </p>
                <p>
                  As a family-owned business, every project we take on reflects our personal commitment to quality. We don't cut corners, and we treat every property like it's our own. Our reputation in Pickens, Gordon, and Bartow counties is built on straight fence lines, clean mulching, and reliable equipment work.
                </p>
                <p>
                  Whether you need a new fence around your pasture, brush cleared from a building lot, or a driveway graded and leveled, Browns' Fencing & Equipment delivers professional results with a personal touch.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-xl blur-xl" />
              <img src={workImg} alt="Professional fencing work by Browns" className="rounded-xl shadow-2xl relative z-10 border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30 values-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-14">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Quality Craftsmanship", desc: "Every fence post is set right, every acre is cleared clean. We take pride in work that lasts." },
              { title: "Local Expertise", desc: "We know Georgia soil, weather patterns, and property requirements inside and out." },
              { title: "Honest Communication", desc: "Transparent pricing, clear timelines, and no surprises. We say what we mean." },
              { title: "Reliability", desc: "When we schedule a job, we show up. Our word is our bond in this community." },
              { title: "Safety First", desc: "Licensed, insured, and committed to safe practices on every job site." },
              { title: "Customer Focus", desc: "Your property goals are our priority. We listen, plan, and deliver." },
            ].map((value, i) => (
              <div key={i} className="value-card bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact us today for a free estimate on your next project.</p>
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

export default About;
