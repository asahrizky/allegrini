import React, { Fragment, useRef, useState, useEffect } from "react";
// import { Transition } from "@headlessui/react";
import "./Slider.css";
// Penggunaan Array Of Object
export default function Slider({ images = [], onPrev, onNext }) {
  const [index, setIndex] = useState(0);
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div className="max-w-4xl px-4">
      <div className="relative max-h-full">
        <div className="absolute inset-8">
          <div className="relative max-h-[200px]">
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 rotate-[-120deg]"
              enterTo="opacity-100 rotate-0"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0"
              leaveTo="opacity-0"
            >
              <img
                key={index}
                src={images[index]?.image ?? ""}
                className="object-cover w-full h-full"
                alt="slider"
              />
            </Transition>
          </div>
        </div>

        <div className="flex items-center absolute top-40 right-[-40%]">
          <div className="block bg-white shadow-lg rounded-md h-full max-w-md p-6">
            <h2 className="mb-2 font-bold text-alles-500">
              {images[index]?.title ?? ""}
            </h2>
            <p>{images[index]?.description ?? ""}</p>

            <div className="mt-4">
              <a
                href={images[index]?.link ?? ""}
                className="font-bold text-alles-500 underline"
              >
                Read More
              </a>
            </div>
          </div>
          {/* trigger event untuk setIndex */}
          <button
            className="grow-0 p-2"
            onClick={() => {
              // untuk mengatur index dari array of object
              setIndex((index + 1) % images.length);
              setIsShowing(false);
              setTimeout(() => {
                setIsShowing(true);
              }, 200);
              onNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative py-[450px]">
        <div className="flex absolute py-[100px]">
          <img src="./asset/Line1.svg" alt="" />
          <h1 className="px-4">
            <b>OUR PARTNERS</b>
          </h1>
        </div>
        <div className="flex">
          <img className="py-40" src="./asset/partner1.png" alt="" />
          <img className="py-40 px-5" src="./asset/partner2.png" alt="" />
          <img className="py-40 px-5" src="./asset/partner3.png" alt="" />
          <img className="py-40 px-5" src="./asset/partner4.png" alt="" />
          <img className="py-40 px-5" src="./asset/partner5.png" alt="" />
        </div>
      </div>
    </div>
  );
}
