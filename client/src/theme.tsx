import {createTheme, responsiveFontSizes} from '@mui/material/styles';

export const theme = responsiveFontSizes(
	createTheme({
		palette: {
			background: {
				default: '#f2f3ed',
			},
			primary: {
				main: '#ff6859',
			},
			text: {
				primary: '#32303b',
				secondary: '#2e4196',
				disabled: '#d4d4d4',
			},
			secondary: {
				main: '#E33E7F',
			},
		},
	})
);
