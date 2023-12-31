"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { CarCardComponentProps } from "@/types";
import { Transition, Dialog } from "@headlessui/react";
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardComponentProps;
}
const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 "
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300 "
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w lg p-6
                 max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white 
                 text-left shadow-xl transition-all 
                 flex flex-col gap-5"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute w-fit z-10 right-2 top-2  p-2
                     bg-primary-blue-100 rounded-full "
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div
                      className="relative w-full
                     h-40 bg-pattern bg-cover 
                    bg-center rounded-lg"
                    >
                      {" "}
                      <Image
                        src="/hero.png"
                        fill
                        priority
                        className="object-contain"
                        alt="car_image"
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="car_image"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="car_image"
                        />
                      </div>{" "}
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="car_image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make}
                      {/* <br /> */}
                      {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap g-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {" "}
                            {key.split("_").join("")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
