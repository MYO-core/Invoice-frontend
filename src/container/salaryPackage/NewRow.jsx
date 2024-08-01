import React, { useState } from 'react';
import { Row, Col, Form, InputNumber, Input } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

const ComponentRow = ({ item, removeObject }) => {
  const deleteVal = () => {
    removeObject(item, obj[`${item.type}`]);
  };
  let obj = {
    EARNING: 'Earning',
    DEDUCTION: 'Deduction',
    TAX: 'Tax',
  };
  let obj2 = {
    PERCENTAGE: '% of ' + item?.component?.name,
    FLAT_AMOUNT: 'Flat Amount',
    PERCENT_OF_CTC: '% of CTC',
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
  let [prices, setPrices] = useState(CalculateAmount(item));
  //   let { annualy, monthly } = CalculateAmount;
  console.log(item.calculation_type === 'FLAT_AMOUNT', item);
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Form.Item name="component">{item.name}</Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item name="component">{obj[`${item.type}`]}</Form.Item>
      </Col>
      <Col span={8}>
        {(item.calculation_type === 'PERCENTAGE' || item.calculation_type === 'PERCENT_OF_CTC') && (
          <Form.Item name="monthlyAmount">
            <InputNumber value={item.pay_amount} style={{ width: '50%' }} />
            <Input value={obj2[`${item.calculation_type}`]} disabled style={{ width: '50%' }} />
          </Form.Item>
        )}
        {item.calculation_type === 'FLAT_AMOUNT' && 'Fixed Amount'}
      </Col>
      <Col span={4}>
        <Form.Item name="annualAmount">{prices.monthly + ', ' + prices.annualy}</Form.Item>
      </Col>
      <Col span={2}>
        <Form.Item>
          <MinusCircleOutlined onClick={deleteVal} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ComponentRow;
