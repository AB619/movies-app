import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import { MOVIES_SERIES_DETAILS } from "../test-data/MOVIES_SERIES_DETAILS";
import { useEffect, useState } from 'react';

const Home = () => {
    const [details, setDetails] = useState();

    useEffect(() => {
        setDetails(MOVIES_SERIES_DETAILS);
    }, []);

    return (
        <>
            <SearchBar />
            <Grid details={details} />
        </>
    )
};

export default Home;