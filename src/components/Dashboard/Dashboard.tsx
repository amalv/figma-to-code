import React, { useState } from "react";
import menuIcon from "../../assets/menu.svg";
import arrowIcon from "../../assets/arrow.svg";
import {
	Container,
	LeftCol,
	Nav,
	BackBtn,
	NavList,
	NavItem,
	NavLink,
	Section,
	Header,
	MenuBtn,
	Logo,
	Cv,
	Content,
	H1,
	P,
	Cta,
} from "./Dashboard.styles";

export const Dashboard = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<Container>
			<LeftCol>
				<Nav
					style={{
						transform: isNavOpen ? "translateX(0)" : "translateX(-100%)",
					}}
				>
					<BackBtn src={arrowIcon} onClick={() => setIsNavOpen(false)} />
					<NavList>
						<NavItem>
							<NavLink href="#" className="active">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">My Stats</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Members</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Settings</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Help</NavLink>
						</NavItem>
					</NavList>
				</Nav>
			</LeftCol>
			<Section>
				<Header>
					<MenuBtn src={menuIcon} onClick={() => setIsNavOpen(true)} />
					<Logo>Logo</Logo>
				</Header>
				<Cv>
					<Content>
						<H1>Data Analytics</H1>
						<P>Making sense of your traffic.</P>
						<Cta href="#">Go to my stats</Cta>
					</Content>
				</Cv>
			</Section>
		</Container>
	);
};
