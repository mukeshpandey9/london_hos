import React from "react";

export default function BusinessOperationsPage() {
  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-5">
              Business Operations
            </h1>
            <p className="text-slate-700 mb-5 text-justify">
              At New London Hospitality, we optimize business operations to
              ensure efficiency and guest satisfaction. From staffing and
              training to performance management and client satisfaction.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/business.jpeg"
              alt="Business Operations"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:w-96"
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-700 text-justify mb-5">
            We manage staffing, recruitment, training, scheduling, and
            performance to maintain high operational standards and enhance
            client satisfaction. Our approach includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Staffing:</strong> Ensuring skilled staff for exceptional
              service.
            </li>
            <li>
              <strong>Training:</strong> Continuous development for high service
              standards.
            </li>
            <li>
              <strong>Scheduling:</strong> Efficient planning to meet business
              demands.
            </li>
            <li>
              <strong>Performance Management:</strong> Regular assessments for
              improvement and recognition.
            </li>
            <li>
              <strong>Operational Standards:</strong> Implementing best
              practices for efficiency.
            </li>
            <li>
              <strong>Client Satisfaction:</strong> Prioritizing personalized
              service and feedback.
            </li>
            <li>
              <strong>Success Metrics:</strong> Using data to measure
              performance and outcomes.
            </li>
          </ul>
          <p className="text-gray-700 text-justify mb-5">
            Our approach ensures smooth operations, efficiency, and client
            satisfaction, driving business success and continuous improvement in
            the hospitality industry.
          </p>
          <h2 className="text-2xl font-semibold text-dark mb-4">
            Key Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Efficiency:</strong> Streamlined processes for improved
              productivity.
            </li>
            <li>
              <strong>Service Excellence:</strong> Consistent high standards
              through training.
            </li>
            <li>
              <strong>Client Satisfaction:</strong> Building loyalty and
              positive experiences.
            </li>
            <li>
              <strong>Financial Performance:</strong> Effective management for
              better outcomes.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Innovating to stay ahead
              in the industry.
            </li>
          </ul>
          <p className="text-gray-700 text-justify mb-5">
            New London Hospitality excels in business operations, ensuring
            exceptional service and driving success in the hospitality sector
            through dedication and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
}
