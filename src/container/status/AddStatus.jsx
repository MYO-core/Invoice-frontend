import { Button, Form, Input, InputNumber, Modal, Select, Spin, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { UploadOutlined, EyeOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';
import { addStatus, getSingleStatus, updateStatus } from '../../utility/services/status';
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

  const handleChange = (info) => {
    setUploadLoading(true);

    const formData = new FormData();
    formData.append('file', info.file.originFileObj);

    uploadImage(formData)
      .then((res) => {
        setFilesData((prev) => [...prev, { id: info.file.uid, file: info.file.originFileObj, name: res?.data?.name }]);
        setUploadLoading(false);
      })
      .catch((err) => {
        message.error('Error while uploading');
        setUploadLoading(false);
      });
  };

  const handlePreview = async (file_) => {
    const file = file_;
    setPreviewImage(file?.prodUrl ? file?.prodUrl : URL.createObjectURL(file?.file));
    setIsPreviewModal(true);
    setPreviewTitle(file?.file ? file?.file?.name : file?.name);
  };

  const onFinish = (values) => {
    const body = {
      StatusNumber: values?.StatusNumber,
      type: values?.type,
      status: values?.status,
      price: values?.price,
      images: filesData && filesData.map((item) => item?.name),
    };

    if (isEditStatus?.StatusId) {
      updateStatus({
        id: isEditStatus?.StatusId,
        body: body,
      })
        .then((res) => {
          setIsEditStatus({ isOpen: false, StatusId: '' });
          getAllStatusList();
          message.success('Status updated successfully');
        })
        .catch((err) => console.log('err', err));
    } else {
      addStatuss({
        body: body,
      })
        ?.then((res) => {
          setisAddStatus(false);
          getAllStatusList();
          message.success('Status added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
        });
    }
  };

  useEffect(() => {
    // populate single Status data
    if (isEditStatus?.StatusId) {
      setLoading(true);
      getSingleStatus({ id: isEditStatus?.StatusId })
        .then((res) => {
          form.setFieldsValue(res?.data);
          const file = res?.data?.images.map((item, idx) => ({
            id: idx,
            name: item,
            prodUrl: `https://api.hotelvarunagrand.com/uploads/${item}`,
          }));
          setFilesData(file);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditStatus?.StatusId]);

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
              label="Status Number"
              name="StatusNumber"
              rules={[
                {
                  required: true,
                  message: 'Required! ',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="type" label="Type">
              <Select
                placeholder="Select option..."
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="Standard">Standard</Option>
                <Option value="Deluxe">Deluxe</Option>
                <Option value="Suite">Suite</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Description" name="description">
              <TextArea />
            </Form.Item>

            <Form.Item name="status" label="Status">
              <Select
                placeholder="Select option..."
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="Active">Active</Option>
                <Option value="InActive">InActive</Option>
                <Option value="Booked">Booked</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Price" name="price">
              <InputNumber className="w-full" />
            </Form.Item>

            <Form.Item label="Image" name="image">
              <Upload onChange={handleChange} fileList={[]}>
                <Button className="flex items-center" icon={<UploadOutlined />}>
                  Click to Upload
                </Button>
              </Upload>
              <div className="w-full" style={{ maxHeight: '230px', overflowY: 'auto' }}>
                {filesData?.length > 0 &&
                  filesData?.map((val) => (
                    <div key={val?.id} className="flex border rounded-md justify-between items-center p-1 px-3 my-1">
                      <div className="flex">
                        <span className="mr-2">
                          <LinkOutlined />
                        </span>
                        {val?.file ? val?.file?.name : val?.name}
                      </div>
                      <div className="flex gap-3 text-base">
                        <div className="cursor-pointer">
                          <div
                            onClick={() => {
                              handlePreview(val);
                            }}
                          >
                            <EyeOutlined />
                          </div>
                        </div>
                        <div className="cursor-pointer">
                          <div
                            onClick={() => {
                              const filteredRemovedFiles = filesData?.filter((elem) =>
                                elem?.file ? elem?.file?.uid !== val?.id : elem?.id !== val?.id,
                              );
                              setFilesData(filteredRemovedFiles);
                            }}
                          >
                            <DeleteOutlined style={{ color: 'red' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Form.Item>

            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setisAddStatus(false);
                  setIsEditStatus({ isOpen: false, StatusId: '' });
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
