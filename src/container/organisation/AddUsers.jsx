import { Button, Form, Input, Select, message, Row, Col, DatePicker, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addOrg, getSingleOrg, updateOrg } from '../../utility/services/organisation';
import { getAllRoles } from '../../utility/services/roles';
const { Option } = Select;

const AddOrder = ({ setIsAddUsers, isEditUsers, setIsEditUsers, getAllUsers }) => {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log(values);

    const body = values;
    setLoading(true);
    if (isEditUsers?.userId) {
      updateOrg({
        id: isEditUsers?.userId,
        body: body,
      })
        .then((res) => {
          setIsEditUsers({ isOpen: false, userId: '' });
          getAllUsers();
          message.success('Company updated successfully');
        })
        .catch((err) => {
          message.error('Something Went Wrong');
        });
    } else {
      addOrg({
        body: body,
      })
        ?.then((res) => {
          message.success('Company added successfully');
          setIsAddUsers(false);
          getAllUsers({ start: 0, limit: 10 });
          setLoading(false);
          //   console.log('res', res);
        })
        .catch((err) => {
          console.log('err :>> ', err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    // populate single room data
    if (isEditUsers?.userId) {
      setLoading(true);
      getSingleOrg({ id: isEditUsers?.userId })
        .then((res) => {
          const data = res.data;
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
                    message: 'Required! ',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Stregnth"
                name="stregnth"
                rules={[
                  {
                    required: true,
                    message: 'Required! ',
                  },
                ]}
              >
                <Select placeholder="Select strength">
                  <Option value="0-100">0-100</Option>
                  <Option value="101-500">101-500</Option>
                  <Option value="501-1000">501-1000</Option>
                  <Option value="1001-10000">1001-10000</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Address"
                name="address"
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
                label="City"
                name="city"
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
              <Form.Item
                label="State"
                name="state"
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
                label="Country"
                name="country"
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
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
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
                  {
                    type: 'email',
                    message: 'Please enter a valid email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Website" name="website">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Logo URL" name="logoUrl">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() => {
                // Add your onCancel logic here
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
