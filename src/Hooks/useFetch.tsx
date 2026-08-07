import React from 'react';

export interface FetchState<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
}

const useFetch = <T,>(
	url: RequestInfo | URL,
	options?: RequestInit,
): FetchState<T> => {
	const [data, setData] = React.useState<T | null>(null);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<Error | null>(null);

	React.useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;

		async function request() {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(url, {
					...options,
					signal,
				});

				if (!response.ok) throw new Error(`Error: ${response.status}`);

				const json: T = await response.json();

				if (!signal.aborted) setData(json);
				setError(null);
			} catch (error) {
				if (error instanceof Error && error.name === 'AbortError') return;

				if (error instanceof Error) setError(error);
			} finally {
				if (!signal.aborted) setLoading(false);
			}
		}
		request();

		return () => {
			controller.abort();
		};
	}, [url, options]);

	return {
		data,
		loading,
		error,
	};
};
export default useFetch;
