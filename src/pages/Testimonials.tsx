import { SEO } from "@/components/SEO";
import { Star, Quote } from "lucide-react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";
import project7 from "@/assets/project-7.png";
import project8 from "@/assets/project-8.png";
import project9 from "@/assets/project-9.png";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "James H.", location: "Fairmount, GA", service: "Farm Fencing", text: "Browns' did an outstanding job on our pasture fencing. Straight lines, solid posts, and they finished ahead of schedule. Best fencing contractor in North Georgia." },
  { name: "Sarah M.", location: "Calhoun, GA", service: "Forestry Mulching", text: "We had 5 acres of overgrown brush that needed clearing. Browns' mulched everything in a day and left the property looking incredible. Highly recommend." },
  { name: "Robert & Linda T.", location: "Jasper, GA", service: "Skid Steer Work", text: "They graded our new driveway perfectly. Professional crew, fair pricing, and great communication throughout the project." },
  { name: "Mike D.", location: "Pickens County, GA", service: "Land Clearing", text: "I've used several contractors before, but Browns' is the most reliable. They cleared our building lot exactly how we needed it. No mess left behind." },
  { name: "Karen W.", location: "Gordon County, GA", service: "Residential Fencing", text: "Beautiful fence around our property. The quality of their work speaks for itself. Our neighbors have been asking who did it!" },
  { name: "Tom & Beth S.", location: "Bartow County, GA", service: "Tractor Work", text: "Browns' leveled our backyard and fixed drainage issues that had been plaguing us for years. Excellent heavy equipment work." },
];

const galleryImages = [
  { src: project1, alt: "Farm fencing installation in Fairmount GA" },
  { src: project2, alt: "Property improvement project" },
  { src: project3, alt: "Rural landscape work in North Georgia" },
  { src: project4, alt: "Fencing and equipment work" },
  { src: project5, alt: "Land clearing and mulching project" },
  { src: project6, alt: "Skid steer work in Fairmount" },
  { src: project7, alt: "Professional fence installation" },
  { src: project8, alt: "Property clearing project" },
  { src: project9, alt: "Tractor and equipment services" },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      scrollTrigger: { trigger: ".testimonials-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
    });
    gsap.from(".gallery-item", {
      scrollTrigger: { trigger: ".gallery-grid", start: "top 80%" },
      scale: 0.9, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO
        title="Testimonials & Project Gallery"
        description="See what our customers say about Browns' Fencing & Equipment. View our project gallery of fencing, mulching, and equipment work across North Georgia."
        canonical="/testimonials"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Testimonials & Gallery</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Real feedback from real customers across North Georgia.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 testimonials-grid">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-14">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow relative">
                <Quote className="w-8 h-8 text-secondary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.service} • {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted/30 gallery-grid">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-14">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-sm">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Testimonials;
