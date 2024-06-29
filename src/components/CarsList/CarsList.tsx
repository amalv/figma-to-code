import { useState, useEffect, useRef } from "react";
import {
	Container,
	Header,
	Headings,
	Options,
	Icons,
	Filter,
	Main,
	Labels,
	Cars,
} from "./CarsList.styles";
import carsMenu from "../../assets/cars-menu.svg";

type Car = {
	id: number;
	name: string;
	location: string;
	price: string;
};

const carList: Car[] = [
	{
		id: 1,
		name: "2017 Toyota Highlander V4",
		location: "1944 Scrimba Ln, Youngstown, OH 44481",
		price: "$17,400",
	},
	{
		id: 2,
		name: "2012 Toyota Tundra 4x4",
		location: "301 Fantasy Dr, Beverly Hills, CA 90210",
		price: "$23,900",
	},
	{
		id: 3,
		name: "2004 Dodge Ram 4x4",
		location: "9104 Falsety Ave, AnonyVille, FL 40440",
		price: "$7,998",
	},
	{
		id: 4,
		name: "2021 Tesla Model 3",
		location: "993 Fiscal St, Boulder, CO 93391",
		price: "$37,490",
	},
];

export const CarsList = () => {
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const [likedCars, setLikedCars] = useState({});
	const filterRef = useRef(null);
	const menuIconRef = useRef(null);

	// Toggle filter panel visibility
	const toggleFilterVisibility = () => {
		setIsFilterVisible(!isFilterVisible);
	};

	// Toggle liked state for a car
	const toggleLiked = (carId: number) => {
		setLikedCars((prevState) => ({
			...prevState,
			[carId]: !prevState[carId],
		}));
	};

	// Close filter panel when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				filterRef.current &&
				!filterRef.current.contains(event.target) &&
				!menuIconRef.current.contains(event.target)
			) {
				setIsFilterVisible(false);
			}
		};

		document.addEventListener("mouseup", handleClickOutside);
		return () => document.removeEventListener("mouseup", handleClickOutside);
	}, []);

	return (
		<Container>
			<Header>
				<Headings>
					<h1>Available Cars</h1>
					<p>There are {carList.length} cars that match your criteria</p>
				</Headings>
				<Options>
					<Icons>
						<input type="text" className="search" />
						<img
							src={carsMenu}
							alt="Menu"
							onClick={toggleFilterVisibility}
							ref={menuIconRef}
						/>
					</Icons>

					{isFilterVisible && (
						<Filter ref={filterRef} isVisible={isFilterVisible}>
							<div className="chk-container">
								<input type="checkbox" id="new" />
								<label htmlFor="new">New cars</label>
							</div>
							<div className="chk-container">
								<input type="checkbox" id="used" />
								<label htmlFor="used">Used cars</label>
							</div>
							<div className="chk-container">
								<input type="checkbox" id="dealer" />
								<label htmlFor="dealer">Dealership</label>
							</div>
							<div className="chk-container">
								<input type="checkbox" id="owner" />
								<label htmlFor="owner">For sale by owner</label>
							</div>
						</Filter>
					)}
				</Options>
			</Header>

			<Main>
				<Labels>
					<p>Car Details</p>
					<p>Location</p>
					<p>Price</p>
					<p>Action</p>
				</Labels>

				{carList.map((car) => (
					<Cars key={car.id}>
						<a href="#" className="car-name">
							{car.name}
						</a>
						<p className="car-location">
							{car.location.split(",")[0]}
							<br />
							{car.location.split(",")[1]}
						</p>
						<div className="cols-2">
							<p className="car-price">{car.price}</p>
							<i
								className={`${likedCars[car.id] ? "fas" : "far"} fa-heart fa-lg`}
								onClick={() => toggleLiked(car.id)}
							></i>
						</div>
					</Cars>
				))}
			</Main>
		</Container>
	);
};
