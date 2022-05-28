import { useEffect, useState } from 'react';

/**
 * React Hook allows you to make a GET fetch query
 * @param {string} url Url you fetch data from
 * @returns {object} { data, isLoading, error }
 * @example
 * const { data, isLoading, error } = useFetchGet(`https://example.com`);
 */
export function useFetchGet(url: string) {
	const [data, setData] = useState({});

	const [isLoading, setIsLoading] = useState(true);

	const [error, setError] = useState('');

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.ok) return response.json();
				throw response;
			})
			.then((json) => {
				setData(json.data);
			})
			.catch((error) => setError(error))
			.finally(() => setIsLoading(false));
	}, []);

	return { data, isLoading, error };
}
