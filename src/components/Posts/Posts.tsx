import React from "react";
import usePosts from "../../hooks/usePosts";
import { Vortex } from "react-loader-spinner";
import "./Posts.css";
import { Link } from "react-router-dom";


function Posts() {
	let { posts: posts, error: error, loading: loading } = usePosts();
	return (
		<div className="Posts">
			{error ? (
				error
			) : loading ? (
				<Vortex
					visible={true}
					height="80"
					width="80"
					ariaLabel="vortex-loading"
					wrapperStyle={{}}
					wrapperClass="vortex-wrapper"
					colors={[
						"pink",
						"purple",
						"pink",
						"pink",
						"purple",
						"purple",
					]}
				/>
			) : (
				posts?.map((value) => {
					return (
						<div key={value.id}>
							<h3>{value.userId}</h3>
							<h1>{value.title}</h1>
							<p>{value.body}</p>
							<Link to={`/posts/${value.id}`}>View full</Link>

							<hr />
						</div>
					);
				})
			)}
		</div>
	);
}

export default Posts;
