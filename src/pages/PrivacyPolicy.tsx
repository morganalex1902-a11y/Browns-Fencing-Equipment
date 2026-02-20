import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Privacy Policy" description="Privacy policy for Browns' Fencing & Equipment. Learn how we collect, use, and protect your information." canonical="/privacy-policy" />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/80">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Information We Collect</h2>
              <p>When you submit a quote request or contact form, we collect your name, phone number, email address, property address, and project details. This information is used solely to respond to your inquiry and provide estimates for our services.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Quote Request Data</h2>
              <p>Information submitted through our quote request form is sent directly to our business email. We do not store this data in any external databases or share it with third parties.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Email Communications</h2>
              <p>If you contact us via email at brownsfencingnequip@gmail.com, we retain your correspondence to provide ongoing service and follow-up. You may request deletion of your email communications at any time.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Cookie Usage</h2>
              <p>Our website uses essential cookies to improve site performance and user experience. We also use Google Maps for location display, which may set its own cookies. You can manage your cookie preferences through the cookie consent banner.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Data Protection</h2>
              <p>We take reasonable measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Contact Us</h2>
              <p>If you have any questions about this privacy policy or wish to request deletion of your data, please contact us:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Phone: <a href="tel:706-847-5979" className="text-secondary hover:underline">706-847-5979</a></li>
                <li>Email: <a href="mailto:brownsfencingnequip@gmail.com" className="text-secondary hover:underline">brownsfencingnequip@gmail.com</a></li>
                <li>Location: Fairmount, GA 30139</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
