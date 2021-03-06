import React from "react";

export default function FeatureBlock2() {
  return (
    <section>
      <div className="flex flex-col w-full bg-black md:flex-row">
        <div className="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 className="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl">
            Your Future Depends on What You Do Today
          </h2>
          <p className="max-w-lg mt-5 text-xl text-gray-500 md:text-base lg:text-xl xl:text-2xl">
            Learn the skills that will help you build a financially successful
            future.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            className="inset-0 object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col flex-col-reverse w-full bg-black md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1538691929598-f3c649a7b92e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            className="inset-0 object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
          <h2 className="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl">
            Find Your Passion
            <br />
            Find Your Happiness
          </h2>
          <p className="max-w-lg mt-5 text-xl text-gray-500 md:text-base lg:text-xl xl:text-2xl">
            Find your true passion and live the life you've always dreamed.
          </p>
        </div>
      </div>
    </section>
  );
}
