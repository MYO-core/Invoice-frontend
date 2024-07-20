import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { Row, Col, Form, Input, Button, message, Select } from 'antd';
import { useAtom } from 'jotai';

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
          window.location.replace('/company');
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
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap className="mt-6 bg-white rounded-md dark:bg-white10 shadow-regular dark:shadow-none">
          <div className="px-5 py-4 text-center border-b border-gray-200 dark:border-white10">
            <h2 className="mb-0 text-xl font-semibold text-dark dark:text-white87">Sign Up</h2>
          </div>
          <div className="px-10 pt-8 pb-6">
            <Form name="register" onFinish={handleSubmit} layout="vertical">
              <Form.Item
                label="Organisation Name"
                name="org_name"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                rules={[{ required: true, message: 'Please input your Organisation name!' }]}
              >
                <Input placeholder="Org Name" />
              </Form.Item>
              <Form.Item
                label="Stregnth"
                name="stregnth"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                rules={[{ required: true, message: 'Please input your Full name!' }]}
              >
                <Select placeholder="Select strength">
                  <Option value="0-100">0-100</Option>
                  <Option value="101-500">101-500</Option>
                  <Option value="501-1000">501-1000</Option>
                  <Option value="1001-10000">1001-10000</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="city"
                name="city"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                rules={[{ required: true, message: 'required!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="State"
                name="state"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                rules={[{ required: true, message: 'required!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="country"
                name="country"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                rules={[{ required: true, message: 'required!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="phoneNumber"
                name="phoneNumber"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
                rules={[{ required: true, message: 'required!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Website"
                name="Website"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
              >
                <Input />
              </Form.Item>
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
