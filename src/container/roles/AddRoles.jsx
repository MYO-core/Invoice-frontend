import { Button, Form, Input, Modal, Spin, message, Row, Col, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import { addRoles, getSingleRole, updateRole } from '../../utility/services/roles';

const AddRole = ({ setisAddRoom, isEditRoom, setIsEditRoom, getAllRoomList }) => {
  const [isPreviewModal, setIsPreviewModal] = useState(false);
  const [previewTitle, setPreviewTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formattedPermissions = modules.map((module) => {
      const modulePermissions = {};
      permissions.forEach((perm) => {
        modulePermissions[perm] = values[`${module}-${perm}`] || false;
      });
      return { module, ...modulePermissions };
    });

    const body = {
      name: values.name,
      permission: formattedPermissions,
    };

    if (isEditRoom?.roleId) {
      updateRole({
        id: isEditRoom?.roleId,
        body: body,
      })
        .then((res) => {
          setIsEditRoom({ isOpen: false, roleId: '' });
          getAllRoomList();
          message.success('Role updated successfully');
        })
        .catch((err) => {
          console.log('err', err);
          message.error('Something Went Wrong');
        });
    } else {
      addRoles({
        body: body,
      })
        ?.then((res) => {
          setisAddRoom(false);
          getAllRoomList();
          message.success('Role added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
          message.error('Something Went Wrong');
        });
    }
  };

  const modules = ['Users', 'Roles', 'Invoices', 'Customers', 'Stores', 'Company'];

  const permissions = ['add', 'edit', 'view', 'delete'];

  useEffect(() => {
    // populate single Role data
    if (isEditRoom?.roleId) {
      setLoading(true);
      getSingleRole({ id: isEditRoom?.roleId })
        .then((res) => {
          let fetchedData = res?.data;

          const formValues = { name: fetchedData.name };
          fetchedData?.permission?.forEach((perm) => {
            permissions.forEach((p) => {
              formValues[`${perm.module}-${p}`] = perm[p];
            });
          });
          form.setFieldsValue(formValues);
          // form.setFieldsValue(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditRoom?.roleId]);

  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form
            form={form}
            name="Roles"
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
            </Row>

            {modules.map((module) => (
              <Row gutter={24} key={module}>
                <Col span={24}>
                  <Form.Item label={module} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
                    {permissions.map((perm) => (
                      <Form.Item key={`${module}-${perm}`} name={`${module}-${perm}`} valuePropName="checked" noStyle>
                        <Checkbox>{perm.charAt(0).toUpperCase() + perm.slice(1)}</Checkbox>
                      </Form.Item>
                    ))}
                  </Form.Item>
                </Col>
              </Row>
            ))}
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setisAddRoom(false);
                  setIsEditRoom({ isOpen: false, RoleId: '' });
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={uploadLoading}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Spin>

      {/* Image preview modal */}
      <Modal
        width={700}
        title={previewTitle}
        open={isPreviewModal}
        footer={null}
        onCancel={() => {
          setIsPreviewModal(false);
        }}
        destroyOnClose
      ></Modal>
    </>
  );
};

export default AddRole;
