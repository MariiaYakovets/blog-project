import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
	return (
		<div className="NavBar">
			<Link to={"/posts"}>Posts</Link>
			<Link to={"/profile"}>Profile</Link>
			<Link to={"/posts/my"}>My posts</Link>
		</div>
	);
}

export default NavBar;
