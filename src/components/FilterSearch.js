import React from "react";
import "../styles/FilterSearch.css";
import Select from "./Select";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";


function FilterSearch({ searchFilter, searchCountry }) {
	const [countries, setCountries] = React.useState([]);
    const [search, setSearch] = React.useState("");
    
    React.useEffect(() => {
		getCountries();
    }, []);
    
    const getCountries = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "ae9e57d040msh01d6f2dab70ab6dp1afefcjsnddbe7e9267cc",
				"X-RapidAPI-Host": "covid-193.p.rapidapi.com",
			},
		};

		fetch("https://covid-193.p.rapidapi.com/countries", options)
			.then((res) => res.json())
			.then((res) => setCountries(res.response))
			.catch((err) => console.error(err));
	};
	// console.log(countries);
	// Implimenting all the options from the fetched data
	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	const countryOptions = countries.map((country, index) => {
		const options = {};
		options.label = country;
		options.id = index;
		return options;
	});

	searchCountry(search);

	// console.log("Country Options ==>", countryOptions);