import React from "react";

export default function TechnologyAndInnovationPage() {
  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-5">
              Technology and Innovation
            </h1>
            <p className="text-slate-700 text-justify mb-5">
              Embracing cutting-edge technology and fostering innovation are key
              pillars of our strategy at New London Hospitality. We leverage the
              latest hospitality management systems and innovative solutions to
              enhance guest experiences, streamline operations, and stay ahead
              in a rapidly evolving industry.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/tech.jpeg"
              alt="Technology and Innovation"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:w-96"
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-700 text-justify mb-5">
            Our approach to technology and innovation focuses on enhancing guest
            experiences, improving operational efficiency, and staying ahead in
            the industry.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Hospitality Management Systems:</strong> Streamline
              operations and provide real-time insights.
            </li>
            <li>
              <strong>Guest Experience Enhancements:</strong> Offer personalized
              and convenient services.
            </li>
            <li>
              <strong>Operational Efficiency:</strong> Optimize processes and
              reduce costs.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-dark mb-4">
            Key Components of Our Strategy
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Advanced Management Systems:</strong> Oversee all aspects
              from reservations to housekeeping.
            </li>
            <li>
              <strong>Mobile Solutions:</strong> Provide easy access to services
              via mobile devices.
            </li>
            <li>
              <strong>Data Analytics:</strong> Gain insights into guest
              preferences and operational performance.
            </li>
            <li>
              <strong>Automation:</strong> Streamline tasks and improve staff
              focus on guest service.
            </li>
            <li>
              <strong>Innovation Culture:</strong> Foster a culture of exploring
              new technologies.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-dark mb-4">
            Benefits of Our Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Enhanced Guest Experience:</strong> Provide seamless and
              personalized services.
            </li>
            <li>
              <strong>Operational Efficiency:</strong> Reduce costs and improve
              overall efficiency.
            </li>
            <li>
              <strong>Real-Time Insights:</strong> Make informed decisions based
              on data analytics.
            </li>
            <li>
              <strong>Competitive Advantage:</strong> Stay ahead in the industry
              with innovative technologies.
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Always explore new ways
              to enhance offerings.
            </li>
          </ul>
          <p className="text-gray-700 text-justify mb-5">
            At New London Hospitality, we believe that technology and innovation
            are key to our success. Our dedicated team is committed to
            leveraging the latest advancements to provide the best possible
            experience for our guests and ensure the ongoing success of our
            operations.
          </p>
        </div>
      </div>
    </div>
  );
}
