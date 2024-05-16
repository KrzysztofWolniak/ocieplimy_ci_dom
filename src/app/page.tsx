import Image from "next/image";
import NavbarComponent from "./_components/Navbar";
import MainImage from "./_components/MainImage";
import mainImage from "./_components/assets/attic.webp";
import { NextUIProvider } from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
      <main className="">
        <NavbarComponent />
        <MainImage />
      </main>
    </NextUIProvider>
  );
}
