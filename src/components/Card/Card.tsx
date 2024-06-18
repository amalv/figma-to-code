/**
 * Card Component
 *
 * This component is used to display a card with an image, title, and description.
 *
 * Design: [Figma Link](https://www.figma.com/design/eA5HekqmqpgHkZQGH1pCrR/A-Simple-Card?m=dev&node-id=0-1)
 */

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

interface CardProps {
	imageUrl: string;
	title: string;
	description: string;
	href: string;
}
export const Card: React.FC<CardProps> = ({
	imageUrl,
	title,
	description,
	href = "#",
}) => (
	<CardContainer>
		<CardContent href={href}>
			<CardImage src={imageUrl} alt={title} />
			<CardTextContent>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<CardLink src={Link} alt="External Link Icon" />
			</CardTextContent>
		</CardContent>
	</CardContainer>
);
