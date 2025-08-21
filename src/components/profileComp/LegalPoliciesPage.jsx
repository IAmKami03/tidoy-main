import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const LegalPoliciesPage = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen w-[375px] mx-auto p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900 shadow-lg"
      }`}
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link to="/profile">
          <MdArrowBack className="w-5 h-5 mr-2" />
        </Link>
        <h1 className="text-xl font-bold">Legal & Policies</h1>
      </div>

      {/* Intro */}
      <p className="text-sm mb-6 leading-relaxed">
        This page outlines the legal information and policies that govern your
        use of our platform. Please take a moment to review them.
      </p>

      {/* Sections */}
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="font-semibold mb-2">Terms of Service</h2>
          <p>
            By using this platform, you agree to follow our terms and
            conditions. These terms outline your responsibilities and what you
            can expect from us.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Privacy Policy</h2>
          <p>
            We respect your privacy. Our policy explains how we collect, use,
            and protect your personal data when you use our services.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Cancellation Policy</h2>
          <p>
            You can cancel bookings under certain conditions. This section
            explains our cancellation timelines and refund process.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Community Guidelines</h2>
          <p>
            We’re committed to a safe, respectful community. All users are
            expected to treat others with respect and follow our community
            standards.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Payment Terms</h2>
          <p>
            Learn about how payments are processed, when you're charged, and how
            we handle disputes or issues with transactions.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Data Protection</h2>
          <p>
            Your information is securely stored and protected. This section
            describes your rights and how we safeguard your data.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalPoliciesPage;
