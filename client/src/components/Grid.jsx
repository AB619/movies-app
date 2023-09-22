import { Card } from 'antd';
import Loading from "../components/Loading";
import { starRating } from "../utils";
import NotFound from './NotFound';

const Grid = ({ details }) => {

    const { Meta } = Card;

    return (
        <div className="container cards">
            {details ?
                details.length === 0 ? <NotFound />
                    : details.map(({ id, title, poster, rating }) => {
                        return <div key={id} className="card"><Card
                            hoverable
                            style={{ width: 240 }}
                            onClick={() => alert("Good Choice")}
                            cover={<img alt={title} src={poster} />}
                        >
                            <Meta title={title} description={starRating(rating)} />
                        </Card></div>
                    }) : <Loading />}
        </div>
    )
};

export default Grid;