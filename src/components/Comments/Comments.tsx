import React from "react";
import "./Comments.css";
import useComments from "../../hooks/useComments";
import { Vortex } from "react-loader-spinner";

interface ICommentsProps {
	postId: number;
}

export default function Comments(props: ICommentsProps) {
	const { postId } = props;
	let {
		comments: comments,
		error: error,
		loading: loading,
	} = useComments(postId);
	console.log(postId);
	return (
		<div className="Comments">
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
				comments.map((value) => {
					return (
						<div key={value.id}>
							<h2>{value.name}</h2>
							<h3>{value.email}</h3>
							<p>{value.body}</p>
							<hr />
						</div>
					);
				})
			)}
		</div>
	);
}
