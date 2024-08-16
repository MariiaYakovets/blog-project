import React from "react";
import "./Post.css";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { Vortex } from "react-loader-spinner";
import Comments from "../Comments/Comments";

interface IPostProps {}

export default function Post(props: IPostProps) {
	const {} = props;
	let { id } = useParams();
	let { post: post, error: error, loading: loading } = usePost(id ? +id : 0);

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
				<div className="Post">
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</div>
			)}
			<Comments postId={id ? +id : 0} />
		</div>
	);
}
