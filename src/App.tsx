import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts/Posts";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import NoPage from "./components/NoPage/NoPage";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/MyPosts/MyPosts";
import Post from "./components/Post/Post";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Layout>
					<Header></Header>
					<Routes>
						<Route path="/" element={<div />}></Route>
						<Route path="/posts" element={<Posts />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="/posts/my" element={<MyPosts />}></Route>
						<Route path="/posts/:id" element={<Post />}></Route>
						{/* <Route path="*" element={<NoPage />}></Route> */}

					</Routes>
				</Layout>
			</div>
		</BrowserRouter>
	);
}

export default App;
