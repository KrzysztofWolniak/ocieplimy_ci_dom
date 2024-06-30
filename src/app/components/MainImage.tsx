import React from "react";
import { Image } from "@nextui-org/react";
import mainImage from "./assets/attic.webp";
import NextImage from "next/image";
import styles from './MainImage.module.css';
export default function MainImage() {
  return (
    <div className={styles.imageContainer}>
       <NextImage src={mainImage} alt="alt" className="h-full w-full object-cover" ></NextImage>
      
    </div>
  );
}
