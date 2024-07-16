import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Upload, Spin, message, Select } from 'antd';
import { useAtom } from 'jotai';
import { UploadOutlined, EyeOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';
import { Button } from '../../components/buttons/buttons';

import { PageHeader } from '../../components/page-headers/page-headers';
import { uploadImage } from '../../utility/services/upload';

import { currentUserData } from '../../globalStore/index';
const { currentUser, updateUser } = require('../../utility/services/auth');

function Profile() {
  const [fileUrl, setFileUrl] = useState('');
  const [userData, setUserData] = useAtom(currentUserData);

  const [uploadLoading, setUploadLoading] = useState(false);

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    const body = values;
    body.profile_image = fileUrl;

    updateUser(body)
      .then((res) => {
        setUserData(res.data);
        message.success('Updated successfully');
      })
      .catch((err) => {
        console.log('err :>> ', err);
        setLoading(false);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };

  useEffect(() => {
    currentUser().then((data) => {
      setFileUrl(data.data.profile_image);
      form.setFieldsValue(data.data);
    });
  }, []);

  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (info) => {
    setUploadLoading(true);

    const formData = new FormData();
    formData.append('file', info.file.originFileObj);

    uploadImage(formData)
      .then((res) => {
        console.log(res);
        setFileUrl(res.data.link);
        setFilesData((prev) => [...prev, { id: info.file.uid, file: info.file.originFileObj, name: res?.data?.name }]);
        setUploadLoading(false);
      })
      .catch((err) => {
        message.error('Error while uploading');
        setUploadLoading(false);
      });
  };

  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/profile',
      breadcrumbName: 'Profile',
    },
  ];

  return (
    <>
      <Spin spinning={loading}>
        <PageHeader
          title="Profile"
          routes={PageRoutes}
          className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        />
        <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
          <div className="p-[25px]">
            <img src={fileUrl} style={{ width: '200px', borderRadius: '30%' }} />
            <Row gutter={16} className="ml-2">
              <Spin spinning={uploadLoading}>
                <Col span={12}>
                  <Form.Item>
                    <Upload onChange={handleChange} fileList={[]}>
                      <Button className="flex items-center" icon={<UploadOutlined />}>
                        Click to Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Spin>
            </Row>
            <Row justify="space-between">
              <Col xxl={24} lg={24} xs={24}>
                <Form
                  form={form}
                  className="pt-2.5 pb-[30px]"
                  name="editProfile"
                  onFinish={handleSubmit}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="name"
                        label="Name"
                        className="mb-4 form-label-w-full form-label-text-start dark:text-white-60"
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
                    <Col span={12}>
                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        className="mb-4 form-label-w-full form-label-text-start"
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
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name="email"
                        initialValue=""
                        label="Email"
                        className="mb-4 form-label-w-full form-label-text-start"
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
                    <Col span={12}>
                      <Form.Item
                        name="password"
                        label="Password"
                        className="mb-4 form-label-w-full form-label-text-start"
                      >
                        <Input />
                        Enter Password only if You want to change.
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Father's Name" name="fatherName">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Mother's Name" name="motherName">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item name="gender" label="Gender">
                        <Select
                          placeholder="Select option..."
                          // onChange={onGenderChange}
                          allowClear
                        >
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                          <Option value="other">Others</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="address" label="Address">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Spin spinning={uploadLoading}>
                    <div className="flex justify-end gap-2 mt-2">
                      <Button size="default" htmlType="submit" type="primary" className="h-11 px-[20px] font-semibold">
                        Update Profile
                      </Button>
                      &nbsp; &nbsp;
                      <Button
                        size="default"
                        onClick={handleCancel}
                        type="light"
                        className="h-11 px-[20px] bg-regularBG dark:bg-white10 text-body dark:text-white87 font-semibold border-regular dark:border-white10"
                      >
                        Cancel
                      </Button>
                    </div>
                  </Spin>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </Spin>
    </>
  );
}

export default Profile;
