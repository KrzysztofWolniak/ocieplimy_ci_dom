import React from "react";
import { Image } from "@nextui-org/react";
import mainImage from "./assets/attic.webp";
import NextImage from "next/image";
export default function MainImage() {
  return <NextImage  src={mainImage} alt="NextUI Album Cover" className="" />; 
}
