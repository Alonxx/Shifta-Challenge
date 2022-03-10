export type TZoneInfo = {
	countryCode: string;
	city: string;
	countryName: string;
	setZoneInfo: React.Dispatch<React.SetStateAction<TZoneInfo>>;
};

export type TWeatherReport = {
	humidity: number;
	windSpeed: number;
	temp: number;
	description: {
		icon: string;
		code: number;
		description: string;
	};
	precip: number;
	city: string;

	setWeatherReport: React.Dispatch<React.SetStateAction<TWeatherReport>>;
};

export type TCountries = {
	name: string;
	code: string;
};

export type TCities = {
	city: string;
	countryCode: string;
};

export type TUser = {
	email: string;
	password: string;
	login: boolean;
	searching: boolean;
	setUser: React.Dispatch<React.SetStateAction<TUser>>;
};
