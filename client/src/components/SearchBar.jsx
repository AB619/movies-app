import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {

    const onChange = (e) => {
        console.log(e);
    };

    return (
        <div className="container flex">
            <Input placeholder="Type here and click button to Search" allowClear onChange={onChange} />
            <Button type="primary" icon={<SearchOutlined />}>Search</Button>
        </div>
    )
};

export default SearchBar;