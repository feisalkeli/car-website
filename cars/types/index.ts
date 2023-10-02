import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CustomFilterProps {
  title: string;
}

export interface CustomSearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarCardComponentProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  displacement: number;
  cylinders: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
