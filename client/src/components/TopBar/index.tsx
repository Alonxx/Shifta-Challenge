import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import {LoginForm} from 'components';
import React, {useContext} from 'react';
import UserContext from 'context/UserContext';

export const TopBar: React.FC = () => {
	const {login} = useContext(UserContext);
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);

	const handleClickShowLoginForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseShowLoginForm = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar elevation={0} position='fixed' color='primary'>
				<Toolbar>
					<Typography
						color={'white'}
						variant='h5'
						component='div'
						sx={{flexGrow: 1}}
					>
						Galicia Seguros
					</Typography>
					<Box color='white'>
						<LoginForm
							anchorEl={anchorEl}
							handleClose={handleCloseShowLoginForm}
						/>
						<Button
							onClick={handleClickShowLoginForm}
							endIcon={<PersonIcon />}
							color='inherit'
							variant='outlined'
						>
							{login ? 'Mi Usuario' : 'Iniciar Sesión'}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
