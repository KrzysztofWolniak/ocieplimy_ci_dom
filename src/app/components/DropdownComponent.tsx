import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection, Button } from "@nextui-org/react";
import Link from "next/link";

export default function DropdownComponent({ navbarItems }) {
	return (
		<Dropdown backdrop="blur">
			<DropdownTrigger>
				<Button variant="light" className="text-white lg:hidden flex-col h-full">
					<svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
					Menu
				</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label="Dynamic Actions">
				{navbarItems.map((item) =>
					item.submenu.length > 0 ? (
						<DropdownSection key={item.text} title={item.text} showDivider>
							{item.submenu.map((submenuItem) => (
								<DropdownItem
									key={submenuItem.key}
									as={Link}
									href={submenuItem.href}
									description={submenuItem.description}
									startContent={submenuItem.icon}
								>
									{submenuItem.text}
								</DropdownItem>
							))}
						</DropdownSection>
					) : (
						<DropdownItem key={item.text} as={Link} href={item.href}>
							{item.text}
						</DropdownItem>
					)
				)}
				<DropdownSection title="Danger zone">
					<DropdownItem key="delete" className="text-White" color="warning" as={Link} href="/contact" isSelected>
						Napisz Do Nas
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
}
