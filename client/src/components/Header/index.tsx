import {Typography, Divider} from '@mui/material';

interface Props {
	title: string;
}

export const Header: React.FC<Props> = ({title}) => {
	return (
		<>
			<Typography
				letterSpacing={3}
				fontWeight='600'
				textAlign={'center'}
				variant='h4'
				color={'text.primary'}
				mb={2}
			>
				{title}
			</Typography>
			<Divider sx={{borderWidth: 3, backgroundColor: '#ff655b', mb: 5}} />
		</>
	);
};
