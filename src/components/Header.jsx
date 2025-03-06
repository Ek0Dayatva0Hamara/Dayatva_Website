import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header class="header bg-white">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-20 items-center justify-between">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a class="block text-teal-600" href="/">
                <span class="sr-only">Home</span>

                <img src={logo} alt="" className="h-16" />
              </a>
            </div>

            <div class="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" class="hidden md:block">
                <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Members{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Achievements{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Get Involved{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Member's Area{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Blog{" "}
                      <sup className="bg-[#ff5722] p-1 rounded-full text-white">
                        new
                      </sup>{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
