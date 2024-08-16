import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface IUsePost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

function usePost(id: number): {post: IUsePost, error: string | null, loading: boolean} {
	const [post, setPost] = useState<IUsePost>({
		userId: 0,
		id: 0,
		title: "",
		body: "",
	});
	const [error, setError] = useState<string | null>("");
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		async function getPost() {
			try {
				setLoading(true);
				let response = await axios.get(
					`https://jsonplaceholder.typicode.com/posts/${id}/`
				);
				setPost(response.data);
				setError(null);
			} catch (err: AxiosError | any) {
				setError(err.message);
				console.log(err);
			} finally {
				setLoading(false);
			}
		}
		getPost();
	}, []);

	return { post: post, error: error, loading: loading };
}

export default usePost;
