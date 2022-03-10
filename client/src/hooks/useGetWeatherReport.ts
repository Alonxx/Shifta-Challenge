import React, {useCallback} from 'react';
import axios from 'axios';
import {API_ENDPOINT_WEATHER, BASE_URL} from 'utils/constants';
import {TWeatherReport} from 'models';

export const useGetWeatherReport = (countryCode: string, city: string) => {
	const getWeatherReport = useCallback(async () => {
		try {
			const response = await axios.get(`${BASE_URL}${API_ENDPOINT_WEATHER}`, {
				params: {
					city,
					countryCode,
				},
			});

			return response.data;
		} catch (error) {
			console.log(error);

			return {error: 'Ciudad no encontrada'};
		}
	}, [countryCode, city]);

	return getWeatherReport;
};
