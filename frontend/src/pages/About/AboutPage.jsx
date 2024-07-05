import React from "react";
import CountUp from "react-countup";

export default function AboutPage() {
  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl text-center md:text-left lg:text-6xl font-bold text-slate-700 mb-5">
              Our Vision is Hospitality Transformation
            </h1>
            <p className="text-slate-700 mb-5">
              New London Hospitality is a prominent business management company
              that plays a pivotal role in the dynamic hospitality industry.
              With a robust portfolio, we specialize in overseeing the
              operations and setting the strategic direction for a diverse range
              of business properties. Our expertise spans various essential
              functions within the hospitality sector, ensuring optimal
              performance and growth.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/about.jpg"
              alt="Hero"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:w-96"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
          <div className="flex flex-col justify-center items-center">
            <span className="md:text-4xl text-3xl text-gray-600 font-bold">
              <CountUp end={3.5} />+
            </span>
            <span className="text-gray-900 font-semibold">years of experience</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="md:text-4xl text-3xl text-gray-600 font-bold">
              <CountUp end={23} />+
            </span>
            <span className="text-gray-900 font-semibold">projects</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="md:text-4xl text-3xl text-gray-600 font-bold">
              <CountUp end={830} />+
            </span>
            <span className="text-gray-900 font-semibold">positive responses</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="md:text-4xl text-3xl text-gray-600 font-bold">
              <CountUp end={100000} />+
            </span>
            <span className="text-gray-900 font-semibold">trusted hotels</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Business Operations</h2>
            <p className="text-gray-700">
              At New London Hospitality, we excel in optimizing business operations to enhance efficiency and guest satisfaction. From streamlining processes to ensuring seamless day-to-day functioning, our focus is on delivering exceptional service while maximizing operational effectiveness.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Revenue Management</h2>
            <p className="text-gray-700">
              Effective revenue management is crucial in the competitive hospitality landscape. We employ advanced strategies to optimize pricing, forecast demand accurately, and capitalize on revenue opportunities, thereby maximizing profitability for our clients.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Financial Management</h2>
            <p className="text-gray-700">
              Sound financial management is fundamental to our approach. We meticulously analyze financial performance, manage budgets, and implement cost-control measures to ensure sustainable profitability and long-term financial health for the properties under our management.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Technology and Innovation</h2>
            <p className="text-gray-700">
              Embracing cutting-edge technology and fostering innovation are key pillars of our strategy. We leverage the latest hospitality management systems and innovative solutions to enhance guest experiences, streamline operations, and stay ahead in a rapidly evolving industry.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Customer Relations</h2>
            <p className="text-gray-700">
              Exceptional customer relations lie at the heart of our service philosophy. We prioritize building strong guest relationships through personalized experiences, attentive service, and responsiveness to feedback, thereby fostering loyalty and driving guest satisfaction.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Human Resources</h2>
            <p className="text-gray-700">
              Our commitment to excellence extends to our people. We invest in recruiting top talent, provide comprehensive training programs, and foster a culture of continuous learning and development. By empowering our teams, we ensure they deliver the highest standards of service and professionalism.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Quality Assurance</h2>
            <p className="text-gray-700">
              Maintaining high standards of quality is non-negotiable. We implement rigorous quality assurance protocols, conduct regular inspections, and uphold industry best practices to ensure consistency, safety, and compliance across all managed properties.
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold text-dark mb-4">Our Commitment</h2>
            <p className="text-gray-700">
              At New London Hospitality, we are dedicated to exceeding expectations, driving profitability, and creating memorable guest experiences. With a focus on operational excellence, financial prudence, and innovation, we partner with property owners to unlock the full potential of their hospitality investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
