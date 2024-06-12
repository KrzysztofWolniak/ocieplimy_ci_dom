// components/CustomSection.js
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import PropTypes from "prop-types";

const SubHeader = ({ children }) => <h5 className="text-primary mb-2">{children}</h5>;

const CustomLink = ({ href, children }) => (
	<Button as={Link} href={href} color="secondary" className="mt-8">
		{children}
	</Button>
);

const Section = ({ id, imageSrc, altText, header, subHeader, paragraphs, link }) => (
	<section id={id} className="py-16  flex flex-col xl:flex-row px-3 xl:px-0 " style={{ backgroundColor: "#1F1F1F" }}>
		<div className=" w-full xl:w-1/2">
			<Image src={imageSrc} alt={altText} className="xl:max-w-[51vw] xl:w-[43vw] h-[700px] object-cover xl:rounded-s-none" />
		</div>
		<div className="w-full xl:w-1/2">
			<div className=" mx- w- text-center xl:max-w-3xl xl:pe-5 h-full flex flex-col justify-start mt-5 xl:mt-0  ">
				<SubHeader>{subHeader}</SubHeader>
				<h2 className="mb-6">{header}</h2>
				{paragraphs.map((text, index) => (
					<p key={index} className="mb-6">
						{text}
					</p>
				))}
				<div className=" mt-auto">
					<CustomLink href={link.href}>{link.text}</CustomLink>
				</div>
			</div>
		</div>
	</section>
);

export default Section;
