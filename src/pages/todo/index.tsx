import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Divider, List, Typography, message } from 'antd';
import styles from './index.module.css';
import { useAtom } from 'jotai';
import { todoListAtom } from "../../store";

const Todo: React.FC = (props: any) => {

    const [value, setValue] = useState('');
    const [todoList, setTodoList] = useAtom(todoListAtom);

    const changeValue = (e: any) => {
         setValue(e.target.value);
    }

    const addItem = () => {
        setTodoList((todoList) => [
            ...todoList,
            value
        ]);
        setValue('');
        message.success('添加成功');
    }

    return (
        <div className={styles.container}>
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    style={{ maxWidth: 600 }}
                    >
                    <Row>
                        <Col span={20}>
                            <Form.Item label="content">
                                <Input value={value} onChange={changeValue} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Button onClick={addItem}>Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className={styles.listWrapper}>
                <Divider orientation="left">Default Size</Divider>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={todoList}
                    renderItem={(item) => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Todo;