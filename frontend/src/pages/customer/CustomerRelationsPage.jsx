import React from "react";

export default function CustomerRelationsPage() {
  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl text-center  whitespace-nowrap md:text-left lg:text-6xl font-bold text-slate-700 mb-5">
              Customer Relations
            </h1>
            <p className="text-slate-700 mb-5">
              Exceptional customer relations lie at the heart of our service philosophy. At New London Hospitality, we prioritize building strong guest relationships through personalized experiences, attentive service, and responsiveness to feedback. Our goal is to foster loyalty and drive guest satisfaction.
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
          <p className="text-gray-700 mb-5">
            Our customer relations approach is centered around understanding and meeting the needs of our guests. We believe that exceptional service and personalized experiences are key to building lasting relationships and ensuring guest satisfaction.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-5">
            <li><strong>Personalized Experiences:</strong> We tailor our services to meet the individual needs and preferences of each guest, ensuring a unique and memorable experience.</li>
            <li><strong>Attentive Service:</strong> Our team is trained to provide attentive and responsive service, addressing any concerns or requests promptly and professionally.</li>
            <li><strong>Feedback Responsiveness:</strong> We actively seek and respond to guest feedback, using it to continuously improve our services and exceed guest expectations.</li>
          </ul>
          <p className="text-gray-700 mb-5">
            By focusing on these key areas, we build strong relationships with our guests, fostering loyalty and ensuring repeat business. Our commitment to exceptional customer relations sets us apart in the hospitality industry.
          </p>
          <h2 className="text-2xl font-semibold text-dark mb-4">Key Components of Our Customer Relations Approach</h2>
          <ul className="list-disc list-inside text-gray-700 mb-5">
            <li><strong>Guest Interaction:</strong> We engage with our guests at every touchpoint, from booking to check-out, ensuring a seamless and enjoyable experience.</li>
            <li><strong>Personal Touch:</strong> Our team goes the extra mile to add a personal touch to every interaction, making guests feel valued and appreciated.</li>
            <li><strong>Problem Resolution:</strong> We are committed to resolving any issues promptly and effectively, ensuring that guests leave with a positive impression of our service.</li>
            <li><strong>Loyalty Programs:</strong> We offer loyalty programs and special incentives to reward repeat guests and encourage long-term relationships.</li>
            <li><strong>Consistent Quality:</strong> We maintain high standards of service across all properties, ensuring a consistent and exceptional experience for all guests.</li>
          </ul>
          <p className="text-gray-700 mb-5">
            Our dedication to customer relations extends beyond individual interactions. We believe that every guest interaction is an opportunity to build trust and loyalty. By consistently delivering high-quality service and personalized experiences, we create lasting relationships that drive our success.
          </p>
          <h2 className="text-2xl font-semibold text-dark mb-4">Benefits of Our Customer Relations Services</h2>
          <ul className="list-disc list-inside text-gray-700 mb-5">
            <li><strong>Increased Guest Loyalty:</strong> By providing exceptional service and personalized experiences, we foster guest loyalty and encourage repeat business.</li>
            <li><strong>Enhanced Reputation:</strong> Positive guest experiences and word-of-mouth referrals enhance our reputation and attract new guests.</li>
            <li><strong>Improved Guest Satisfaction:</strong> Our commitment to meeting and exceeding guest expectations leads to higher levels of guest satisfaction.</li>
            <li><strong>Positive Feedback:</strong> Satisfied guests are more likely to leave positive reviews and provide valuable feedback that helps us improve our services.</li>
            <li><strong>Competitive Advantage:</strong> Exceptional customer relations set us apart from competitors, making us the preferred choice for guests seeking a superior hospitality experience.</li>
          </ul>
          <p className="text-gray-700 mb-5">
            At New London Hospitality, we understand that exceptional customer relations are key to our success. Our dedicated team is committed to providing the highest level of service, ensuring that every guest has a positive and memorable experience.
          </p>
        </div>
      </div>
    </div>
  );
}
