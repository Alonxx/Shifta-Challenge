import React from 'react';
import ZoneInfoContext from './ZoneInfoContext';
import UserContext from './UserContext';
import WeatherReportContext from './WeatherReportContext';
import {TUser, TWeatherReport, TZoneInfo} from 'models';

interface Props {
	children: React.ReactNode;
}

export const DataProvider: React.FC<Props> = ({children}) => {
	const [weatherData, setWeatherData] = React.useState<TWeatherReport>({
		humidity: 0,
		windSpeed: 0,
		temp: 0,
		description: {
			code: 0,
			description: '',
			icon: '',
		},
		precip: 0,
		city: '',
		setWeatherReport: () => {},
	});

	const [userData, setUserData] = React.useState<TUser>({
		email: '',
		password: '',
		login: false,
		searching: false,
		setUser: () => {},
	});

	const [zoneInfoData, setZoneInfoData] = React.useState<TZoneInfo>({
		countryCode: '',
		city: '',
		countryName: '',
		setZoneInfo: () => {},
	});

	return (
		<UserContext.Provider value={{...userData, setUser: setUserData}}>
			<ZoneInfoContext.Provider
				value={{...zoneInfoData, setZoneInfo: setZoneInfoData}}
			>
				<WeatherReportContext.Provider
					value={{...weatherData, setWeatherReport: setWeatherData}}
				>
					{children}
				</WeatherReportContext.Provider>
			</ZoneInfoContext.Provider>
		</UserContext.Provider>
	);
};
