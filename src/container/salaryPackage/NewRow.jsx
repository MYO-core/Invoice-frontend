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
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Form.Item name="component">{item.name}</Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item name="component">{obj[`${item.type}`]}</Form.Item>
      </Col>
      <Col span={8}>
        {/* {(item.calculation_type === 'PERCENTAGE' || item.calculation_type === 'PERCENT_OF_CTC') && ( */}
        <Form.Item name="monthlyAmount">
          <InputNumber defaultValue={item.pay_amount} style={{ width: '50%' }} />
          <Input value={obj2[`${item.calculation_type}`]} disabled style={{ width: '50%' }} />
        </Form.Item>
        {/* )} */}
        {/* {item.calculation_type === 'FLAT_AMOUNT' && 'Fixed Amount'} */}
      </Col>
      <Col span={4}>
        <Form.Item name="annualAmount">{item.monthly + ', ' + item.annualy}</Form.Item>
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
