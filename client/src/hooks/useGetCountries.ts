import React, {useCallback} from 'react';
import axios from 'axios';
import {API_ENDPOINT_COUNTRIES, BASE_URL} from 'utils/constants';

export const useGetCountries = (country: string) => {
	const [onRequest, setOnRequest] = React.useState<boolean>(false);

	const getCountries = useCallback(async () => {
		if (onRequest) return;
		setOnRequest(true);
		try {
			const response = await axios.get(`${BASE_URL}${API_ENDPOINT_COUNTRIES}`, {
				params: {country},
			});
			setOnRequest(false);

			return response.data;
		} catch (error) {
			console.log(error);
		}
	}, [country]);

	return getCountries;
};
