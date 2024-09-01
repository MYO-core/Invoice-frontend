import { Button, Col, Form, Input, InputNumber, Row, Select, Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import { addCms, getSingleCms, updateCms } from '../../utility/services/tables';

const { Option } = Select;

const AddRoom = ({ setisAddCms, getAllData, setIsEditCms, isEditCms, currentStore, setNewRecord, newRecord }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const tables = values.tables;

    const body = tables.map((table) => ({
      ...table,
      store_id: currentStore,
    }));

    if (isEditCms?.cmsId) {
      let bosyData = {
        no_of_seats: body[0]?.no_of_seats,
        status: body[0]?.status,
        table_number: body[0]?.table_number,
      };

      updateCms({
        id: isEditCms?.cmsId,
        body: bosyData, // Assuming you're only editing one table at a time
      })
        .then((res) => {
          setIsEditCms({ isOpen: false, cmsId: '' });
          // getAllData();
          setNewRecord(newRecord + 1);
          message.success('Data updated successfully');
        })
        .catch((err) => console.log('err', err));
    } else {
      addCms({
        body: body,
      })
        ?.then((res) => {
          setisAddCms(false);
          // getAllData();
          setNewRecord(newRecord + 1);
          message.success('Tables added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
        });
    }
  };

  useEffect(() => {
    // populate single data if editing
    if (isEditCms?.cmsId) {
      setLoading(true);
      getSingleCms({ id: isEditCms?.cmsId })
        .then((res) => {
          form.setFieldsValue({ tables: [res?.data] });
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditCms?.cmsId]);

  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              tables: [
                {
                  status: 'booked', // Default value for status
                },
              ],
            }}
          >
            <Form.List name="tables">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <div key={field.key} style={{ marginBottom: 20 }}>
                      <Row gutter={16} align="middle">
                        <Col xs={24} sm={24} md={24} lg={8}>
                          <Form.Item
                            {...field}
                            label={`Table Number ${index + 1}`}
                            name={[field.name, 'table_number']}
                            fieldKey={[field.fieldKey, 'table_number']}
                            rules={[
                              {
                                type: 'string',
                                message: 'Table number must be a string.',
                              },
                            ]}
                          >
                            <Input placeholder="Enter table number" />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8}>
                          <Form.Item
                            {...field}
                            label="Number of Seats"
                            name={[field.name, 'no_of_seats']}
                            fieldKey={[field.fieldKey, 'no_of_seats']}
                            rules={[
                              {
                                required: true,
                                message: 'Please enter the number of seats.',
                              },
                              {
                                type: 'number',
                                min: 1,
                                message: 'Number of seats must be at least 1.',
                              },
                            ]}
                          >
                            <InputNumber min={1} placeholder="Enter number of seats" style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                          <Form.Item
                            {...field}
                            label="Status"
                            name={[field.name, 'status']}
                            fieldKey={[field.fieldKey, 'status']}
                            rules={[
                              {
                                required: true,
                                message: 'Please select the status.',
                              },
                            ]}
                          >
                            <Select placeholder="Select status">
                              <Option value="available">Available</Option>
                              <Option value="booked">Booked</Option>
                              <Option value="service">Service</Option>
                              <Option value="preparing">Preparing</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                          {fields.length > 1 && (
                            <DeleteOutlined
                              onClick={() => remove(field.name)}
                              style={{ fontSize: '20px', color: '#ff4d4f', cursor: 'pointer', marginTop: '30px' }}
                            />
                          )}
                        </Col>
                      </Row>
                    </div>
                  ))}
                  {!isEditCms?.cmsId && (
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} style={{ width: '60%' }} block>
                        Add Another Table
                      </Button>
                    </Form.Item>
                  )}
                </>
              )}
            </Form.List>

            <Form.Item style={{ textAlign: 'right' }}>
              <Button onClick={() => setisAddCms(false)} style={{ marginRight: 8 }}>
                Cancel
              </Button>
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

export default AddRoom;
