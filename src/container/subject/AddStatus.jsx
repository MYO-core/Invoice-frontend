import { Button, Form, Input, Modal, Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { addSubject, getSingleSubject, updateSubject } from '../../utility/services/subjects';

const AddRole = ({ setisAddRoom, isEditRoom, setIsEditRoom, getAllRoomList }) => {
  const [isPreviewModal, setIsPreviewModal] = useState(false);
  const [previewTitle, setPreviewTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const body = {
      name: values?.name,
      code: values?.code,
    };

    if (isEditRoom?.roomId) {
      updateSubject({
        id: isEditRoom?.roomId,
        body: body,
      })
        .then((res) => {
          setIsEditRoom({ isOpen: false, roomId: '' });
          getAllRoomList();
          message.success('Role updated successfully');
        })
        .catch((err) => {
          console.log('err', err);
          message.error('Something Went Wrong');
        });
    } else {
      addSubject({
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

  useEffect(() => {
    // populate single Role data
    if (isEditRoom?.roomId) {
      setLoading(true);
      getSingleSubject({ id: isEditRoom?.roomId })
        .then((res) => {
          form.setFieldsValue(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditRoom?.roomId]);

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
            <Form.Item
              label="Code"
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Required! ',
                },
              ]}
            >
              <Input />
            </Form.Item>

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
        width={410}
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
