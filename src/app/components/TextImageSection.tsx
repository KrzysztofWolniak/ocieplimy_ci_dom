// components/CustomSection.js
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import PropTypes from "prop-types";

const SubHeader = ({ children }) => (<span className="text-orange-600 flex">
	<svg  width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.05327 18.0159C11.3705 17.9936 13.6647 17.0337 15.3144 15.4034C17.2737 13.4672 18.2828 10.6023 17.9308 7.86741C17.3276 3.18037 13.4748 0 8.99539 0C5.5923 0 2.2845 2.12887 0.833752 5.21593C-0.276941 7.57935 -0.278893 10.4325 0.833752 12.8002C2.27422 15.8654 5.52763 17.9831 8.93752 18.0159C8.9761 18.016 9.01469 18.016 9.05327 18.0159ZM8.94716 16.5146C5.48589 16.4812 2.25665 13.8046 1.6146 10.373C1.16195 7.95356 2.01647 5.3354 3.79647 3.6173C5.875 1.61105 9.14144 0.938865 11.8574 2.07613C14.2877 3.09382 16.1065 5.45618 16.4417 8.05914C16.729 10.2901 15.9283 12.6283 14.355 14.239C12.975 15.6517 11.0396 16.4953 9.04362 16.5146C9.01146 16.5147 8.97933 16.5147 8.94716 16.5146Z" fill="rgb(234 88 12 / var(--tw-bg-opacity))"></path>
                            <path d="M8.99661 15.3602C12.5094 15.3602 15.357 12.5125 15.357 8.99979C15.357 5.48705 12.5094 2.6394 8.99661 2.6394C5.48387 2.6394 2.63623 5.48705 2.63623 8.99979C2.63623 12.5125 5.48387 15.3602 8.99661 15.3602Z" fill="rgb(234 88 12 / var(--tw-bg-opacity))"></path>
                        </svg>
	<h5 className="ms-3 leading-tight text-[20px] tracking-[2px] flex italic">{children}</h5>
</span>);

const CustomLink = ({ href, children }) => (
	<Button as={Link} href={href}    className="rounded-sm tracking-[1px] text-[16px] h-12 bg-orange-600  font-[500]">
		{children}
	</Button>
);

const Section = ({ id, imageSrc, altText, header, subHeader, paragraphs, link }) => (
	<section id={id} className="py-16  flex flex-col justify-between lg:flex-row px-3 xl:px-0 lg:mb-5 " style={{ backgroundColor: "#1F1F1F" }}>
		<div className="   min-h-full xl:w-[44vw] *:h-full mb-5">
			<Image
				radius="sm"
				src={imageSrc}
				alt={altText}
				style={{height:"100%"}}
				className="lg:w-[45vw] lg:max-w-[45vw] lg:-translate-x-[30px]   xl:max-w-[57vw] xl:w-[46vw]  object-cover lg:rounded-s-none xl:rounded-s-none"
			/>
		</div>
		<div className="w-full xl:w-1/2 ps-5 ">
			<div className="mx- w- text-start xl:max-w-3xl xl:pe-5 h-full flex flex-col justify-start  xl:mt-0 pe-8 ">
				<SubHeader>{subHeader}</SubHeader>
				<h2 className="mb-6 leading-tight font-extrabold text-[36px] tracking-[2px]">{header}</h2>
				{paragraphs.map((text, index) => (
					<p key={index} className="mb-6 leading-[1.8] font-[200] text-[15px] tracking-[1px]">
						{text}
					</p>
				))}
				<div className=" mt-auto">
					<CustomLink href={link.href} >
						{link.text}{" "}
						{
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8 1H1V15C1 16.1046 1.89543 17 3 17H15C16.1046 17 17 16.1046 17 15V10"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path d="M6 12L17 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M12 1H17V6" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						}
					</CustomLink>
				</div>
			</div>
		</div>
	</section>
);

export default Section;
