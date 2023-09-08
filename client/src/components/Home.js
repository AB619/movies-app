import { Input, Button, Card  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Home = () => {

    const onChange = (e) => {
        console.log(e);
    };

    const {Meta} = Card;

    return (
        <div className="container">
            <div className="flex">
                <Input placeholder="input with clear icon" allowClear onChange={onChange} />
                <Button type="primary" icon={<SearchOutlined />}>Search</Button>
            </div>

            <div style={{ margin: "10px"}}>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="lorem ipsum" />
            </Card>
            </div>
        </div>
    )
};

export default Home;