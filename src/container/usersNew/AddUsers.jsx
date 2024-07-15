import { Button, Form, Input, Select, message, Row, Col, DatePicker, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addUser, getSingleUser, updateUser } from '../../utility/services/users';
import { getAllRoles } from '../../utility/services/roles';
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
      updateUser({
        id: isEditUsers?.userId,
        body: body,
      })
        .then((res) => {
          setIsEditUsers({ isOpen: false, userId: '' });
          getAllUsers();
          message.success('User updated successfully');
        })
        .catch((err) => {
          message.error('Something Went Wrong');
        });
    } else {
      addUser({
        body: body,
      })
        ?.then((res) => {
          message.success('User added successfully');
          setIsAddUsers(false);
          getAllUsers({ start: 0, limit: 10 });
          setLoading(false);
          //   console.log('res', res);
        })
        .catch((err) => {
          message.error('Something Went Wrong');
          console.log('err :>> ', err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchRoomSuggestions();
  }, []);

  useEffect(() => {
    // populate single room data
    if (isEditUsers?.userId) {
      setLoading(true);
      getSingleUser({ id: isEditUsers?.userId })
        .then((res) => {
          const data = res.data;
          data.dob = moment(data.dob);
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

  const fetchRoomSuggestions = async (number) => {
    setLoading(true);

    getAllRoles({})
      .then((res) => {
        const data = res?.data?.data;
        setRoomData(data); // Update room options state with fetched data
        setLoading(false);
      })
      .catch((error) => {
        message.error('Error fetching room suggestions');
        setLoading(false);
      });
  };

  return (
    <>
      <Spin spinning={loading}></Spin>
      <div>
        <Form
          form={form}
          name="User"
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
            {' '}
            {/* Add gutter to provide space between columns */}
            <Col span={12}>
              {' '}
              {/* Each field takes half of the row */}
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Required! ',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Required! ',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Father's Name" name="fatherName">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Mother's Name" name="motherName">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Date Of Birth" name="dob">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Role" name="role_id">
                <Select
                  showSearch
                  placeholder="Select role"
                  loading={loading}
                  filterOption={false}
                  // onKeyUp={fetchRoomSuggestions}
                  optionLabelProp="children"
                >
                  {roomData.map((room) => (
                    <Option key={room.id} value={room.id}>
                      {room.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="gender" label="Gender">
                <Select
                  placeholder="Select option..."
                  // onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Others</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="address" label="Address">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          {!isEditUsers?.userId && (
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Required! ',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          )}
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() => {
                setIsAddUsers(false);
                setIsEditUsers({ isOpen: false, userId: '' });
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
