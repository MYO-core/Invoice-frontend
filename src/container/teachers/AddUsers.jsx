import { Button, Form, Input, Select, message, Row, Col, DatePicker, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addStudent, getSingleStudent, updateStudent } from '../../utility/services/teachers';
const { Option } = Select;

const AddOrder = ({ setIsAddUsers, isEditUsers, setIsEditUsers, getAllUsers }) => {
  const [loading, setLoading] = useState(false);
  const [roomData, setRoomData] = useState([]);
  const [roomIdData, setRoomIdData] = useState({});

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log(values);

    const body = values;
    setLoading(true);
    if (isEditUsers?.userId) {
      updateStudent({
        id: isEditUsers?.userId,
        body: body,
      })
        .then((res) => {
          setIsEditUsers({ isOpen: false, userId: '' });
          getAllUsers();
          message.success('updated successfully');
        })
        .catch((err) => {
          message.error('Something Went Wrong');
        });
    } else {
      addStudent({
        body: body,
      })
        ?.then((res) => {
          if (res.status !== 200) {
            message.warning(res?.data?.message);
          } else {
            message.success('added successfully');
            setIsAddUsers(false);
            getAllUsers({ start: 0, limit: 10 });
          }
          setLoading(false);
          console.log('res', res.data);
        })
        .catch((err) => {
          message.error('Something Went Wrong');
          console.log('err :>> ', err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    // populate single room data
    if (isEditUsers?.userId) {
      setLoading(true);
      getSingleStudent({ id: isEditUsers?.userId })
        .then((res) => {
          const data = res.data;
          data.Dob = moment(data.Dob);
          //   console.log('data', data);
          //   setRoomIdData({ option: data.roomNumber, value: data.roomId });
          setRoomData([{ _id: data.roomId, roomNumber: data.roomNumber }]);
          form.setFieldsValue(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditUsers?.userId]);

  return (
    <>
      <Spin spinning={loading}></Spin>
      <div>
        <Form
          form={form}
          name="Organisation"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: 'Please select your date of birth!',
                  },
                ]}
              >
                <Input type="date" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input a valid email address!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: 'Please select your gender!',
                  },
                ]}
              >
                <Select>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="State" name="state">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    message: 'Please input your city!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Zip" name="zip">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: 'Please input your address!',
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() => {
                setIsAddUsers(false);
                setIsEditUsers({ isOpen: false, StatusId: '' });
                // setFilesData([]);
              }}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddOrder;
