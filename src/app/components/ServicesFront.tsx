// components/ServicesFront.js

import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const ServicesFront = () => {
	return (
		// services-front text-black bg-transparent font-lato text-base font-normal text-left leading-normal m-0 p-0 border-0 block relative w-full h-full relative items-center justify-center
		<section className="relative overflow-hidden mb-20" style={{ backgroundColor: "#1F1F1F" }}>
			{/* services-front__container text-black bg-transparent font-lato text-base font-normal text-left leading-normal m-0 p-20 border-0 block relative w-full h-full relative overflow-hidden items-center justify-center z-10 */}

			<div className="services-front__items grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 px-8">
				<ServiceItem
					title="Ocieplanie domu"
					description="Nasza firma oferuje najlepsze rozwiązania w zakresie ocieplania domu, umożliwiając oszczędność energii i wykorzystując nowoczesne metody nadmuchowe."
					href="https://now.cyberfolks.pl/demo/CP97GNGSF1VW/nasza-oferta"
					bgImage=""
				/>
				<ServiceItem
					title="Ocieplanie domu z wykorzystaniem ekologicznych materiałów"
					description="Ocieplanie ekologicznymi materiałami, oszczędność energii"
					href="https://now.cyberfolks.pl/demo/CP97GNGSF1VW/nasza-oferta/ocieplanie-domu-z-wykorzystaniem"
					bgImage="https://static.cyberfolks.pl/img/cpx/construction company-8961695-hi_res.webp"
				/>
				<ServiceItem
					title="Instalacja ocieplenia rockwool"
					description="Skuteczna izolacja termiczna, oszczędność energii"
					href="https://now.cyberfolks.pl/demo/CP97GNGSF1VW/nasza-oferta/instalacja-ocieplenia-rockwool"
					bgImage="https://static.cyberfolks.pl/img/cpx/construction company-585419-hi_res.webp"
				/>
				<ServiceItem
					title="Metoda nadmuchowa ocieplenia"
					description="Skuteczne ocieplenie domu z wykorzystaniem nowoczesnej metody nadmuchowej"
					href="https://now.cyberfolks.pl/demo/CP97GNGSF1VW/nasza-oferta/metoda-nadmuchowa-ocieplenia"
					bgImage="https://static.cyberfolks.pl/img/cpx/construction company-17842695-hi_res.webp"
				/>
			</div>
		</section>
	);
};
const ServiceItem = ({ title, description, href, bgImage }) => {
	return (
		<Card
			light
			radius="none"
			className="w-full flex-shrink-0 h-[420px] mx-2"
			style={{
				backgroundImage: `url('${bgImage}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				
			}}
		>
			<CardBody className="  text-blue-600 bg-gradient-to-b from-transparent to-gray-600  text-base  font-normal font-lato text-center sm:text-left leading-normal m-0 p-0 border-0 block relative w-full  h-full ">
				<div className="p-8 bg-black bg-opacity-50 h-full flex flex-col justify-start">
					<p className="title text-white  text-lg font-normal font-poppins leading-snug m-0 mb-4">{title}</p>
					<p className="description text-gray-400 text-sm font-normal font-lato leading-relaxed m-0 mb-8">{description}</p>
					<div className="mt-auto">

					<CustomLink  href={href}>Zobacz więcej
						<svg width="15" height="15" viewBox="0 0 18 18" fill="none"  xmlns="http://www.w3.org/2000/svg" className="ml-3 text-white-600">
							<path
								d="M8 1H1V15C1 16.1046 1.89543 17 3 17H15C16.1046 17 17 16.1046 17 15V10"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path d="M6 12L17 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12 1H17V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</CustomLink>
					</div>
					
				</div>
			</CardBody>
			
		</Card>
	);
};
const CustomLink = ({ href, children }) => (
	<Button as={Link} href={href}    className="rounded-sm tracking-[1px] text-[16px] h-12 bg-orange-600 mt-auto p-0 px-4   font-[500]">
		{children}
	</Button>
);

export default ServicesFront;
