import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Select,
  message,
  Row,
  Col,
  DatePicker,
  Space,
  Spin,
  InputNumber,
  Layout,
  Menu,
} from 'antd';
import React, { useState, useEffect } from 'react';
import NewRow from './NewRow';
const { SubMenu } = Menu;
import { addUser, getSingleUser, updateUser } from '../../utility/services/users';
import { getAllCourse } from '../../utility/services/salaryComponents';

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const PackageComponent = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [monthly, setMonthly] = useState(0);
  const [yearly, setYearly] = useState(0);
  const [allItems, setAllItems] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const fetchComponents = () => {
    getAllCourse({ start: 0, limit: 10, type: 'EARNING' })
      .then((res) => {
        const data = res?.data?.rows;
        setEarnings(data);
      })
      .catch((error) => {
        message.error('Error fetching room suggestions');
        // setLoading(false);
      });
    getAllCourse({ start: 0, limit: 10, type: 'DEDUCTION' })
      .then((res) => {
        const data = res?.data?.rows;
        setDeductions(data);
      })
      .catch((error) => {
        message.error('Error fetching room suggestions');
        // setLoading(false);
      });
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  const removeObjectById = (array, idToRemove) => {
    return array.filter((item) => item.id !== idToRemove);
  };

  const removeObject = (item, type) => {
    let newArr = removeObjectById(allItems, item.id);
    setAllItems(newArr);
    if (type === 'Earning') {
      setEarnings([...earnings, item]);
    }
    if (type === 'Deduction') {
      setDeductions([...deductions, item]);
    }
  };

  const updateComp = (item, arr, remove) => {
    setAllItems([...allItems, item]);
    if (arr === 'earning') {
      let newArr = removeObjectById(earnings, item.id);
      setEarnings(newArr);
    }
    if (arr === 'deduction') {
      let newArr = removeObjectById(deductions, item.id);
      setDeductions(newArr);
    }
  };
  const handleChange = (value) => {
    setYearly(value);
    setMonthly(value / 12); // Update state based on the new value
  };

  const CalculateAmount = (item) => {
    if (item.calculation_type === 'FLAT_AMOUNT') {
      return { annualy: item.pay_amount, monthly: item.pay_amount / 12 };
    } else if (item.calculation_type === 'PERCENTAGE') {
      let child = item.component;
      let childTotal = CalculateAmount(child);
      let anual = childTotal.annualy * item.pay_amount * 0.01;
      return { annualy: anual, monthly: anual / 12 };
      // console.log('=========', item, child);
      // return { annualy: 0, monthly: 0 };
    } else {
      let annualCtc = 600000;
      let annualy = annualCtc * 0.01 * item.pay_amount;
      return { annualy: annualy, monthly: annualy / 12 };
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={250}
        className="site-layout-background"
        style={{
          background: '#fff',
          borderRight: '1px solid #f0f0f0', // Dark border
          borderLeft: '1px solid #f0f0f0', // Dark border
        }}
      >
        <Menu
          mode="inline"
          //   defaultSelectedKeys={['1']}
          //   defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, marginTop: '20px' }}
        >
          <SubMenu key="sub1" title={<span style={{ fontSize: '16px' }}>Earnings</span>}>
            {earnings.map((item, index) => (
              <Menu.Item key={item.id} style={{ padding: '30px' }}>
                <span style={{ marginRight: '20px' }}>{item.name}</span>
                <PlusOutlined
                  onClick={() => {
                    updateComp(item, 'earning');
                  }}
                />
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="sub2" title={<span style={{ fontSize: '16px' }}>Deductions</span>}>
            {deductions.map((item, index) => (
              <Menu.Item key={item.id}>
                <span style={{ marginRight: '20px' }}>{item.name}</span>
                <PlusOutlined
                  onClick={() => {
                    updateComp(item, 'deduction');
                  }}
                />
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="sub3" title={<span style={{ fontSize: '16px' }}>Reimbursements</span>}></SubMenu>
          <SubMenu key="sub4" title={<span style={{ fontSize: '16px' }}>Taxes</span>}></SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '20px', backgroundColor: '#fff' }}>
        <Header className="site-layout-background" style={{ padding: 0, border: '1px solid #f0f0f0' }}>
          <h1 className="ml-2">New Salary Template</h1>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div>
            <Form
              form={form}
              name="User"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Package Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Required!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: 'Required!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} style={{ marginBottom: '16px' }}></Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} style={{ marginBottom: '16px' }}></Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} style={{ marginBottom: '16px' }}>
                  <hr />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} style={{ marginBottom: '16px' }}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Annual CTC"
                        name="ctc"
                        rules={[
                          {
                            required: true,
                            message: 'Required!',
                          },
                        ]}
                      >
                        <InputNumber min={0} style={{ width: '100%' }} onChange={handleChange} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row gutter={16} style={{ marginBottom: '16px' }}>
                <Col span={6}>
                  <h3>Component Name</h3>
                </Col>
                <Col span={4}>
                  <h3>Type</h3>
                </Col>
                <Col span={8}>
                  <h3>Calculation Type</h3>
                </Col>
                <Col span={4}>
                  <h3>Monthly, Annually</h3>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} style={{ marginBottom: '16px' }}>
                  <hr />
                </Col>
              </Row>
              {allItems.map((item, index) => (
                <NewRow key={index} item={item} removeObject={removeObject} />
              ))}
              <Row gutter={16} style={{ marginBottom: '8px' }}>
                <Col span={6}>
                  <Form.Item name="compoment">Fixed Allowance</Form.Item>
                </Col>
                <Col span={4}>{'Earning'}</Col>
                <Col span={8}>
                  <Form.Item>{'Flat Amount'}</Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item>{'0, 0'}</Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} style={{ marginBottom: '16px' }}>
                  <hr />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <h4>Cost To Company</h4>
                </Col>
                <Col span={4}>{/* <h3>Type</h3> */}</Col>
                <Col span={8}></Col>
                <Col span={4}>
                  <h3>{monthly + ', ' + yearly}</h3>
                </Col>
              </Row>

              <div className="flex justify-end gap-2 mt-2">
                <Button onClick={() => {}}>Cancel</Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PackageComponent;
