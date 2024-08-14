import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<Link to={"/posts"}>Posts</Link>
			<Link to={"/profile"}>Profile</Link>
			<Link to={"/posts/my"}>My posts</Link>
		</div>
	);
}

export default NavBar;
