import {Typography, Box, Stack} from '@mui/material';
import {Card} from 'components/Card';
import {theme} from 'theme';
import WeatherReportContext from 'context/WeatherReportContext';
import {useContext} from 'react';
import ZoneInfoContext from 'context/ZoneInfoContext';
import {weekday} from 'utils/constants';

export const WeatherReport: React.FC = () => {
	const {city, windSpeed, humidity, description, temp} =
		useContext(WeatherReportContext);
	const {countryName} = useContext(ZoneInfoContext);

	const date = new Date();
	let day = weekday[date.getDay()];

	return (
		<Card title={'Reporte del Clima'}>
			{city !== '' ? (
				<Stack direction={'row'} justifyContent='space-between' mb={6.5}>
					<Stack
						display={'flex'}
						flexDirection='column'
						justifyContent='space-between'
					>
						<Box>
							<Typography color={theme.palette.text.disabled} variant='body1'>
								{countryName}
							</Typography>
							<Typography color={theme.palette.text.disabled} variant='h6'>
								{city}
							</Typography>
						</Box>
						<Box>
							<Typography letterSpacing={6} variant='h4'>
								{day}
							</Typography>
							<Typography letterSpacing={6} variant='h5'>
								{description.description}
							</Typography>
							<Typography mt={2} mb={2} fontWeight={'600'} variant='h2'>
								{temp}
							</Typography>
							<Typography letterSpacing={4} fontWeight={'600'} variant='h6'>
								71.6 ° F
							</Typography>
						</Box>
					</Stack>
					<Box>
						<Stack spacing={3}>
							<img
								alt='weather icon'
								src={`https://www.weatherbit.io/static/img/icons/${description.icon}.png`}
							/>
							<Box>
								<Typography variant='subtitle1'>
									Prob. de precipitaciones: 0%
								</Typography>
								<Typography variant='subtitle1'>
									Humedad: {Math.ceil(humidity)}%
								</Typography>
								<Typography variant='subtitle1'>
									Viento: {Math.ceil(windSpeed)} km/h
								</Typography>
							</Box>
						</Stack>
					</Box>
				</Stack>
			) : (
				<Typography textAlign={'center'} variant='h6'>
					Comienza buscando una ciudad
				</Typography>
			)}
		</Card>
	);
};
