import React from 'react';
import { Card, Col, Row, Tag, Typography, Collapse, Button, Popconfirm } from 'antd';

import {
  EditFilled,
  DeleteFilled,
  PlusOutlined,
  EyeOutlined,
  PrinterOutlined,
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
const { Text, Title } = Typography;
const { Panel } = Collapse;

const RoomCards = ({ allData, setIsEditCms, setTableData, setVisible }) => {
  return (
    <div style={{}}>
      <Row gutter={[16, 16]}>
        {allData.map((room) => (
          <Col key={room.id} xs={12} sm={8} md={6} lg={4}>
            <Card
              bordered={true}
              style={{
                border: '1px solid #a158e0',
                width: '180px',
              }}
            >
              <div className="flex justify-between items-center">
                {/* <Text strong>Table {room.table_number}</Text> */}
                <span
                  className="ml-5 sm:ml-16 cursor-pointer"
                  onClick={() => {
                    setVisible(true);
                    setTableData(room);
                  }}
                >
                  {/* <Tag color={room.current_order ? 'blue' : 'green'}>
                    <EyeOutlined className="mr-1" />
                    {room.current_order ? 'View Order' : 'Add Order'}
                  </Tag> */}
                  <h4>Table : {room.table_number} </h4>
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <Button
                  icon={<PrinterOutlined />}
                  size="small"
                  onClick={() => handlePrint(room.id)}
                  style={{
                    backgroundColor: '#2196F3',
                    color: 'white',
                  }}
                />
                <div style={{ justifyContent: 'center' }}>
                  <Button
                    icon={<PlusOutlined />}
                    size="small"
                    onClick={() => handleAddItem(room.id)}
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                    }}
                  />
                  <Button
                    icon={<EditOutlined />}
                    size="small"
                    onClick={() => setIsEditCms({ isOpen: true, cmsId: room.id })}
                    style={{
                      backgroundColor: '#FF9800',
                      color: 'white',
                    }}
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RoomCards;
