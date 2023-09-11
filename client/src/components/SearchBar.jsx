import { Input } from 'antd';

const SearchBar = ({onSearch}) => {
    const {Search} = Input;

    return (
        <div className="container flex">
            <Search
                placeholder="Type here and click button to Search"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={(value) => onSearch(value)}
            />
        </div>
    )
};

export default SearchBar;