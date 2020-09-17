import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full">
      <div className="max-w-screen-xl w-full mx-auto px-4 py-2 md:py-4 md:px-16">
        <p className="text-center text-gray-300 text-sm">
          Copyright © 2020 myAlchemist | Website by
          <a className="text-white underline" href="#">
            Some Guys
          </a>
        </p>
      </div>
    </footer>
  );
}
