/**
 * Card Component
 *
 * This component is used to display a card with an image, title, and description.
 *
 * Design: [Figma Link](https://www.figma.com/design/eA5HekqmqpgHkZQGH1pCrR/A-Simple-Card?m=dev&node-id=0-1)
 */

import Mountain from "../../assets/mountain.png";
import Link from "../../assets/link.svg";
import {
	CardContainer,
	CardContent,
	CardImage,
	CardTextContent,
	CardTitle,
	CardDescription,
	CardLink,
} from "./Card.styles";

export const Card = () => (
	<CardContainer>
		<CardContent href="#">
			<CardImage src={Mountain} alt="Mountain" />
			<CardTextContent>
				<CardTitle>An Above Average Experience</CardTitle>
				<CardDescription>
					Travel to thegg premiere mountain tops of New Zealand with our guided
					tours. Take in the majestic scenary and witness beauty.
				</CardDescription>
				<CardLink src={Link} alt="Link" />
			</CardTextContent>
		</CardContent>
	</CardContainer>
);