import React from 'react';
import {Home} from 'pages';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from 'theme';
import {CssBaseline} from '@mui/material';
import {DataProvider} from 'context/DataProvider';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<DataProvider>
				<Home />
			</DataProvider>
		</ThemeProvider>
	);
};

export default App;
