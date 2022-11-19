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