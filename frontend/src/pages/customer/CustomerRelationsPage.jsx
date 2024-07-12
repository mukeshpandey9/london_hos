import React from "react";

export default function CustomerRelationsPage() {
  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl text-center whitespace-nowrap md:text-left lg:text-6xl font-bold text-slate-700 mb-5">
              Customer Relations
            </h1>
            <p className="text-slate-700 text-justify mb-5">
              Exceptional customer relations lie at the heart of our service
              philosophy. At New London Hospitality, we prioritize building
              strong guest relationships through personalized experiences,
              attentive service, and responsiveness to feedback. Our goal is to
              foster loyalty and drive guest satisfaction.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/customer.jpeg"
              alt="Customer Relations"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:w-96"
            />
          </div>
        </div>

        <div className="mt-12">
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Personalized Experiences:</strong> Tailoring services to
              meet individual guest needs.
            </li>
            <li>
              <strong>Attentive Service:</strong> Providing prompt and
              professional responses to guest requests.
            </li>
            <li>
              <strong>Feedback Responsiveness:</strong> Actively seeking and
              using feedback to improve services.
            </li>
          </ul>
          <p className="text-gray-700 text-justify mb-5">
            Our customer relations approach builds strong guest relationships,
            fostering loyalty and ensuring repeat business.
          </p>
          <h2 className="text-2xl font-semibold text-dark mb-4">
            Key Components of Our Customer Relations Approach
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Guest Interaction:</strong> Engaging with guests at every
              touchpoint.
            </li>
            <li>
              <strong>Personal Touch:</strong> Adding a personal touch to every
              interaction.
            </li>
            <li>
              <strong>Problem Resolution:</strong> Resolving issues promptly and
              effectively.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-dark mb-4">
            Benefits of Our Customer Relations Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Increased Guest Loyalty:</strong> Exceptional service
              fosters guest loyalty.
            </li>
            <li>
              <strong>Enhanced Reputation:</strong> Positive guest experiences
              enhance our reputation.
            </li>
            <li>
              <strong>Improved Guest Satisfaction:</strong> Commitment to
              exceeding guest expectations.
            </li>
          </ul>
          <p className="text-gray-700 text-justify mb-5">
            At New London Hospitality, exceptional customer relations are key to
            our success. Our team is dedicated to providing the highest level of
            service, ensuring every guest has a positive and memorable
            experience. We understand that exceptional customer relations are
            key to our success. Our dedicated team is committed to providing the
            highest level of service, ensuring that every guest has a positive
            and memorable experience.
          </p>
        </div>
      </div>
    </div>
  );
}
