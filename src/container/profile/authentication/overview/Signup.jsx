import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { Row, Col, Form, Input, Button, message, Select } from 'antd';
import { useAtom } from 'jotai';

import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';

import { AuthFormWrap } from './style';
import { register } from '../../../../utility/services/auth';
import { Checkbox } from '../../../../components/checkbox/checkbox';

import { isCurrentUser } from '../../../../globalStore';
import { setItem } from '../../../../utility/localStorageControl';

function SignUp() {
  // const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useAtom(isCurrentUser);

  const [state, setState] = useState({
    values: null,
    checked: null,
  });
  const handleSubmit = (values) => {
    // dispatch(register(values));
    delete values.agreement;
    const body = values;
    register(body)
      ?.then((res) => {
        message.success('Account Registerd');
        if (res?.data) {
          setItem('access_token', res?.data?.accessToken);
          setItem('isLogin', true);
          setIsLoggedIn(true);
          window.location.replace('/');
        }
      })
      .catch((err) => {
        console.log('err :>> ', err);
      });
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <Row justify="center">
      <Col xxl={12} xl={12} md={14} sm={18} xs={24}>
        <AuthFormWrap className="mt-6 bg-white rounded-md dark:bg-white10 shadow-regular dark:shadow-none">
          <div className="px-5 py-4 text-center border-b border-gray-200 dark:border-white10">
            <h2 className="mb-0 text-xl font-semibold text-dark dark:text-white87">Register</h2>
          </div>
          <div className="px-10 pt-8 pb-6">
            <Form name="register" onFinish={handleSubmit} layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Full name!' }]}
                  >
                    <Input placeholder="Full name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Organisation Name"
                    name="org_name"
                    rules={[{ required: true, message: 'Please input your Organisation name!' }]}
                  >
                    <Input placeholder="Org Name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                  >
                    <Input placeholder="name@example.com" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Company Strength"
                    name="strength"
                    rules={[{ required: true, message: 'required!' }]}
                  >
                    <Select placeholder="Select strength">
                      <Option value="0-100">0-100</Option>
                      <Option value="101-500">101-500</Option>
                      <Option value="501-1000">501-1000</Option>
                      <Option value="1001-10000">1001-10000</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="City" name="city" rules={[{ required: true, message: 'required!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="State" name="state" rules={[{ required: true, message: 'required!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Country" name="country" rules={[{ required: true, message: 'required!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'required!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label="Address" name="address" rules={[{ required: true, message: 'required!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <div className="flex items-center justify-between">
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error('You must agree to the Terms of Service and Privacy Policy')),
                    },
                  ]}
                >
                  <Checkbox>
                    Creating an account means you’re okay with our Terms of Service and Privacy Policy
                  </Checkbox>
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  className="w-full h-12 p-0 my-6 text-sm font-medium"
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  Create Account
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="p-6 text-center bg-gray-100 dark:bg-white10 rounded-b-md">
            <p className="mb-0 text-sm font-medium text-body dark:text-white60">
              Already have an account?
              <Link to="/" className="ltr:ml-1.5 rtl:mr-1.5 text-info hover:text-primary">
                Sign In
              </Link>
            </p>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignUp;
