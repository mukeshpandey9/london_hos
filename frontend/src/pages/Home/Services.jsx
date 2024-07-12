import React from "react";
import {
  Activity,
  Shield,
  Code,
  Briefcase,
  Calculator,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8 text-gray-600 " />,
      title: "Business Operations",
      link: "business-operations",
      description:
        "We manage daily operations, staffing, recruitment, training, and scheduling to ensure high service standards and operational efficiency.",
    },
    {
      icon: <Shield className="h-8 w-8 text-gray-600 " />,
      title: "Revenue Management",
      link: "",
      description:
        "Our firm maximizes revenue through strategic pricing, optimizing distribution channels, and monitoring market trends.",
    },
    {
      icon: <Code className="h-8 w-8 text-gray-600 " />,
      title: "Financial Management",
      link: "financial-management",
      description:
        "We provide budgeting, accounting, and financial reporting to ensure profitability and compliance, offering real-time financial insights.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-gray-600 " />,
      title: "Technology and Innovation",
      link: "technology-and-innovation",
      description:
        "We implement advanced technologies and innovative solutions to enhance business efficiency and customer experience.",
    },
    {
      icon: <Calculator className="h-8 w-8 text-gray-600 " />,
      title: "Customer Relations",
      link: "customer-relations",
      description:
        "Our team focuses on maintaining excellent customer relations, ensuring high levels of client satisfaction.",
    },
  ];

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8  lg:mb-16">
          <h2 className="mb-4 text-4xl font-semibold md:font-extrabold text-center text-gray-900 ">
            What We Do
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {services.map((service, index) => (
            <Link
              to={`/${service.link}`}
              key={index}
              className="text-center flex flex-col items-center"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-800 ">
                {service.title}
              </h3>
              <p className="text-gray-500 ">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
