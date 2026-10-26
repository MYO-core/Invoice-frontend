import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col, Checkbox, Spin, message, Divider } from 'antd';
import { createTenant, updateTenant, getTenant } from '../../utility/services/admin';

const AddTenant = ({ editTenant, setEditTenant, setIsAddTenant, refresh }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const isEdit = !!editTenant?.id;

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getTenant({ id: editTenant.id })
        .then((res) => {
          form.setFieldsValue(res?.data);
        })
        .catch(() => message.error('Could not load tenant'))
        .finally(() => setLoading(false));
    }
  }, [editTenant?.id]);

  const close = () => {
    setIsAddTenant(false);
    setEditTenant(null);
  };

  const onFinish = (values) => {
    setLoading(true);
    if (isEdit) {
      updateTenant({ id: editTenant.id, body: values })
        .then(() => {
          message.success('Tenant updated successfully');
          close();
          refresh();
        })
        .catch((err) => message.error(err?.message || 'Could not update tenant'))
        .finally(() => setLoading(false));
    } else {
      createTenant(values)
        .then(() => {
          message.success('Tenant created successfully');
          close();
          refresh();
        })
        .catch((err) => message.error(err?.message || 'Could not create tenant'))
        .finally(() => setLoading(false));
    }
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tenant / Business Name"
              name={isEdit ? 'name' : 'org_name'}
              rules={[{ required: true, message: 'Required' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone Number" name="phoneNumber">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {!isEdit && (
          <>
            <Divider orientation="left" plain>
              Owner login
            </Divider>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Owner Name" name="owner_name" rules={[{ required: true, message: 'Required' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Owner Email"
                  name="owner_email"
                  rules={[
                    { required: true, message: 'Required' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Owner Password"
                  name="owner_password"
                  rules={[
                    { required: true, message: 'Required' },
                    { min: 6, message: 'At least 6 characters' },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>
            <Divider orientation="left" plain>
              Business details
            </Divider>
          </>
        )}

        {isEdit && (
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Email" name="email" rules={[{ type: 'email', message: 'Please enter a valid email!' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        )}

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="State" name="state">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Country" name="country">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="GST" name="gst">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Registration" name="registration">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Modules" className="mb-0">
              <div className="flex gap-6">
                <Form.Item name="hotel" valuePropName="checked" noStyle>
                  <Checkbox>Hotel</Checkbox>
                </Form.Item>
                <Form.Item name="restraunt" valuePropName="checked" noStyle>
                  <Checkbox>Restaurant</Checkbox>
                </Form.Item>
                <Form.Item name="inventory" valuePropName="checked" noStyle>
                  <Checkbox>Inventory</Checkbox>
                </Form.Item>
              </div>
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end gap-2 mt-2">
          <Button onClick={close}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            {isEdit ? 'Save' : 'Create Tenant'}
          </Button>
        </div>
      </Form>
    </Spin>
  );
};

export default AddTenant;
