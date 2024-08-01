import { Button, Form, Input, Select, message, Row, Col, DatePicker, Space, Spin, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
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
  // useEffect(() => {
  //   form.setFieldsValue({
  //     components: [{ componentName: 'Fixed Allowance', type: 'Earning', monthlyAmount: 0, annualAmount: 0 }],
  //   });
  // }, [form]);

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
            <Col span={12}>
              <Form.Item
                label="Package Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Required!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: 'Required!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} style={{ marginBottom: '16px' }}></Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} style={{ marginBottom: '16px' }}></Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} style={{ marginBottom: '16px' }}>
              <hr />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} style={{ marginBottom: '16px' }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Annual CTC"
                    name="ctc"
                    rules={[
                      {
                        required: true,
                        message: 'Required!',
                      },
                    ]}
                  >
                    <InputNumber min={0} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Per month" name="per_month">
                    <InputNumber min={0} disabled style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginBottom: '16px' }}>
            <Col span={6}>
              <h3>Component Name</h3>
            </Col>
            <Col span={6}>
              <h3>Type</h3>
            </Col>
            <Col span={6}>
              <h3>Monthly Amount</h3>
            </Col>
            <Col span={6}>
              <h3>Annual Amount</h3>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} style={{ marginBottom: '16px' }}>
              <hr />
            </Col>
          </Row>
          <Row gutter={16} style={{ marginBottom: '8px' }}>
            <Col span={6}>
              <Form.Item name="compoment">Fixed Allowance</Form.Item>
            </Col>
            <Col span={6}>{'Earning'}</Col>
            <Col span={6}>
              <Form.Item>
                <InputNumber defaultValue={0} disabled style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <InputNumber defaultValue={0} disabled style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
          <Form.List name="components">
            {(fields, { add, remove }) => (
              <>
                {fields?.map(({ key, name, type, fieldKey, ...restField }) => (
                  <Row gutter={16} key={key} style={{ marginBottom: '8px' }}>
                    <Col span={6}>
                      <Form.Item name="compoment">
                        <Select
                          showSearch
                          placeholder="Select role"
                          loading={loading}
                          filterOption={false}
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
                    <Col span={6}>
                      {type || 'Earning'}
                      {/* <Form.Item
                        {...restField}
                        name={[name, 'type']}
                        fieldKey={[fieldKey, 'type']}
                        rules={[{ required: true, message: 'Required!' }]}
                      >
                        <Input />
                      </Form.Item> */}
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        {...restField}
                        name={[name, 'monthlyAmount']}
                        fieldKey={[fieldKey, 'monthlyAmount']}
                        rules={[{ required: true, message: 'Required!' }]}
                      >
                        <InputNumber min={0} style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Space align="baseline">
                        <Form.Item
                          {...restField}
                          name={[name, 'annualAmount']}
                          fieldKey={[fieldKey, 'annualAmount']}
                          rules={[{ required: true, message: 'Required!' }]}
                        >
                          <InputNumber min={0} style={{ width: '100%' }} />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Component
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Row
            gutter={16}
            style={{ marginBottom: '16px', border: '1px solid #f0f0f0', padding: '16px', borderRadius: '4px' }}
          >
            <Col span={6}>
              <h4>Cost To Company</h4>
            </Col>
            <Col span={6}>{/* <h3>Type</h3> */}</Col>
            <Col span={6}>{/* <h3>Monthly Amount</h3> */}</Col>
            <Col span={6}>
              <h3>0</h3>
            </Col>
          </Row>

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
