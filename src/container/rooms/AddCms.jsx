import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Spin, Upload, message, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { UploadOutlined, EyeOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { uploadImage } from '../../utility/services/upload';
import { addCms, getSingleCms, updateCms } from '../../utility/services/rooms';

const { Option } = Select;

const AddRoom = ({ setisAddCms, getAllData, setIsEditCms, isEditCms }) => {
  const [filesData, setFilesData] = useState([]);
  const [previewImage, setPreviewImage] = useState('');
  const [isPreviewModal, setIsPreviewModal] = useState(false);
  const [previewTitle, setPreviewTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [content1Output, setContent1Output] = useState(null);
  console.log('content1Output', content1Output);
  const [content2Output, setContent2Output] = useState(null);

  const handleContent2 = (event, editor) => {
    setContent2Output(editor.getData());
  };

  const [form] = Form.useForm();

  const handleChange = (info) => {
    setUploadLoading(true);

    const formData = new FormData();
    formData.append('file', info.file.originFileObj);

    uploadImage(formData)
      .then((res) => {
        setFilesData((prev) => [...prev, { link: res?.data?.link }]);
        setUploadLoading(false);
      })
      .catch((err) => {
        message.error('Error while uploading');
        setUploadLoading(false);
      });
  };

  const handlePreview = async (file_) => {
    const file = file_;
    setPreviewImage(file?.link);
    setIsPreviewModal(true);
    setPreviewTitle(file?.file ? file?.file?.name : file?.name);
  };

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
          setContent2Output(res?.data?.description);

          const file = res?.data?.media?.filesData;
          setFilesData(file);
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
          <Form name="roomForm" form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Room Number"
                  name="roomNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Room number is required!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Room Type"
                  name="roomType"
                  rules={[
                    {
                      required: true,
                      message: 'Room type is required!',
                    },
                  ]}
                >
                  <Select placeholder="Select Room Type">
                    <Option value="single">Single</Option>
                    <Option value="double">Double</Option>
                    <Option value="suite">Suite</Option>
                    <Option value="deluxe">Deluxe</Option>
                    <Option value="family">Family</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Price Per Night"
                  name="pricePerNight"
                  rules={[
                    {
                      required: true,
                      message: 'Price per night is required!',
                    },
                  ]}
                >
                  <InputNumber min={0} prefix="₹" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label="Max Occupancy"
                  name="maxOccupancy"
                  rules={[
                    {
                      required: true,
                      message: 'Max occupancy is required!',
                    },
                  ]}
                >
                  <InputNumber min={1} max={10} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item label="Is Available" name="isAvailable" valuePropName="checked">
                  <Switch />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item label="Description" name="description">
                  <Input.TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>

            <div className="flex justify-end gap-2 mt-5">
              <Button
                onClick={() => {
                  form.resetFields();
                  setisAddCms(false);
                  setIsEditCms({ isOpen: false, courseId: '' });
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

export default AddRoom;
