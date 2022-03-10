import {Box, Container, Stack, Grid} from '@mui/material';
import {TopBar, SelectZone, WeatherReport, Header, Footer} from 'components';

export const Home: React.FC = () => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<Stack spacing={18} mb={3}>
				<TopBar />
				<Box>
					<Container maxWidth='lg'>
						<Header title='SERVICIO DEL CLIMA' />
						<Grid container spacing={2} justifyContent='space-around'>
							{[<SelectZone />, <WeatherReport />].map((component, index) => (
								<Grid key={index} item width={'100%'} md={6} lg={6} xl={6}>
									{component}
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>
			</Stack>

			<Footer
				company='Squad Arquitectura Empresarial'
				copyrights='Copyright 2022 All right register |'
			/>
		</Box>
	);
};
