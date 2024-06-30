import Image from "next/image";
import NavbarComponent from "./components/Navbar";
import MainImage from "./components/MainImage";
import mainImage from "./_components/assets/attic.webp";
import { NextUIProvider } from "@nextui-org/react";
import NabvigationBar from "./components/NavigationBar";
import MainSlider from "./components/MainSlider";
import Section from "./components/TextImageSection";
import ServicesFront from "./components/ServicesFront";
import CtaBlock from "./components/CtaBlock";
import AttributesSection from "./components/AttributesSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
export default function Home() {
	return (
		<>
			<MainSlider></MainSlider>
			<Section
				id="section1"
				imageSrc="https://static.cyberfolks.pl/img/cpx/construction%20company-3792575-hi_res.webp"
				altText="OcieplimyCiDom - Oszczędzaj energię z ekologicznym ociepleniem"
				header="OcieplimyCiDom - Oszczędzaj energię z ekologicznym ociepleniem"
				subHeader="Innowacyjne rozwiązania"
				paragraphs={[
					"Witaj w OcieplimyCiDom - firmie, która dba o Twój komfort i oszczędności energii. Nasza specjalizacja to ekologiczne materiały, takie jak rockwool, które zapewniają skuteczną izolację termiczną. Dzięki naszej zaawansowanej metodzie nadmuchowej, możemy kompleksowo zarządzać procesem ocieplania domu, zapewniając trwałą odporność strukturalną.",
					"Naszym głównym celem jest dostarczenie najwyższej jakości usług, które będą adaptacyjne do indywidualnych potrzeb każdego klienta. Dlaczego warto skorzystać z naszej usługi? Ponieważ oferujemy nowoczesne rozwiązania, które zapewniają oszczędność energii, a także zwracają uwagę na ekologię i zrównoważony rozwój.",
					"Oferujemy kompleksowe planowanie i realizację ocieplania domu, wykorzystując innowacyjne technologie i zaawansowane inżynierie. Nasze usługi są najlepszym rozwiązaniem dla Twojego domu, gwarantując efektywność i trwałość na długie lata.",
				]}
				link={{ href: "https://now.cyberfolks.pl/demo/CP97GNGSF1VW/o-nas", text: "CZYTAJ WIĘCEJ" }}
			/>

			<ServicesFront></ServicesFront>
			<CtaBlock></CtaBlock>
			{/* <AttributesSection></AttributesSection> */}
			<Section
				id="section2"
				imageSrc="https://static.cyberfolks.pl/img/cpx/construction%20company-1145434-hi_res.webp"
				altText="OcieplimyCiDom - Specjaliści w Ocieplaniu Domów"
				header="OcieplimyCiDom - Specjaliści w Ocieplaniu Domów"
				subHeader="Profesjonalna pomoc ekspertów"
				paragraphs={[
					"Jesteśmy zespołem ekspertów specjalizujących się w ekologicznym ocieplaniu domów.",
					"Nasza firma ma bogate doświadczenie w branży i z dumą możemy powiedzieć, że osiągnęliśmy wiele sukcesów.",
					"Zapraszamy do skorzystania z naszych usług i dołączenia do grona zadowolonych klientów.",
				]}
				link={{ href: "https://now.cyberfolks.pl/demo/CP97GNGSF1VW/nasza-oferta", text: "CZYTAJ WIĘCEJ" }}
			/>
			<BlogSection></BlogSection>
			
		</>
	);
}
