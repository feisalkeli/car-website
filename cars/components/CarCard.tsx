"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CarCardComponentProps } from "@/types";
import { calculateCarRent } from "@/utils";
import { CustomButton } from ".";
import CarDetails from "./CarDetails";

export interface CarCardProps {
  car: CarCardComponentProps;
}
const CarCard = ({ car }: CarCardProps) => {
  //modal state
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3">
        <Image
          src="/hero.png"
          fill
          priority
          className="object-contain"
          alt="car_image"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between">
          <div className="flex flex-col justify-center gap-2 items-center">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering_wheel"
            />
            <p className="text-[14px] ">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <Image src="/tire.svg" width={20} height={20} alt="tires" />
            <p className="text-[14px] ">
              {drive === "r" ? `Rear` : `Front`} Wheel Drive
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <Image src="/gas.svg" width={20} height={20} alt="steering_wheel" />
            <p className="text-[14px] ">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More "
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue "
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
