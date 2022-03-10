import {
	Button,
	Typography,
	Box,
	Popover,
	Stack,
	TextField,
} from '@mui/material';
import UserContext from 'context/UserContext';
import React, {useContext} from 'react';

interface Props {
	anchorEl: HTMLButtonElement | null;
	handleClose: () => void;
}

export const LoginForm: React.FC<Props> = ({anchorEl, handleClose}) => {
	const {login, setUser} = useContext(UserContext);
	const [error, setError] = React.useState<boolean>(false);
	const [emailInput, setEmailInput] = React.useState<string>('');
	const [passwordInput, setPasswordInput] = React.useState<string>('');

	const handleChangeEmailInput = (e: React.ChangeEvent<{value: unknown}>) => {
		setEmailInput(e.target.value as string);
	};

	const handleChangePasswordInput = (
		e: React.ChangeEvent<{value: unknown}>
	) => {
		setPasswordInput(e.target.value as string);
	};

	const handleClickLogin = () => {
		if (emailInput === '' || passwordInput === '') {
			setError(true);
		} else {
			setEmailInput('');
			setPasswordInput('');
			setError(false);
			setUser((prevState) => ({
				...prevState,
				login: true,
				email: emailInput,
				password: passwordInput,
			}));
		}
	};

	const handleClickLogout = () => {
		setError(false);
		setUser((prevState) => ({
			...prevState,
			login: false,
			email: '',
			password: '',
		}));
	};

	return (
		<>
			<Box>
				<Popover
					id={'LoginForm'}
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
				>
					{!login ? (
						<Stack spacing={4} p={3}>
							<Stack spacing={1}>
								<Typography variant='subtitle1'>Usuario</Typography>
								<TextField
									value={emailInput}
									onChange={(e) => handleChangeEmailInput(e)}
									placeholder='Example@galicia.com'
									fullWidth
									variant='outlined'
									size='small'
								/>
							</Stack>
							<Stack spacing={1}>
								<Typography variant='subtitle1'>Contraseña</Typography>
								<TextField
									value={passwordInput}
									onChange={(e) => handleChangePasswordInput(e)}
									placeholder=''
									fullWidth
									variant='outlined'
									size='small'
								/>
							</Stack>
							<Button
								sx={{boxShadow: 'none'}}
								fullWidth
								color='primary'
								variant='contained'
								onClick={() => handleClickLogin()}
							>
								<Typography fontWeight={'600'} color='white'>
									INICIAR SESION
								</Typography>
							</Button>
							{error && (
								<Typography variant='caption' fontWeight={'600'} color='red'>
									Debes rellenar todos los campos
								</Typography>
							)}
						</Stack>
					) : (
						<Box p={3}>
							<Typography variant='subtitle1' mb={1}>
								Bienvenido, recuerda ver el clima del dia.
							</Typography>
							<Button
								sx={{boxShadow: 'none'}}
								fullWidth
								color='primary'
								variant='contained'
								onClick={() => handleClickLogout()}
							>
								<Typography fontWeight={'600'} color='white'>
									CERRAR SESION
								</Typography>
							</Button>
						</Box>
					)}
				</Popover>
			</Box>
		</>
	);
};
