import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f3] pt-32 pb-20 font-sans text-[#1c1c18]">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-12 tracking-tight border-b border-[#d1c5b4]/40 pb-6">Privacy Policy</h1>
        
        <div className="space-y-8 text-[#5f5e5e] leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">1. Privacy Commitment</h2>
            <p>
              At Vedic Nature, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., processing your order).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">5. Cookies</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#111] mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us using the details set out below:
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
