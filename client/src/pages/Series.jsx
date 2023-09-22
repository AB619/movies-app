import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import NotFound from "../components/NotFound";
import { useEffect, useState } from 'react';
import { Pagination } from "antd";

const Series = () => {
    const [details, setDetails] = useState();
    const [selectedPage, setSelectedPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [error , setError] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/series/list?search=${searchTerm}&page=${selectedPage}&limit=8`)
        .then(res => res.json())
        .then(data => setDetails(data.data))
        .catch(() => setError(true))
    }, [searchTerm, selectedPage]);

    const changeHandler = (page) => {
        setSelectedPage(page-1);
    }
    
    return (
        <>
            {error ? <NotFound /> :
            <>
            <SearchBar onSearch={(term) => {
                setSearchTerm(term)
                setSelectedPage(0)
            }} />
            <Grid details={details?.list} />
            <Pagination className="pagination" defaultPageSize={8} defaultCurrent={1} total={details?.count} onChange={changeHandler} />
        </>
         }
         </>
    )
};

export default Series;