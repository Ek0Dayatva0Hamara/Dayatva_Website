import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-xs">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div>
            <img src={logo} alt="logo" className="h-6" />
            <p className="mt-2 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
             {/* Social Media Icons */}
             <ul className="mt-2 flex gap-3">
              {[
                { name: "Facebook", link: "#", icon: "M12 2C6.5 2 2 6.5 2 12c0 4.9 3.7 9 8.4 9.9v-7h-2.5v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 3h-2.4v7c4.7-.8 8.4-5 8.4-9.9 0-5.5-4.5-10-10-10z" },
                { name: "Instagram", link: "#", icon: "M12 2.2c-3.2 0-3.6 0-4.9.1-1.3.1-2.2.3-3 .6a5.4 5.4 0 0 0-1.9 1.3c-.5.5-1 1.2-1.3 1.9-.3.8-.5 1.7-.6 3-.1 1.3-.1 1.7-.1 4.9s0 3.6.1 4.9c.1 1.3.3 2.2.6 3 .3.8.7 1.4 1.3 1.9a5.4 5.4 0 0 0 1.9 1.3c.8.3 1.7.5 3 .6 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.2-.3 3-.6a5.4 5.4 0 0 0 1.9-1.3c.5-.5 1-1.2 1.3-1.9.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.3-2.2-.6-3a5.4 5.4 0 0 0-1.3-1.9 5.4 5.4 0 0 0-1.9-1.3c-.8-.3-1.7-.5-3-.6-1.3-.1-1.7-.1-4.9-.1zm0 1.8c3.1 0 3.5 0 4.7.1 1.1.1 1.7.3 2.1.5.5.2.8.5 1.2 1.2.2.4.4 1 .5 2.1.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.1-.3 1.7-.5 2.1-.2.5-.5.8-1.2 1.2-.4.2-1 .4-2.1.5-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-1.1-.1-1.7-.3-2.1-.5a2.8 2.8 0 0 1-1.2-1.2c-.2-.4-.4-1-.5-2.1-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.1.3-1.7.5-2.1a2.8 2.8 0 0 1 1.2-1.2c.4-.2 1-.4 2.1-.5 1.2-.1 1.6-.1 4.7-.1zM12 5.7a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6zm0 10.4a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm5.2-10.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"},
                { name: "LinkedIn", link: "#", icon: "M4.5 3C3.1 3 2 4.1 2 5.5S3.1 8 4.5 8 7 6.9 7 5.5 5.9 3 4.5 3zM3 9h3v10H3V9zm5 0h3v1.3c.8-1.2 2.3-1.8 3.9-1.8 3.1 0 5 2 5 5v5.5h-3V13c0-1.5-.5-2.5-2-2.5-1.2 0-1.8.8-2 1.5-.1.2-.1.5-.1.8v6H8V9z" },
                { name: "YouTube", link: "#", icon: "M21.8 8.2s-.2-1.4-.9-2c-.9-.9-1.8-.9-2.2-1-3.1-.2-7.7-.2-7.7-.2h-.1s-4.6 0-7.7.2c-.4.1-1.3.1-2.2 1-.7.7-.9 2-.9 2S0 9.8 0 11.4v1.2c0 1.6.2 3.2.2 3.2s.2 1.4.9 2c.9.9 2 .9 2.5 1 1.8.1 7.6.2 7.6.2s4.6 0 7.7-.2c.4 0 1.3 0 2.2-1 .7-.7.9-2 .9-2s.2-1.6.2-3.2v-1.2c0-1.6-.2-3.2-.2-3.2zM9.7 15.5V8.5l6.5 3.5-6.5 3.5z" },
              ].map(({ name, link, icon }, index) => (
                <li key={index}>
                  <a href={link} className="hover:opacity-75">
                    <span className="sr-only">{name}</span>
                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-48 lg:grid-cols-4">
            {[
              { title: "About", links: ["Dayatva", "Dayatva Green", "Happiness", "Walk to Future", "DAATSE"] },
              { title: "Get Involved", links: ["Become Member", "Volunteer", "FAQs"] },
              { title: "Helpful Links", links: ["Contact", "FAQs", "Live Chat"] },
              { title: "Legal", links: ["Accessibility", "Returns Policy", "Refund Policy", "Hiring"] }
            ].map((section, index) => (
              <div key={index}>
                <p className="font-medium underline">{section.title}</p>
                <ul className="mt-2 space-y-1">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="hover:opacity-75">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-muted">
          &copy; 2025. Dayatva - A Social Initiative. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
