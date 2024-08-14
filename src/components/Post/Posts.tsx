import React from "react";
import usePosts from "../../hooks/usePosts";
import { Vortex } from "react-loader-spinner";

function Posts() {
	let { posts: posts, error: error, loading: loading } = usePosts();
	return (
		<div>
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
							<h1>{value.title}</h1>
							<h3>{value.userId}</h3>
							<p>{value.body}</p>
							<hr />
						</div>
					);
				})
			)}
		</div>
	);
}

export default Posts;
