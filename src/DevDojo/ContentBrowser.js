import React from "react";

export default function ContentBrowser() {
  return (
    <main className="flex items-center min-h-screen px-8 mx-auto bg-white min-w-screen">
      {/* image */}
      <article className="w-1/2">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
          <div className="flex items-center h-8 text-white bg-gray-900">
            <div className="w-3 h-3 ml-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504985954001-5737b2af529e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2879&q=80"
            alt="A wooden table that has some accessories on it."
            className="object-cover w-full h-full"
          />
        </div>
      </article>

      {/* content */}
      <article className="relative w-1/2 h-full pl-12">
        <p className="text-sm font-bold tracking-wide text-indigo-500 uppercase">
          Awesome Features
        </p>
        <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900">
          Awesome Features
          <br /> for Everyone to Enjoy.
        </h2>
        <p className="mt-3 text-base text-gray-600">
          Perhaps the coolest features since the introduction of Poprocks! We've
          got some rock'n poppin features that will leave you wanting more.
          We've got a jampacked feature set of awesomeness that will blow your
          pants right off!
        </p>
        <a
          href="/security-awareness-training-topics/"
          className="flex items-center inline-block mt-8 font-medium text-indigo-500 underline"
        >
          <span>View All Features</span>
          <svg
            className="w-4 h-4 mt-1 ml-1 transform -rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </article>
    </main>
  );
}
