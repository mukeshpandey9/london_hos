import React from "react";

export default function DiscordServer() {
  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-slate-700 mb-5">
          Discord Server
        </h1>
        <p className="text-slate-700 mb-5">
          Welcome to the New London Hospitality Discord Server!
        </p>
        <p className="text-slate-700 mb-5">
          Our Discord server is a vibrant community space where guests, team members, and hospitality enthusiasts come together to share experiences, seek assistance, and build lasting connections. By joining our server, you agree to abide by our community guidelines to ensure a positive and welcoming environment for everyone.
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 mb-5">
          Community Guidelines:
        </h2>
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-700 mb-3">
          Respect and Inclusivity:
        </h3>
        <ul className="list-disc list-inside text-slate-700 mb-5">
          <li>Treat everyone with respect, kindness, and empathy. Any form of harassment, discrimination, or hate speech will not be tolerated.</li>
          <li>Be inclusive and considerate of diverse backgrounds, cultures, and perspectives.</li>
        </ul>
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-700 mb-3">
          Communication:
        </h3>
        <ul className="list-disc list-inside text-slate-700 mb-5">
          <li>Use appropriate language and maintain a friendly tone in all discussions.</li>
          <li>Avoid spamming, excessive use of emojis, or disruptive behavior that may interfere with meaningful conversations.</li>
        </ul>
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-700 mb-3">
          Privacy and Safety:
        </h3>
        <ul className="list-disc list-inside text-slate-700 mb-5">
          <li>Respect the privacy of others. Do not share personal information without consent.</li>
          <li>Report any suspicious activity or violations of these guidelines to the server moderators immediately.</li>
        </ul>
      </div>
    </div>
  );
}
