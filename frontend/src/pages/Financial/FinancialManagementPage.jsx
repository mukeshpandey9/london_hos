import React from "react";

export default function FinancialManagementPage() {
  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl text-center whitespace-nowrap md:text-left lg:text-6xl font-bold text-slate-700 mb-5">
              Financial Management
            </h1>
            <p className="text-slate-700 text-justify mb-5">
              At New London Hospitality, our financial management services
              encompass budgeting, accounting, and financial reporting to ensure
              each property's profitability. We employ accurate accounting
              practices to track all financial transactions, ensuring compliance
              with regulations and providing real-time insights into financial
              performance.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/finance.png"
              alt="Financial Management"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:w-96"
            />
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-700 text-justify mb-5">
            Our financial management practices provide comprehensive financial
            oversight and strategic support, ensuring the financial health and
            growth of each property.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Budgeting:</strong> Detailed budgets to plan and control
              expenditures.
            </li>
            <li>
              <strong>Accounting:</strong> Accurate tracking of all financial
              transactions.
            </li>
            <li>
              <strong>Financial Reporting:</strong> Comprehensive reports for
              informed decision-making.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-dark mb-4">
            Benefits of Our Financial Management Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-justify mb-5">
            <li>
              <strong>Improved Profitability:</strong> Effective budgeting and
              financial oversight.
            </li>
            <li>
              <strong>Enhanced Financial Health:</strong> Long-term financial
              stability.
            </li>
            <li>
              <strong>Informed Decision-Making:</strong> Accurate and timely
              financial data.
            </li>
          </ul>
          <p className="text-gray-700 text-justify mb-5">
            At New London Hospitality, our financial experts are committed to
            providing the highest level of service, ensuring our clients achieve
            their financial goals and secure long-term success. We understand
            that sound financial management is crucial to the success of any
            hospitality business. Our dedicated team of financial experts is
            committed to providing the highest level of service, ensuring that
            our clients achieve their financial goals.
          </p>
        </div>
      </div>
    </div>
  );
}
