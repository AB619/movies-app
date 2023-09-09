import {StarFilled, StarOutlined} from "@ant-design/icons";

export const starRating = (ratings) => {
    if(ratings === 1) return <><StarFilled /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></>;
    else if(ratings === 2) return<><StarFilled /><StarFilled /><StarOutlined /><StarOutlined /><StarOutlined /></>;
    else if(ratings === 3) return <><StarFilled /><StarFilled /><StarFilled /><StarOutlined /><StarOutlined /></>;
    else if(ratings === 4) return <><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarOutlined /></>;
    else if(ratings === 5) return <><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></>;
    else return <><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></>;
}