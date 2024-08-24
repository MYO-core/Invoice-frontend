import { Button, Form, Input, Select, message, Row, Col, DatePicker, Spin, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addOrder, getSingleOrder, updateOrder } from '../../utility/services/bookings';
import { getAllCms } from '../../utility/services/rooms';
const { Option } = Select;

const AddOrder = ({ setIsAddOrder, isEditOrder, setIsEditOrder, getAllOrder, currentStore }) => {
  const [loading, setLoading] = useState(false);
  const [roomData, setRoomData] = useState([]);
  const [roomIdData, setRoomIdData] = useState({});

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);

    const body = values;
    setLoading(true);
    if (isEditOrder?.orderId) {
      updateOrder({
        id: isEditOrder?.orderId,
        body: body,
      })
        .then((res) => {
          setIsEditOrder({ isOpen: false, orderId: '' });
          getAllOrder();
          message.success('Order updated successfully');
        })
        .catch((err) => {
          message.error('Room Already Booked');
        });
    } else {
      addOrder({
        body: { ...body, store_id: currentStore },
      })
        ?.then((res) => {
          message.success('Order added successfully');
          setIsAddOrder(false);
          getAllOrder({ start: 0, limit: 10 });
          setLoading(false);
          //   console.log('res', res);
        })
        .catch((err) => {
          message.error('Room is already Booked');
          console.log('err :>> ', err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    // fetchRoomSuggestions();
    // populate single room data
    if (isEditOrder?.orderId) {
      setLoading(true);
      getSingleOrder({ id: isEditOrder?.orderId })
        .then((res) => {
          const data = res.data;
          data.checkInDate = moment(data.checkInDate);
          data.checkOutDate = moment(data.checkOutDate);
          //   console.log('data', data);
          setRoomIdData({ option: data?.Room?.roomNumber, value: data?.Room.id });
          setRoomData([data.Room]);
          form.setFieldsValue(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditOrder?.orderId]);

  const fetchRoomSuggestions = async (number) => {
    setLoading(true);

    getAllCms({ roomNumber: number })
      .then((res) => {
        const data = res?.data?.rows;
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
      <Spin spinning={loading}>
        <div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            // initialValues={{
            //   customer: { identification_type: 'AADHAR' },
            //   status: 'booked',
            // }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={['customer', 'identification_type']}
                  label="Identification Type"
                  rules={[{ required: true, message: 'Please select an Identification Type' }]}
                >
                  <Select>
                    <Option value="AADHAR">Aadhar</Option>
                    <Option value="DL">Driving Licence</Option>
                    <Option value="VOTERID">Voter Id</Option>
                    <Option value="PASSPORT">Passport</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={['customer', 'identification_number']}
                  label="Identification Number"
                  rules={[{ required: true, message: 'Identification Number is required' }]}
                >
                  <Input placeholder="Enter Identification Number" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={['customer', 'name']}
                  label="Customer Name"
                  rules={[{ required: true, message: 'Customer Name is required' }]}
                >
                  <Input placeholder="Enter Customer Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['customer', 'phone']} label="Phone">
                  <Input placeholder="Enter Phone Number" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={['customer', 'email']}
                  label="Email"
                  rules={[{ type: 'email', message: 'Please enter a valid email address' }]}
                >
                  <Input placeholder="Enter Email Address" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['customer', 'address']} label="Address">
                  <Input placeholder="Enter Address" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="checkInDate"
                  label="Check-In Date"
                  rules={[{ required: true, message: 'Check-In Date is required' }]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="checkOutDate"
                  label="Check-Out Date"
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        const checkInDate = getFieldValue('checkInDate');
                        if (!value || value.isAfter(checkInDate)) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Check-Out Date must be after Check-In Date'));
                      },
                    }),
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="numberOfGuests"
                  label="Number of Guests"
                  rules={[{ required: true, type: 'number', min: 1, message: 'Must have at least 1 guest' }]}
                >
                  <InputNumber min={1} style={{ width: '80%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="roomIds"
                  label="Room IDs"
                  rules={[{ required: true, message: 'Please select at least one room' }]}
                >
                  <Select mode="multiple" placeholder="Select Room IDs">
                    <Option value="1">Room 1</Option>
                    <Option value="2">Room 2</Option>
                    <Option value="3">Room 3</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="totalPrice"
                  label="Total Price"
                  rules={[{ required: true, type: 'number', min: 0, message: 'Total Price must be positive' }]}
                >
                  <InputNumber min={0} formatter={(value) => `₹ ${value}`} style={{ width: '80%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="status" label="Booking Status">
                  <Select>
                    <Option value="booked">Booked</Option>
                    <Option value="checked-in">Checked-In</Option>
                    <Option value="checked-out">Checked-Out</Option>
                    <Option value="cancelled">Cancelled</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Spin>
    </>
  );
};

export default AddOrder;
