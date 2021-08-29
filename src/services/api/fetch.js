import resolve from "./resolve";

const fetch = async (url,	{	data, method = "GET", ...options } = {}) => {
	const headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
	};

	const response = await fetch(resolve(url), {
		headers,
		method,
		body: data ? JSON.stringify(data) : null,
		...options,
	});

	if (!response.ok) {
		const { message } = await response.json();
		throw new Error(message);
	}
	return await response.json();
};

export default fetch;
