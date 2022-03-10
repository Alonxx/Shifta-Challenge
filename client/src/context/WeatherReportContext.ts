import {TWeatherReport} from 'models';
import {createContext} from 'react';

const WeatherReportContext = createContext<TWeatherReport>({
	humidity: 0,
	windSpeed: 0,
	temp: 0,
	description: {
		description: '',
		icon: '',
		code: 0,
	},
	precip: 0,
	city: '',
	setWeatherReport: () => {},
});

export default WeatherReportContext;
