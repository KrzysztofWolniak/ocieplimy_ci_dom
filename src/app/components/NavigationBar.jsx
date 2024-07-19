"use client";
import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Button,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import DropdownComponent from "./DropdownComponent.tsx";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link.js";
import Image from "next/image.js";
import icon from "@/app/icons8-fire-alt-stickers-96.png"
export default function NavigationBar() {
	const icons = {
		chevron: <ChevronDown fill="currentColor" size={16} />,
		scale: <Scale className="text-warning" fill="currentColor" size={30} />,
		lock: <Lock className="text-success" fill="currentColor" size={30} />,
		activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
		flash: <Flash className="text-primary" fill="currentColor" size={30} />,
		server: <Server className="text-success" fill="currentColor" size={30} />,
		user: <TagUser className="text-danger" fill="currentColor" size={30} />,
	};
	const navbarItems = [
		{
			text: "Nasza Oferta",
			href: "",
			icon: icons.chevron,
			submenu: [
				{
					text: "Ocieplanie Poddaszy",
					href: "/naszaOferta/OcieplaniePoddaszy",
					key: "OcieplaniePoddaszy",
					description: "Poznaj naszą oferte ociepleń",
					icon: icons.scale,
				},
				{
					text: "Izolacja Termiczna",
					href: "/naszaOferta/IzolacjaTermiczna",
					key: "IzolacjaTermiczna",
					description: "Poznaj naszą oferte izolacji termicznej",
					icon: icons.activity,
				},
				{
					text: "Wycena Usługi",
					href: "/naszaOferta/WycenaUslugi",
					key: "WycenaUslugi",
					description: "Poznaj naszą oferte wyceny usługi",
					icon: icons.flash,
				},
			],
		},
		{
			text: "O Nas",
			href: "/oNas",
			icon: null,
			submenu: [],
		},
		{
			text: "Portfolio",
			href: "/portfolio",
			icon: null,
			submenu: [],
		},
		{
			text: "Blog",
			href: "/blog",
			icon: null,
			submenu: [],
		},
		{
			text: "Kontakt",
			href: "/kontakt",
			icon: null,
			submenu: [],
		},
	];

	return (
		<Navbar maxWidth="xl" className="h-20 w-full *:pe-2" style={{ backgroundColor: "#1F1F1F" }} position="sticky" isBlurred={true}>
			<NavbarBrand>
				<Link href="/" className="flex flex-row">
				
					<p className="font-bold text-inherit text-center text-wrap w-[6rem] self-center ms-2">Ocieplimy Ci Dom</p>
				</Link>
			</NavbarBrand>
			<NavbarContent className="hidden lg:flex gap-4 " justify="center">
				{navbarItems.map((item) => (
					<React.Fragment key={item.text}>
						{item.submenu.length > 0 ? (
							<Dropdown>
								<NavbarItem>
									<DropdownTrigger>
										<Button
											disableRipple
											className="p-0 bg-transparent data-[hover=true]:bg-transparent"
											endContent={item.icon}
											radius="sm"
											variant="light"
										>
											{item.text}
										</Button>
									</DropdownTrigger>
								</NavbarItem>
								<DropdownMenu
									aria-label="ACME features"
									className="w-[340px]"
									itemClasses={{
										base: "gap-4",
									}}
								>
									{item.submenu.map((submenuItem) => (
										<DropdownItem
											as={Link}
											href={submenuItem.href}
											key={submenuItem.key}
											description={submenuItem.description}
											startContent={submenuItem.icon}
										>
											{submenuItem.text}
										</DropdownItem>
									))}
								</DropdownMenu>
							</Dropdown>
						) : (
							<NavbarItem as={Link} href={item.href} key={item.text}>
								{item.text}
							</NavbarItem>
						)}
					</React.Fragment>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<DropdownComponent navbarItems={navbarItems} />
				<NavbarItem className="hidden lg:flex" description="test">
					<Link href="/contact" className=" ">
						<p className="w-auto px-5 py-3 text-center text-white bg-orange-600 flex space-x-4 font-medium rounded">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 me-1 -mt-px"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
								/>
							</svg>
							Napisz do nas
						</p>
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
