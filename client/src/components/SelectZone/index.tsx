import React, {useContext} from 'react';
import {
	Stack,
	Typography,
	Button,
	TextField,
	Chip,
	Box,
	Grow,
	CircularProgress,
} from '@mui/material';
import {Card} from 'components/Card';
import {useGetCities, useGetCountries, useGetWeatherReport} from 'hooks';

import ZoneInfoContext from 'context/ZoneInfoContext';
import WeatherReportContext from 'context/WeatherReportContext';
import UserContext from 'context/UserContext';
import {TCities, TCountries} from 'models';

export const SelectZone: React.FC = () => {
	const {city, countryCode, setZoneInfo, countryName} =
		useContext(ZoneInfoContext);
	const {setWeatherReport} = useContext(WeatherReportContext);
	const {searching, setUser} = useContext(UserContext);

	const [cities, setCities] = React.useState<TCities[]>([]);
	const [cityInputValue, setCityInputValue] = React.useState('');

	const [countries, setCountries] = React.useState<TCountries[]>([]);
	const [countryInputValue, setCountryInputValue] = React.useState('');

	const [error, setError] = React.useState<string>('');

	const getCountries = useGetCountries(countryInputValue);
	const getCities = useGetCities(countryCode, cityInputValue);
	const getWatherReport = useGetWeatherReport(countryCode, city);

	let timer: NodeJS.Timeout;

	React.useEffect(() => {
		setCities([]);
		setCityInputValue('');
	}, [countryCode]);

	const handleChangeCountries = async (
		e: React.ChangeEvent<{value: unknown}>
	) => {
		let value = e.target.value as string;

		setCountryInputValue(value);

		if (value.length > 2) {
			const countriesResponse = await getCountries();
			setCountries(countriesResponse);
		} else {
			if (value.length === 0 && (countries?.length > 0 || !countries)) {
				setCountries([]);
			}
		}
	};

	const handleChangeCities = async (e: React.ChangeEvent<{value: unknown}>) => {
		let value = e.target.value as string;
		setCityInputValue(value);
		if (value.length > 2) {
			if (countryCode) {
				const citiesResponse = await getCities();

				setCities(citiesResponse);
			}
		} else {
			if (value.length === 0 && (cities?.length > 0 || !cities)) {
				setCities([]);
			}
		}
	};

	const handleClickCountries = (country: TCountries) => {
		setCountryInputValue(country.name);
		setZoneInfo((prevState) => ({
			...prevState,
			countryCode: country.code,
			countryName: country.name,
		}));
	};

	const handleClickCities = (city: TCities) => {
		let cityName = city.city;
		if (cityName.includes(',')) {
			cityName = cityName.split(',')[0];
		}

		setZoneInfo((prevState) => ({...prevState, city: cityName}));
		setCityInputValue(cityName);
	};

	const handleClickSearch = async () => {
		if (cityInputValue === '' || countryInputValue === '') {
			return setError('Debes completar todos los campos');
		}
		setUser((prevState) => ({...prevState, searching: true}));

		const weatherResponse = await getWatherReport();
		if (weatherResponse.error) {
			setUser((prevState) => ({...prevState, searching: false}));
			return setError('Ciudad no encontrada en el sistema de climas');
		}

		setWeatherReport(weatherResponse);
		setUser((prevState) => ({...prevState, searching: false}));
		setError('');
	};

	return (
		<Card title={'Seleccioná la zona'}>
			<Stack spacing={4}>
				<Stack spacing={2}>
					<Box>
						<Typography mb={1} variant='h6'>
							País
						</Typography>
						<TextField
							value={countryInputValue}
							onChange={handleChangeCountries}
							size='small'
							fullWidth
						/>
					</Box>

					<Box>
						{countryInputValue?.length > 0 &&
							countries?.map((country, index: number) => (
								<Grow key={index} in={true} style={{transformOrigin: '0 0 0'}}>
									<Chip
										color={country.name === countryName ? 'info' : 'default'}
										onClick={() => handleClickCountries(country)}
										sx={{mr: 2, mb: 1}}
										label={country.name}
									/>
								</Grow>
							))}
					</Box>
				</Stack>
				<Stack spacing={2}>
					<Box>
						<Typography variant='h6'>Ciudad</Typography>
						<TextField
							value={cityInputValue}
							onChange={handleChangeCities}
							size='small'
							fullWidth
						/>
					</Box>

					<Box>
						{cityInputValue?.length > 0 &&
							cities?.map((cty, index: number) => (
								<Grow key={index} in={true} style={{transformOrigin: '0 0 0'}}>
									<Chip
										color={cty.city === city ? 'info' : 'default'}
										onClick={() => handleClickCities(cty)}
										sx={{mr: 2, mb: 1}}
										label={cty.city}
									/>
								</Grow>
							))}
					</Box>
				</Stack>
				<Box textAlign={'center'}>
					<Button
						sx={{boxShadow: 'none'}}
						fullWidth
						color='primary'
						variant='contained'
						onClick={() => handleClickSearch()}
					>
						{searching ? (
							<CircularProgress sx={{color: 'white'}} size={25} />
						) : (
							<Typography fontWeight={'600'} color='white'>
								Buscar
							</Typography>
						)}
					</Button>
					{error !== '' && (
						<Typography textAlign={'center'} variant='caption' color='red'>
							{error}
						</Typography>
					)}
				</Box>
			</Stack>
		</Card>
	);
};
