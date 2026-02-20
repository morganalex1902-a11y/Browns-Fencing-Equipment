import { SEO } from "@/components/SEO";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Terms & Conditions" description="Terms and conditions for Browns' Fencing & Equipment services. Service scope, payment terms, and liability information." canonical="/terms-conditions" />

      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-primary-foreground/80">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Service Scope</h2>
              <p>Browns' Fencing & Equipment provides fencing installation, forestry mulching, skid steer, and tractor services in the Fairmount, GA area and surrounding North Georgia communities. All services are subject to a written or verbal estimate agreed upon before work begins.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Estimates & Pricing</h2>
              <p>All estimates are provided free of charge and are valid for 30 days from the date issued. Estimates are based on the conditions observed during the site visit. Unexpected conditions (underground utilities, rock, extreme terrain) may require revised pricing.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Payment Terms</h2>
              <p>Payment terms are agreed upon before work begins. For larger projects, a deposit may be required. Final payment is due upon completion of the work unless otherwise agreed in writing.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Equipment & Liability</h2>
              <p>Browns' Fencing & Equipment carries liability insurance. We are not responsible for damage to unmarked underground utilities, irrigation lines, or other hidden structures. Customers are responsible for marking property boundaries and utility lines before work begins.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Property Access</h2>
              <p>The customer must provide reasonable access to the work site for our equipment and crew. Any access restrictions must be communicated before work begins. We are not responsible for wear on existing driveways or access paths due to heavy equipment.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Weather Delays</h2>
              <p>Work may be delayed due to inclement weather. We will reschedule at the earliest opportunity and communicate any changes to the timeline. Weather delays do not constitute a breach of agreement.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Governing Law</h2>
              <p>These terms and conditions are governed by the laws of the State of Georgia. Any disputes arising from our services shall be resolved in the courts of Gordon County, Georgia.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">Contact</h2>
              <p>For questions about these terms, contact us at:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Phone: <a href="tel:706-847-5979" className="text-secondary hover:underline">706-847-5979</a></li>
                <li>Email: <a href="mailto:brownsfencingnequip@gmail.com" className="text-secondary hover:underline">brownsfencingnequip@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
