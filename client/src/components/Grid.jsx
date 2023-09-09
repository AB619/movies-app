import { Card } from 'antd';
import Loading from "../components/Loading";
import { starRating } from "../utils";

const Grid = ({details}) => {

    const { Meta } = Card;

    return(
        <div className="container cards">
            {details ? details.map(({id,title,poster,rating}) => {
                return <div key={id} className="card"><Card
                hoverable
                style={{ width: 240 }}
                onClick={() => alert(title)}
                cover={<img alt={title} src={poster}/>}
            >
                <Meta title={title} description={starRating(rating)} />
            </Card></div>
            }) : <Loading />}
        </div>
    )
};

export default Grid;