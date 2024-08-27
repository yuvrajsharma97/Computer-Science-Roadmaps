import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-bodyheading text-center mb-8">
        Privacy Policy
      </h1>

      <section className="mb-6">
        <p className="text-lg">
          At Computer Science Roadmap, we are committed to protecting your
          privacy and ensuring that your personal data is handled securely. This
          Privacy Policy explains how we collect, use, and protect your
          information in compliance with the General Data Protection Regulation
          (GDPR) and other relevant data protection laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-bodyheading">
          Data We Collect
        </h2>
        <p className="text-lg">
          We collect personal information that you provide to us directly, such
          as your name, email address, and any other information you choose to
          share when you contact us or use our services. We also collect data
          automatically through the use of cookies and other tracking
          technologies when you visit our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-bodyheading">
          How We Use Your Data
        </h2>
        <p className="text-lg">
          Your data is used to provide and improve our services, respond to your
          inquiries. We ensure that your data is processed lawfully, fairly, and
          transparently.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-bodyheading">
          Data Protection and Security
        </h2>
        <p className="text-lg">
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, disclosure, or destruction. Your
          data is stored securely, and we regularly review our data protection
          practices to ensure the safety of your information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-bodyheading">
          Your Rights Under GDPR
        </h2>
        <p className="text-lg">
          As a user, you have the right to access, rectify, or erase your
          personal data. You also have the right to restrict or object to
          certain types of data processing and the right to data portability. If
          you wish to exercise any of these rights, please contact us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-bodyheading">
          Changes to This Policy
        </h2>
        <p className="text-lg">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. We encourage you to review this
          policy periodically for any updates.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
