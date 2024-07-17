import { Button, Form, Input, Select, message, Row, Col, DatePicker, Spin, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { addOrg, getSingleOrg, updateOrg } from '../../utility/services/invoices';

const AddOrder = ({ setIsAddUsers, isEditUsers, setIsEditUsers, getAllUsers, store_id }) => {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const calculate = () => {
    try {
      let dd = form.getFieldsValue(['metaData']);
      let discount = form.getFieldValue('discount') || 0;
      let total = 0;
      dd.metaData.products.map((e) => {
        total += +e?.price * +e?.quantity || 0;
      });
      form.setFieldValue('total_amount', total);
      total = total - discount;
      form.setFieldValue('billed_amount', total);
    } catch (e) {}
  };

  const handleKeyUp = () => {
    let discount = form.getFieldValue('paid_amount') || 0;
    let billed_amount = form.getFieldValue('billed_amount') || 0;
    let remaining = billed_amount - discount;
    form.setFieldValue('remaining_amount', remaining);
  };
  const handleKeyUpDiscount = () => {
    let discount = form.getFieldValue('discount_percentage') || 0;
    let billed_amount = form.getFieldValue('billed_amount') || 0;
    let discountPrice = billed_amount * (0.01 * discount);
    form.setFieldValue('discount', discountPrice);
    let remaining = billed_amount - discountPrice;
    form.setFieldValue('remaining_amount', remaining);
  };

  const onFinish = (values) => {
    const body = values;
    if (store_id && store_id !== '') {
      body.store_id = store_id;
    }
    setLoading(true);
    if (isEditUsers?.userId) {
      updateOrg({
        id: isEditUsers?.userId,
        body: body,
      })
        .then((res) => {
          setIsEditUsers({ isOpen: false, userId: '' });
          getAllUsers();
          message.success('Bill updated successfully');
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      addOrg({
        body: body,
      })
        ?.then((res) => {
          message.success('Bill added successfully');
          setIsAddUsers(false);
          getAllUsers({ start: 0, limit: 10 });
          setLoading(false);
          //   console.log('res', res);
        })
        .catch((err) => {
          console.log('err :>> ', err);
          message.error(err.message);
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
      <Spin spinning={loading}>
        <div>
          <Form
            form={form}
            name="Invoice"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
            style={{ width: '100%' }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Customer Name"
                  name="customer_name"
                  rules={[{ required: true, message: 'Customer name is required!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Paid Amount"
                  name="paid_amount"
                  rules={[{ required: true, message: 'Paid amount is required!' }]}
                >
                  <Input onKeyUp={handleKeyUp} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Customer Phone"
                  name="customer_phone"
                  rules={[{ required: true, message: 'Customer phone is required!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Discount"
                  name="discount"
                  rules={[{ required: true, message: 'Discount is required!' }]}
                >
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Customer Email"
                  name="customer_email"
                  rules={[{ type: 'email', message: 'Please enter a valid email!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Sub Total"
                  name="total_amount"
                  rules={[{ required: true, message: 'Total amount is required!' }]}
                >
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Date is required!' }]}>
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Pending Amount"
                  name="remaining_amount"
                  rules={[{ required: true, message: 'Pending amount is required!' }]}
                >
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Status" name="status">
                  <Select placeholder="Status" optionLabelProp="children">
                    <Option key="PENDING" value="PENDING">
                      Pending
                    </Option>
                    <Option key="COMPLETED" value="COMPLETED">
                      Completed
                    </Option>
                    <Option key="PARTIALLY_PAID" value="PARTIALLY_PAID">
                      Partially Paid
                    </Option>
                    <Option key="DEFAULTER" value="DEFAULTER">
                      Defaulter
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Billed Amount"
                  name="billed_amount"
                  rules={[{ required: true, message: 'Billed amount is required!' }]}
                >
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Remarks" name="remarks" rules={[{ type: 'text', message: '' }]}>
                  <Input style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Discount Percentage" name="discount_percentage">
                  <InputNumber style={{ width: '100%' }} onKeyUp={handleKeyUpDiscount} />
                </Form.Item>
              </Col>
            </Row>
            <h4>Item Details</h4>
            <Form.Item name="metaData">
              <Input.TextArea style={{ display: 'none' }} />
              <Form.List name={['metaData', 'products']}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Row gutter={16} key={key}>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            label="Name"
                            name={[name, 'product_name']}
                            fieldKey={[fieldKey, 'product_name']}
                            rules={[{ required: true, message: 'Product name is required!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            label="Price"
                            name={[name, 'price']}
                            fieldKey={[fieldKey, 'price']}
                            rules={[{ required: true, message: 'Price is required!' }]}
                          >
                            <InputNumber style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            label="Quantity"
                            name={[name, 'quantity']}
                            fieldKey={[fieldKey, 'quantity']}
                            rules={[{ required: true, message: 'Quantity is required!' }]}
                          >
                            <InputNumber style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ textAlign: 'right' }}>
                          <Button type="link" style={{ color: 'red' }} onClick={() => remove(name)}>
                            - Remove
                          </Button>
                        </Col>
                      </Row>
                    ))}
                    <Form.Item>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'left',
                          alignItems: 'left',
                        }}
                      >
                        <Button type="dashed" onClick={() => add()}>
                          + Add
                        </Button>
                        <Button type="primary" className="ml-2" onClick={() => calculate()}>
                          Calculate Total
                        </Button>
                      </div>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
            <div className="flex justify-end gap-2 mt-2">
              <Button
                onClick={() => {
                  setIsAddUsers(false);
                  setIsEditUsers({ isOpen: false, userId: null });
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
      </Spin>
    </>
  );
};

export default AddOrder;
