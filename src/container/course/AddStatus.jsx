import { Button, Form, Input, InputNumber, Modal, Select, Spin, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { UploadOutlined, EyeOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';
import { addCourse, getSingleCourse, updateCourse } from '../../utility/services/course';
import { uploadImage } from '../../utility/services/upload';

const { Option } = Select;
const { TextArea } = Input;

const AddStatus = ({ setisAddStatus, isEditStatus, setIsEditStatus, getAllStatusList }) => {
  const [filesData, setFilesData] = useState([]);
  const [previewImage, setPreviewImage] = useState('');
  const [isPreviewModal, setIsPreviewModal] = useState(false);
  const [previewTitle, setPreviewTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const body = {
      name: values.name,
      code: values.code,
      fee: values.fee,
    };

    if (isEditStatus?.courseId) {
      updateCourse({
        id: isEditStatus?.courseId,
        body: body,
      })
        .then((res) => {
          setIsEditStatus({ isOpen: false, courseId: '' });
          getAllStatusList();
          message.success('Course updated successfully');
        })
        .catch((err) => {
          console.log('err', err);
          message.error('Something Went Wrong');
        });
    } else {
      addCourse({
        body: body,
      })
        ?.then((res) => {
          setisAddStatus(false);
          getAllStatusList();
          message.success('Course added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
          message.error('Something Went Wrong');
        });
    }
  };

  useEffect(() => {
    // populate single Status data
    if (isEditStatus?.courseId) {
      setLoading(true);
      getSingleCourse({ id: isEditStatus?.courseId })
        .then((res) => {
          form.setFieldsValue(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditStatus?.courseId]);

  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form
            form={form}
            name="Statuss"
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

            <Form.Item
              label="Fee"
              name="fee"
              rules={[
                {
                  required: true,
                  message: 'Required! ',
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item label="Sections" name="sections" rules={[{ required: true, message: 'Please Add Sections!' }]}>
              <Select mode="tags" placeholder="Select subjects"></Select>
            </Form.Item>

            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setisAddStatus(false);
                  setIsEditStatus({ isOpen: false, courseId: '' });
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
      ></Modal>
    </>
  );
};

export default AddStatus;
