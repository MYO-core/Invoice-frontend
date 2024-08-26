import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Spin, Upload, message, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import { addCms, getSingleCms, updateCms } from '../../utility/services/orders';
import { getAllCms } from '../../utility/services/restroItems';
import { getAllTables } from '../../utility/services/tables';

const { Option } = Select;

const AddRoom = ({ setisAddCms, getAllData, setIsEditCms, isEditCms, currentStore }) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [tableDropdowns, setTableDropdowns] = useState([]);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const body = values;

    if (isEditCms?.cmsId) {
      updateCms({
        id: isEditCms?.cmsId,
        body: body,
      })
        .then((res) => {
          setIsEditCms({ isOpen: false, cmsId: '' });
          getAllData();
          message.success('Data updated successfully');
        })
        .catch((err) => console.log('err', err));
    } else {
      body.store_id = currentStore;
      addCms({
        body: body,
      })
        ?.then((res) => {
          setisAddCms(false);
          getAllData();
          message.success('Data added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
        });
    }
  };

  useEffect(() => {
    // populate single data
    if (isEditCms?.cmsId) {
      setLoading(true);
      getSingleCms({ id: isEditCms?.cmsId })
        .then((res) => {
          form.setFieldsValue(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditCms?.cmsId]);

  useEffect(() => {
    getAllCms({})
      .then((data) => {
        setItem(data.data.rows);
      })
      .catch((e) => {
        message.error('Error While Fetching Items');
      });
  }, []);
  useEffect(() => {
    getAllTables({})
      .then((data) => {
        setTableDropdowns(data.data.rows);
      })
      .catch((e) => {
        message.error('Error While Fetching Items');
      });
  }, []);
  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form name="order" form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Table number"
                  name="table_id"
                  rules={[{ required: true, message: 'Please select the table ID' }]}
                >
                  <Select>
                    {tableDropdowns.map((data) => (
                      <Option value={data.id}>
                        {data.table_number} - {' (' + data.no_of_seats + ' Seater )'}
                      </Option>
                    ))}
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
              <Col span={8}>
                <Form.Item
                  label="Total Price"
                  name="total_price"
                  rules={[{ required: true, message: 'Please enter the total price' }]}
                >
                  <InputNumber min={0} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Discount Percent" name="discount_precent" initialValue={0}>
                  <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Tax Percent" name="tax_precent" initialValue={0}>
                  <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
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
                    <Row key={key} gutter={16} align="middle">
                      <Col span={6}>
                        <Form.Item
                          {...restField}
                          name={[name, 'item_id']}
                          fieldKey={[fieldKey, 'item_id']}
                          label="Item"
                          rules={[{ required: true, message: 'Please select the item ID' }]}
                        >
                          <Select
                            onChange={(value) => {
                              const selectedItem = item.find((data) => data.id === value);
                              form.setFieldsValue({
                                order_items: {
                                  [name]: {
                                    item_name: selectedItem?.name,
                                    price: selectedItem?.price,
                                  },
                                },
                              });
                            }}
                          >
                            {item.map((data) => (
                              <Option value={data.id} key={data.id}>
                                {data.item_code}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={6}>
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
                      <Col span={5}>
                        <Form.Item
                          {...restField}
                          name={[name, 'quantity']}
                          fieldKey={[fieldKey, 'quantity']}
                          label="Quantity"
                          rules={[{ required: true, message: 'Please enter the quantity' }]}
                        >
                          <InputNumber min={1} style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item
                          {...restField}
                          name={[name, 'price']}
                          fieldKey={[fieldKey, 'price']}
                          label="Price"
                          rules={[{ required: true, message: 'Please enter the price' }]}
                        >
                          <InputNumber min={0} precision={2} style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={2}>
                        <MinusCircleOutlined onClick={() => remove(name)} style={{ fontSize: '20px', color: 'red' }} />
                      </Col>
                    </Row>
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
                  setIsOrderModalOpen(false);
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
