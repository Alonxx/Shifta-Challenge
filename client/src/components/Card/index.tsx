import {
	Card as CardMui,
	CardHeader,
	CardContent,
	Divider,
	Stack,
	Typography,
} from '@mui/material';
import {theme} from 'theme';

interface Props {
	title: string;
	children: React.ReactNode;
}

export const Card: React.FC<Props> = ({title, children}) => {
	return (
		<CardMui sx={{padding: '0 10px 10px 10px'}}>
			<CardHeader
				title={
					<Stack spacing={1}>
						<Typography
							fontWeight={'600'}
							color={theme.palette.text.secondary}
							textAlign={'center'}
							variant='h5'
						>
							{title}
						</Typography>
						<Divider
							sx={{
								borderWidth: 1,
								backgroundColor: theme.palette.text.secondary,
							}}
						/>
					</Stack>
				}
			/>
			<CardContent>{children}</CardContent>
		</CardMui>
	);
};
