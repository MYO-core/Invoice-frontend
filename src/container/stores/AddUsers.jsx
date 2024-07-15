import { Button, Form, Input, Select, message, Row, Col, DatePicker, Spin, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addOrg, getSingleOrg, updateOrg } from '../../utility/services/stores';
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
          message.success('Invoice updated successfully');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addOrg({
        body: body,
      })
        ?.then((res) => {
          message.success('Invoice added successfully');
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
          data.date = moment(data.date);
          console.log('data', data);
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
          name="Invoice"
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
                    message: 'name is required!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: 'Phone is required!',
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
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    message: 'City is required!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: 'address is required!',
                  },
                ]}
              >
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
