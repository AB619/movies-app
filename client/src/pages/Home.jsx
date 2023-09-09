import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import { MOVIES_SERIES_DETAILS } from "../test-data/MOVIES_SERIES_DETAILS";
import { useEffect, useState } from 'react';
import { Pagination } from "antd";

const Home = () => {
    const [details, setDetails] = useState();
    const [selectedPage, setSelectedPage] = useState(1);

    useEffect(() => {
        setDetails(MOVIES_SERIES_DETAILS.filter((_,i) => i >= ((selectedPage - 1) * 8) && i < (selectedPage * 8)));
    }, [selectedPage]);

    const changeHandler = (page) => {
        setSelectedPage(page);
    }
    
    return (
        <>            
            <SearchBar />
            <Grid details={details} />
            <Pagination className="pagination" defaultPageSize={8} defaultCurrent={1} total={MOVIES_SERIES_DETAILS?.length} onChange={changeHandler}/>
        </>
    )
};

export default Home;