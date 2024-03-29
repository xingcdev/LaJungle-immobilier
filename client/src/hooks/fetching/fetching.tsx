import { useEffect, useState } from 'react';

/**
 * React Hook allows you to make a GET fetch query
 * @param {string} url Url you fetch data from
 * @returns {object} { data, isLoading, error }
 * @example
 * const { data, isLoading, error } = useFetchGet(`https://example.com`);
 */
export function useFetchGet(
	url: string,
	params?: Record<string, any>,
	init?: RequestInit
) {
	const [data, setData] = useState<any>({});

	const [isLoading, setIsLoading] = useState(true);

	const [error, setError] = useState('');

	// Add GET params to the URL
	// see: https://stackoverflow.com/a/58437909
	const computedUrl = params ? `${url}?${new URLSearchParams(params)}` : url;

	useEffect(() => {
		fetch(computedUrl, init)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((json) => {
				setData(json.data);
			})
			.catch((error) => {
				console.log(error);
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	}, [computedUrl, init]);

	return { data, setData, isLoading, error };
}
