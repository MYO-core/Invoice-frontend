import React, { useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { Button } from '../../../../components/buttons/buttons';

import { PageHeader } from '../../../../components/page-headers/page-headers';
import { Tag } from '../../../../components/tags/tags';

const { Option } = Select;
function Profile() {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = (values) => {
    setState({ ...state, values: { ...values, tags: state.tags } });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
  };

  const checked = (checke) => {
    setState({ tags: checke });
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
      <PageHeader
        title="Profile"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
        <div className="p-[25px]">
          <Row justify="center">
            <Col xxl={12} lg={16} xs={24}>
              <Form className="pt-2.5 pb-[30px]" name="editProfile" onFinish={handleSubmit}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      initialValue="Duran Clayton"
                      label="Name"
                      className="mb-4 form-label-w-full form-label-text-start dark:text-white-60"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="phone"
                      initialValue="0096644553"
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
                      name="country"
                      initialValue=""
                      label="Country"
                      className="mb-4 form-label-w-full form-label-text-start"
                    >
                      <Select style={{ width: '100%' }}>
                        <Option value="">Please Select</Option>
                        <Option value="bangladesh">Bangladesh</Option>
                        <Option value="india">India</Option>
                        <Option value="pakistan">Pakistan</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="city"
                      initialValue=""
                      label="City"
                      className="mb-4 form-label-w-full form-label-text-start"
                    >
                      <Select style={{ width: '100%' }}>
                        <Option value="">Please Select</Option>
                        <Option value="dhaka">Dhaka</Option>
                        <Option value="mymensingh">Mymensingh</Option>
                        <Option value="khulna">Khulna</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
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
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="userBio"
                      initialValue="Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee."
                      label="User Bio"
                      className="mb-4 form-label-w-full form-label-text-start"
                    >
                      <Input.TextArea rows={3} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item name="skills" label="Skills" className="mb-4 form-label-w-full form-label-text-start">
                      <div className="p-3 border border-gray-200 dark:border-white10 rounded-md [&>div>div>span>.ant-tag]:inline-flex [&>div>div>span>.ant-tag]:items-center">
                        <Tag className="bg-primary" animate onChange={checked} data={state.tags} />
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
                <div className="mt-11">
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
    </>
  );
}

export default Profile;
