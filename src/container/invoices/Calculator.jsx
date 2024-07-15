import React, { useState } from 'react';
import { Button, Input, Row, Col, Form, Modal } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
import './calculator.css';

const Calculator = ({ calculatorVisible, setCalculatorVisible }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCancel = () => {
    setCalculatorVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResult(res);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <>
      <Modal
        width={720}
        height={500}
        // title="Calculator"
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '2rem' }}>
            <span>Calculator</span>
            <Button type="primary" onClick={() => console.log('Button clicked')}>
              <RiseOutlined />
              Invoice
            </Button>
          </div>
        }
        open={calculatorVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
          <Form.Item>
            <Input.TextArea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4} // Set the number of visible text rows
            />
          </Form.Item>
          <Form.Item>
            <Input value={result !== null ? result : ''} readOnly placeholder="Result" />
          </Form.Item>
          <Row gutter={[8, 8]} className="mb-1">
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('1')}>
                1
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('2')}>
                2
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('3')}>
                3
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('+')}>
                +
              </Button>
            </Col>
          </Row>
          <Row gutter={[8, 8]} className="mb-1">
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('4')}>
                4
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('5')}>
                5
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('6')}>
                6
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('-')}>
                -
              </Button>
            </Col>
          </Row>
          <Row gutter={[8, 8]} className="mb-1">
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('7')}>
                7
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('8')}>
                8
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('9')}>
                9
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('*')}>
                *
              </Button>
            </Col>
          </Row>
          <Row gutter={[8, 8]} className="mb-1">
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('0')}>
                0
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('.')}>
                .
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={handleClear}>
                C
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={() => handleClick('/')}>
                /
              </Button>
            </Col>
          </Row>
          <Row gutter={[8, 8]} className="mb-1">
            <Col span={12}>
              <Button type="primary" block className="responsive-button" onClick={handleCalculate}>
                =
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={handleCalculate}>
                Save to device
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" block className="responsive-button" onClick={handleCalculate}>
                reset
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Calculator;
