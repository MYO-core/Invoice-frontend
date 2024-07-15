import { Button, Form, Input, InputNumber, Modal, Select, Spin, DatePicker, message } from 'antd';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { addSession, getSingleSession, updateSession } from '../../utility/services/session';

const AddStatus = ({ setisAddRoom, isEditRoom, setIsEditRoom, getAllRoomList }) => {
  const [filesData, setFilesData] = useState([]);
  const [previewImage, setPreviewImage] = useState('');
  const [isPreviewModal, setIsPreviewModal] = useState(false);
  const [previewTitle, setPreviewTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [form] = Form.useForm();

  const handleChange = (info) => {
    setUploadLoading(true);
  };

  const handlePreview = async (file_) => {};

  const onFinish = (values) => {
    const body = {
      session_start: values?.session_start,
      session_end: values?.session_end,
      session_name: values?.session_name,
      status: values?.status,
    };

    if (isEditRoom?.roomId) {
      updateSession({
        id: isEditRoom?.roomId,
        body: body,
      })
        .then((res) => {
          setIsEditRoom({ isOpen: false, roomId: '' });
          getAllRoomList();
          message.success('Status updated successfully');
        })
        .catch((err) => console.log('err', err));
    } else {
      addSession({
        body: body,
      })
        ?.then((res) => {
          setisAddRoom(false);
          getAllRoomList();
          message.success('Status added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
        });
    }
  };

  useEffect(() => {
    // populate single Status data
    console.log('====================', isEditRoom);
    if (isEditRoom?.roomId) {
      setLoading(true);
      getSingleSession({ id: isEditRoom?.roomId })
        .then((res) => {
          const data = res?.data;
          data.session_start = moment(data.session_start);
          data.session_end = moment(data.session_end);
          form.setFieldsValue(data);
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
            name="session"
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
              label="Session name"
              name="session_name"
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
              label="Session start"
              name="session_start"
              rules={[
                {
                  required: true,
                  message: 'Required! ',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Session end"
              name="session_end"
              rules={[
                {
                  required: true,
                  message: 'Required! ',
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item name="status" label="Status">
              <Select
                placeholder="Select option..."
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="1">Active</Option>
                <Option value="0">In-active</Option>
              </Select>
            </Form.Item>

            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setisAddRoom(false);
                  setIsEditRoom({ isOpen: false, roomId: '' });
                  setFilesData([]);
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
          setPreviewImage('');
        }}
        destroyOnClose
      >
        <img src={previewImage ? previewImage : ''} alt={previewImage} style={{ width: '400px' }} />
      </Modal>
    </>
  );
};

export default AddStatus;
