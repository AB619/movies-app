import { Spin } from 'antd';

const Loading = () => {
    return (
        <Spin tip="Loading" size="large" style={{marginTop: "20px"}}>
            <div className="content" />
        </Spin>
    )
};

export default Loading;