import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
	it("renders without crashing", () => {
		// Arrange
		const utils = render(<Card />);

		// Act
		const placeholderImage = utils.getByAltText("Placeholder");
		const linkIcon = utils.getByAltText("External Link Icon");

		// Assert
		expect(placeholderImage).toBeVisible();
		expect(linkIcon).toBeVisible();
	});
});
