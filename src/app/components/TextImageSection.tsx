// components/CustomSection.js
import { Card, Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const SubHeader = ({ children }) => (
  <h5 className="text-primary mb-2">
    {children}
  </h5>
);

const CustomLink = ({ href, children }) => (
  <Button
    as={Link}
    href={href}
    auto
    flat
    color="secondary"
    className="mt-8"
  >
    {children}
  </Button>
);

const Section = ({ id, imageSrc, altText, header, subHeader, paragraphs, link }) => (
  <section id={id} className="py-16  flex justify-between" style={{ backgroundColor: "#1F1F1F" }}>
    <div className=" ">
      <Image src={imageSrc} alt={altText} className="max-w-[51vw] w-[43vw] h-[700px] object-cover rounded-s-none" />
    </div>
    <div className=" mx-auto w-auto max-w-[30vw] ">
      <SubHeader>{subHeader}</SubHeader>
      <h2 className="mb-6">{header}</h2>
      {paragraphs.map((text, index) => (
        <p key={index} className="mb-6">{text}</p>
      ))}
      <CustomLink href={link.href}>{link.text}</CustomLink>
    </div>
  </section>
);



export default Section;
