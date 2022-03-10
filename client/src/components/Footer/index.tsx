import {Box, Typography} from '@mui/material';

interface Props {
	copyrights: string;
	company: string;
}

export const Footer: React.FC<Props> = ({company, copyrights}) => {
	return (
		<Box
			justifyContent={'space-around'}
			display={'flex'}
			width={'100%'}
			p={2}
			sx={{
				backgroundColor: 'black',
			}}
		>
			<Typography variant='body1' color='gray'>
				{copyrights}
			</Typography>
			<Typography variant='body1' color='white'>
				{company}
			</Typography>
		</Box>
	);
};
