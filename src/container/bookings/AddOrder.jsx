import { Button, Form, Input, Select, message, Row, Col, DatePicker, Spin, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addOrder, getSingleOrder, updateOrder } from '../../utility/services/bookings';
import { getAllCms } from '../../utility/services/rooms';
const { Option } = Select;

const AddOrder = ({ setIsAddOrder, isEditOrder, setIsEditOrder, getAllOrder }) => {
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
        body: body,
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
          <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Customer Name"
                  name="customerName"
                  rules={[{ required: true, message: 'Customer name is required!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Customer Email"
                  name="customerEmail"
                  rules={[
                    { required: true, message: 'Customer email is required!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Customer Phone"
                  name="customerPhone"
                  rules={[{ required: true, message: 'Customer phone is required!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Number of Guests"
                  name="numberOfGuests"
                  rules={[{ required: true, message: 'Number of guests is required!' }]}
                >
                  <InputNumber min={1} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Check-In Date"
                  name="checkInDate"
                  rules={[{ required: true, message: 'Check-in date is required!' }]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Check-Out Date"
                  name="checkOutDate"
                  // rules={[{ required: true, message: 'Check-out date is required!' }]}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Room Number"
                  name="roomId"
                  rules={[{ required: true, message: 'Room ID is required!' }]}
                >
                  <Select
                    style={{ width: '100%' }}
                    placeholder="Select a room"
                    value={roomIdData?.value || undefined}
                    loading={loading}
                    filterOption={false}
                    // labelInValue
                  >
                    {roomData.map((room) => (
                      <Option key={room.id} value={room.id}>
                        {room.roomNumber}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Total Price"
                  name="totalPrice"
                  rules={[{ required: true, message: 'Total price is required!' }]}
                >
                  <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Status is required!' }]}>
                  <Select>
                    <Select.Option value="booked">Booked</Select.Option>
                    <Select.Option value="checked-in">Checked-In</Select.Option>
                    <Select.Option value="checked-out">Checked-Out</Select.Option>
                    <Select.Option value="cancelled">Cancelled</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <div className="flex justify-end gap-2 mt-5">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Spin>
    </>
  );
};

export default AddOrder;
