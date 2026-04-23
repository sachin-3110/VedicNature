import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-32 pb-20 font-sans text-[#1c1c18]">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-12 tracking-tight border-b border-[#d1c5b4]/40 pb-6">Terms & Conditions</h1>
        
        <div className="space-y-8 text-[#5f5e5e] leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">1. Introduction</h2>
            <p>
              Welcome to Vedic Nature. These Terms and Conditions govern your use of our website and the purchase of our products. By accessing this website or making a purchase, you agree to be bound by these terms. If you do not agree with any part of these terms, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">2. Product Information & Pricing</h2>
            <p>
              We strive to ensure that all details, descriptions, and prices of products appearing on our website are accurate. However, errors may occur. If we discover an error in the price of any goods which you have ordered, we will inform you of this as soon as possible and give you the option of reconfirming your order at the correct price or cancelling it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">3. Orders and Payments</h2>
            <p>
              All orders are subject to acceptance and availability. Once you place an order, you will receive an acknowledgment email confirming receipt of your order. This email is only an acknowledgment and does not constitute acceptance of your order. A contract between us for the purchase of the goods will not be formed until your payment has been approved and we have debited your payment card.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">4. Shipping & Delivery</h2>
            <p>
              We aim to dispatch your products within the stated timeframe. Delivery times may vary according to availability and any guarantees or representations made as to delivery times are subject to any delays resulting from postal delays or force majeure for which we will not be responsible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">5. Returns & Refunds</h2>
            <p>
              We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return the unused product within 7 days of delivery for a refund or exchange, subject to our Return Policy conditions. Please note that opened fragrances cannot be returned for hygiene reasons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">6. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Vedic Nature or its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <ul className="mt-2 space-y-1">
              <li><strong>Email:</strong> care.simpbliss@gmail.com</li>
              <li><strong>Phone:</strong> +91 9667630679</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
