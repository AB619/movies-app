import { Card } from 'antd';
import Loading from "../components/Loading";

const Grid = ({details}) => {

    const { Meta } = Card;

    return(
        <div className="container cards">
            {details ? details.map(({id,title,poster,rating}) => {
                return <div className="card"><Card
                key={id}
                hoverable
                style={{ width: 240 }}
                onClick={() => alert(title)}
                cover={<img alt={title} src={poster} />}
            >
                <Meta title={title} description={`${rating} stars out of 5`} />
            </Card></div>
            }) : <Loading />}
        </div>
    )
};

export default Grid;