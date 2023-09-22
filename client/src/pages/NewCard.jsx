import React, { useState, useRef } from 'react';
import { Button, Form, Input, Select, Alert } from 'antd';
import Loading from '../components/Loading';

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const NewCard = () => {
    const [loading , setLoading] = useState(false);
    const [alert, setAlert] = useState({ flag: false, message: {} });
    const formRef = useRef(null);

    const onFinish = async ({ title, type, rating, poster }) => {
        setLoading(true)
        const reqOptions = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                rating,
                type,
                poster
            })
        }
        const request = await fetch(`${process.env.REACT_APP_API_URL}/${type}/add`, reqOptions);
        const response = await request.json();
        if (request.status === 200) {
            setLoading(false)
            formRef.current?.resetFields();
            setAlert({ flag: true, message: response })
        }
        else {
            setLoading(false)
            setAlert({ flag: true, message: response })
        }
    };

    const onReset = () => {
        formRef.current?.resetFields();
        setAlert({ flag: false, message: {} })
    };

    return (
        <>
        {loading ? <Loading /> : <>
            <Form
                {...layout}
                ref={formRef}
                name="control-ref"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    paddingTop: "30px"
                }}
            >   
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="poster"
                    label="Poster URL"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="rating"
                    label="Rating"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select rating"
                        allowClear
                    >
                        <Option value={5}>5</Option>
                        <Option value={4}>4</Option>
                        <Option value={3}>3</Option>
                        <Option value={2}>2</Option>
                        <Option value={1}>1</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select type of content"
                        allowClear
                    >
                        <Option value="movie">Movie</Option>
                        <Option value="series">Series</Option>
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset} style={{ marginLeft: "10px" }}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
            {alert.flag && <Alert
                style={{
                    maxWidth: 600,
                    margin: "30px"
                }}
                message={alert.message.message}
                description={alert.message.error}
                type={alert.message.error ? 'error' : 'success'}
            />}
        </>}
        </>
    );
};
export default NewCard;