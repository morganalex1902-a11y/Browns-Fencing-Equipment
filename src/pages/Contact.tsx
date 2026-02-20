import { SEO } from "@/components/SEO";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  service: z.string().trim().min(1, "Please select a service").max(100),
  address: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", address: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useGSAP(() => {
    gsap.from(".contact-fade", {
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2,
    });
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // Build mailto link as fallback since no backend
    const subject = encodeURIComponent(`Quote Request - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nAddress: ${formData.address}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:brownsfencingnequip@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send the quote request.");
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <SEO
        title="Contact Us"
        description="Contact Browns' Fencing & Equipment for a free estimate on fencing, mulching, or tractor services in Fairmount, GA. Call 706-847-5979."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Get a free estimate for your next project. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="contact-fade">
              <h2 className="text-3xl font-bold text-primary mb-8">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your name" className="mt-1" />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="(706) 555-0123" className="mt-1" />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    <option value="Farm Fencing">Farm Fencing</option>
                    <option value="Residential Fencing">Residential Fencing</option>
                    <option value="Fence Repair">Fence Repair</option>
                    <option value="Forestry Mulching">Forestry Mulching</option>
                    <option value="Land Clearing">Land Clearing</option>
                    <option value="Skid Steer Work">Skid Steer Work</option>
                    <option value="Tractor Work">Tractor Work</option>
                    <option value="Driveway Grading">Driveway Grading</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-destructive text-sm mt-1">{errors.service}</p>}
                </div>
                <div>
                  <Label htmlFor="address">Property Address</Label>
                  <Input id="address" value={formData.address} onChange={(e) => updateField("address", e.target.value)} placeholder="Address of the property" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={5} value={formData.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your project..." className="mt-1" />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90 text-white w-full py-6 text-lg">
                  Send Quote Request
                </Button>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-8 contact-fade">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Phone</p>
                      <a href="tel:706-847-5979" className="text-muted-foreground hover:text-secondary transition-colors text-lg">706-847-5979</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Email</p>
                      <a href="mailto:brownsfencingnequip@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">brownsfencingnequip@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Location</p>
                      <p className="text-muted-foreground">Fairmount, GA 30139</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Hours</p>
                      <p className="text-muted-foreground">Mon – Sat: 7:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                <iframe
                  title="Browns' Fencing & Equipment Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52766.87279574845!2d-84.42!3d34.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885f5e6e2a6e5d3d%3A0x4e5d3e3d3e3d3e3d!2sFairmount%2C%20GA%2030139!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
