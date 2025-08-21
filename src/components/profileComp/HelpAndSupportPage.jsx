import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const HelpAndSupportPage = ({ onBack, darkMode }) => {
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
        <h1 className="text-lg font-bold">Help & Support</h1>
      </div>

      {/* Help Topics */}
      <div className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="font-semibold text-base mb-2">How can we help?</h2>
          <p>
            Whether you’re a guest or a host, we’re here to assist you with
            booking, hosting, payments, or safety concerns.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">Contact Us</h2>
          <p>
            Have an issue or question? Reach out to our 24/7 support team
            through the app or email us at{" "}
            <span className="underline">support@airbnbclone.com</span>.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-2">Common Topics</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Booking and cancellations</li>
            <li>Refunds and payment issues</li>
            <li>Account and login help</li>
            <li>Hosting guidelines</li>
            <li>Safety tips for guests and hosts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
