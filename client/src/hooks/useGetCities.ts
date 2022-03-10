import React, {useCallback} from 'react';
import axios from 'axios';
import {
	API_ENDPOINT_CITIES,
	API_ENDPOINT_COUNTRIES,
	BASE_URL,
} from 'utils/constants';

export const useGetCities = (countryCode: string, city: string) => {
	const [onRequest, setOnRequest] = React.useState<boolean>(false);

	const getCities = useCallback(async () => {
		if (onRequest) return;
		setOnRequest(true);
		try {
			const response = await axios.get(`${BASE_URL}${API_ENDPOINT_CITIES}`, {
				params: {
					countryCode,
					city,
				},
			});

			setOnRequest(false);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}, [countryCode, city]);

	return getCities;
};
