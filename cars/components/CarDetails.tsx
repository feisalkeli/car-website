import React from "react";
import { CarCardProps } from "./CarCard";
import { CarCardComponentProps } from "@/types";
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardComponentProps;
}
const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
