import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Upload, Spin, message } from 'antd';
import { Button } from '../../components/buttons/buttons';

import { PageHeader } from '../../components/page-headers/page-headers';
import { Tag } from '../../components/tags/tags';
const { currentUser, updateUser } = require('../../utility/services/auth');

function Profile() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = (values) => {
    const body = values;
    // setState({ ...state, values: { ...values, tags: state.tags } });
    updateUser(values)
      .then((res) => {
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

  const checked = (checke) => {
    setState({ tags: checke });
  };

  useEffect(() => {
    currentUser().then((data) => {
      form.setFieldsValue(data.data);
    });
  }, []);

  const [imageUrl, setImageUrl] = useState('');

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => setImageUrl(imageUrl));
    }
  };

  const uploadButton = (
    <div>
      <Upload />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

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
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        className="mb-4 form-label-w-full form-label-text-start"
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
                  {/* <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="company"
                      initialValue="Example"
                      label="Company Name"
                      className="mb-4 form-label-w-full form-label-text-start"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="website"
                      initialValue="www.example.com"
                      label="Website"
                      className="mb-4 form-label-w-full form-label-text-start"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row> */}
                  <Row gutter={16}>
                    {/* <Col span={12}>
                    <Form.Item
                      name="userBio"
                      initialValue="Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee."
                      label="User Bio"
                      className="mb-4 form-label-w-full form-label-text-start"
                    >
                      <Input.TextArea rows={3} />
                    </Form.Item>
                  </Col> */}
                    <Col span={12}>
                      <Form.Item
                        name="profile_image"
                        label="User Image"
                        className="mb-4 form-label-w-full form-label-text-start"
                      >
                        <Upload
                          name="profile_image"
                          listType="picture-card"
                          className="avatar-uploader"
                          showUploadList={false}
                          beforeUpload={() => {}} // Add your validation logic here
                          onChange={() => {}} // Add your image upload logic here
                        >
                          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                  {/* <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="skills" label="Skills" className="mb-4 form-label-w-full form-label-text-start">
                      <div className="p-3 border border-gray-200 dark:border-white10 rounded-md [&>div>div>span>.ant-tag]:inline-flex [&>div>div>span>.ant-tag]:items-center">
                        <Tag className="bg-primary" animate onChange={checked} data={state.tags} />
                      </div>
                    </Form.Item>
                  </Col>
                </Row> */}
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
