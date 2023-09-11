import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import { MOVIES_SERIES_DETAILS } from "../test-data/MOVIES_SERIES_DETAILS";
import { useEffect, useState } from 'react';
import { Pagination } from "antd";

const Series = () => {
    const [details, setDetails] = useState();
    const [seriesDetails, setSeriesDetails] = useState();
    const [selectedPage, setSelectedPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState();

    useEffect(() => {
        setDetails(MOVIES_SERIES_DETAILS.filter(ele => ele.type === "series"));
    }, []);

    useEffect(() => {
        if (searchTerm) {
            setSeriesDetails(MOVIES_SERIES_DETAILS.filter(ele => ele.title.toLowerCase().includes(searchTerm.toLowerCase())).filter((_, i) => i >= ((selectedPage - 1) * 8) && i < (selectedPage * 8)));
        }
        else {
            setSeriesDetails(details?.filter((_, i) => i >= ((selectedPage - 1) * 8) && i < (selectedPage * 8)));
        }
    }, [searchTerm, details, selectedPage])

    const changeHandler = (page) => {
        setSelectedPage(page);
    }
    
    return (
        <>
            <SearchBar onSearch={(term) => setSearchTerm(term)} />
            <Grid details={seriesDetails} />
            <Pagination className="pagination" defaultPageSize={8} defaultCurrent={1} total={details?.length} onChange={changeHandler} />
        </>
    )
};

export default Series;