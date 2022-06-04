import Box from '@mui/material/Box';
import HousingsList from '../HousingsList/HousingsList';
import { useFetchGet } from '@hooks/fetching';
import { Typography } from '@mui/material';

function HomePage() {
	const { data, setData, isLoading, error } = useFetchGet(
		`${process.env.REACT_APP_API_URL}/logement/getAll`
	);

	if (error) return <p>{error}</p>;

	return (
		<Box component="section">
			<Typography component="h1" variant="h4" gutterBottom>
				Logements disponibles
			</Typography>
			<HousingsList
				isLoading={isLoading}
				housings={data}
				setHousingsData={setData}
			/>
		</Box>
	);
}

export default HomePage;
