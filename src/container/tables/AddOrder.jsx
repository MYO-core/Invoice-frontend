import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Spin, Upload, message, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import { addCms } from '../../utility/services/orders';
import { getAllCms } from '../../utility/services/restroItems';

const { Option } = Select;

const AddRoom = ({ tableData, setVisible, visible, currentStore }) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState('');

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const body = values;
    body.store_id = currentStore;
    addCms({
      body: body,
    })
      ?.then((res) => {
        message.success('Data added successfully');
        setVisible(false);
      })
      .catch((err) => {
        console.log('err :>> ', err);
      });
  };
  useEffect(() => {
    getAllCms({})
      .then((data) => {
        setItem(data.data.rows);
      })
      .catch((e) => {
        message.error('Error While Fetching Items');
      });
  }, [form, search]);
  useEffect(() => {
    if (visible) {
      form.resetFields(); // Reset the form fields
      form.setFieldsValue({
        table_id: tableData.id,
      });
    }
  }, [form, visible]);

  const getAllItems = () => {
    let data = form.getFieldsValue(['order_items']);
    let total = 0;
    data?.order_items?.map((d) => {
      let t = Number(d?.price) * Number(d?.quantity);
      total += t;
    });
    let tax_precent = form.getFieldValue('tax_precent');
    let discount = form.getFieldValue('discount_precent');
    let pt = 0.01 * tax_precent * total;
    total += pt;
    let dp = 0.01 * discount * total;
    total -= dp;
    form.setFieldValue('total_price', total);
  };
  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form
            name="order"
            form={form}
            layout="vertical"
            onChange={getAllItems}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Table number"
                  name="table_id"
                  rules={[{ required: true, message: 'Please select the table ID' }]}
                >
                  <Select>
                    <Option value={tableData.id}>
                      {tableData.table_number} - {' (' + tableData.no_of_seats + ' Seater )'}
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Customer Name" name="customer_name">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item
                  label="Total Price"
                  name="total_price"
                  rules={[{ required: true, message: 'Please enter the total price' }]}
                >
                  <InputNumber min={0} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item label="Discount Percent" name="discount_precent" initialValue={0}>
                  <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item label="Tax Percent" name="tax_precent" initialValue={0}>
                  <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item label="Order Status" name="status" initialValue="pending">
                  <Select>
                    <Option value="pending">Pending</Option>
                    <Option value="preparing">Preparing</Option>
                    <Option value="served">Served</Option>
                    <Option value="paid">Paid</Option>
                    <Option value="canceled">Canceled</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.List name="order_items">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <>
                      <hr style={{ margin: '20px 0', borderColor: '#e8e8e8' }} />
                      <Row key={key} gutter={16} align="middle">
                        <Col xs={12} sm={12} md={12} lg={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'item_id']}
                            fieldKey={[fieldKey, 'item_id']}
                            label="Item Code"
                            rules={[{ required: true, message: 'Please select the item ID' }]}
                          >
                            <Select
                              showSearch
                              onSearch={(value) => {
                                setSearch(value);
                              }}
                              onChange={(value) => {
                                const selectedItem = item.find((data) => data.id === value);
                                form.setFieldsValue({
                                  order_items: {
                                    [name]: {
                                      item_name: selectedItem?.name,
                                      price: selectedItem?.price,
                                      quantity: 1,
                                    },
                                  },
                                });
                                getAllItems();
                              }}
                            >
                              {item.map((data) => (
                                <Option value={data.id} key={data.id}>
                                  {data.item_code} - {data.name}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'item_name']}
                            fieldKey={[fieldKey, 'item_name']}
                            label="Item Name"
                            rules={[{ required: true, message: 'Please enter the item name' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col xs={8} sm={12} md={12} lg={4}>
                          <Form.Item
                            {...restField}
                            name={[name, 'quantity']}
                            fieldKey={[fieldKey, 'quantity']}
                            label="Quantity"
                            rules={[{ required: true, message: 'Please enter the quantity' }]}
                          >
                            <InputNumber min={0} style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'price']}
                            fieldKey={[fieldKey, 'price']}
                            label="Unit Price"
                            rules={[{ required: true, message: 'Please enter the price' }]}
                          >
                            <InputNumber min={0} precision={2} style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(name);
                              getAllItems();
                            }}
                            style={{ fontSize: '20px', color: 'red' }}
                          />
                        </Col>
                      </Row>
                    </>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      Add Item
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <div className="flex justify-end gap-2 mt-5">
              <Button
                onClick={() => {
                  setVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Spin>
    </>
  );
};

export default AddRoom;
