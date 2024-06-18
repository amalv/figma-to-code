import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
	it("renders the image correctly", () => {
		// Arrange
		const imageUrl = "https://picsum.photos/200";
		const title = "An Above Average Experience";

		// Act
		render(<Card imageUrl={imageUrl} title={title} description="" href="" />);
		const renderedImage = screen.getByRole("img", { name: title });

		// Assert
		expect(renderedImage).toBeVisible();
	});

	it("checks the image source", () => {
		// Arrange
		const imageUrl = "https://picsum.photos/200";
		const title = "An Above Average Experience";

		// Act
		render(<Card imageUrl={imageUrl} title={title} description="" href="" />);
		const renderedImage = screen.getByRole("img", { name: title });

		// Assert
		expect(renderedImage).toHaveAttribute("src", imageUrl);
	});

	it("renders the title correctly", () => {
		// Arrange
		const title = "An Above Average Experience";

		// Act
		render(<Card imageUrl="" title={title} description="" href="" />);
		const renderedTitle = screen.getByRole("heading", { name: title });

		// Assert
		expect(renderedTitle).toBeVisible();
	});

	it("renders the description correctly", () => {
		// Arrange
		const description =
			"Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenery and witness beauty.";

		// Act
		render(<Card imageUrl="" title="" description={description} href="" />);
		const renderedDescription = screen.getByText(description);

		// Assert
		expect(renderedDescription).toBeVisible();
	});

	it("renders the href correctly", () => {
		// Arrange
		const href = "https://example.com";

		// Act
		render(<Card imageUrl="" title="" description="" href={href} />);
		const renderedLink = screen.getByRole("link");

		// Assert
		expect(renderedLink).toHaveAttribute("href", href);
	});
});
