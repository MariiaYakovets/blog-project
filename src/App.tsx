import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Post/Posts";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header></Header>
				<Routes>
					<Route path="/" element={<div />}></Route>
					<Route path="/posts" element={<Posts />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
