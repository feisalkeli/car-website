import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface CustomFilterProps {
  title: string;
}

export interface CustomSearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
//page terms and conditions
