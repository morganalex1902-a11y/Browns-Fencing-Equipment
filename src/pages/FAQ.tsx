import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const faqs = [
  {
    q: "How long does fence installation take?",
    a: "Most residential fence installations in the Fairmount, GA area take 1–3 days depending on the length and terrain. Larger farm fencing projects may take up to a week. We'll provide a clear timeline during your free estimate.",
  },
  {
    q: "Do you provide the fencing materials?",
    a: "Yes! We supply all materials for your fencing project including posts, rails, wire, and gates. We source quality materials built to withstand Georgia's weather and soil conditions.",
  },
  {
    q: "What type of fencing do you recommend?",
    a: "It depends on your needs. For livestock, we recommend field fencing or barbed wire. For property boundaries, wood board fencing or woven wire works great. We'll assess your property and recommend the best option during your estimate.",
  },
  {
    q: "How large of a property can you mulch?",
    a: "We handle properties of all sizes — from small residential lots to large tracts of farm and hunting land across Pickens, Gordon, and Bartow counties. Our forestry mulching equipment can clear multiple acres per day.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Absolutely! We provide free on-site estimates for all our services including fencing, mulching, and skid steer work throughout the Fairmount, GA area and surrounding North Georgia communities.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Fairmount, GA and serve Pickens County, Gordon County, Bartow County, and surrounding areas including Calhoun, Jasper, and Cartersville.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Browns' Fencing & Equipment is fully licensed and insured for your peace of mind. We carry liability insurance on all projects.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, checks, and major credit cards. Payment terms are discussed during the estimate process and agreed upon before work begins.",
  },
];

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".faq-content", {
      y: 30, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.2,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO
        title="Frequently Asked Questions"
        description="Common questions about Browns' Fencing & Equipment services in Fairmount, GA. Learn about fencing, mulching, estimates, and more."
        canonical="/faq"
      />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Answers to common questions about our services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl faq-content">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6 shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">We're happy to help. Reach out anytime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      })}} />
    </div>
  );
};

export default FAQ;
