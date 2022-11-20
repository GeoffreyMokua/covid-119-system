import React from "react";
import "./App.css";
import Header from "./components/Header";
import Statistics from "./pages/Statistics";

function App() {
	return (
		<div className="App">
			<Header />
			<Statistics />
		</div>
	);
}

export default App;