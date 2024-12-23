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
} from '@ant-design/icons';
const { Text, Title } = Typography;
const { Panel } = Collapse;

const RoomCards = ({ allData, setIsEditCms, setTableData, setVisible }) => {
  return (
    <div style={{ padding: '1px' }}>
      <Row gutter={[16, 16]}>
        {allData.map((room) => (
          <Col key={room.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              bordered={true}
              style={{
                border: '1px solid #a158e0',
              }}
            >
              <div className="flex justify-between items-center">
                <Text strong>Table: {room.table_number}</Text>
                <span
                  className="ml-5 sm:ml-16 "
                  onClick={() => {
                    setVisible(true);
                    setTableData(room);
                  }}
                >
                  {room.current_order ? (
                    <Tag color="blue">
                      <EyeOutlined className="mr-1" />
                      view Order
                    </Tag>
                  ) : (
                    <Tag color="green">
                      <PlusOutlined className="mr-1" />
                      Add Order
                    </Tag>
                  )}
                </span>
              </div>
              <Text strong>Status: </Text>
              {room.status === 'available' ? (
                <Tag color="green">{room.status}</Tag>
              ) : (
                <Tag color="red">{room.status}</Tag>
              )}
              <br />
              {room.current_order && (
                <>
                  <Text>Current Order: </Text>
                  {'#' + room.current_order}
                </>
              )}
              {!room.current_order && (
                <>
                  <Text>Ready For Orders</Text>
                </>
              )}
              <div className="flex justify-between mt-2">
                <EditFilled
                  onClick={() => setIsEditCms({ isOpen: true, cmsId: room?.id })}
                  style={{ cursor: 'pointer', color: '#1890ff' }}
                />
                <div style={{ justifyContent: 'center' }}>
                  <Button
                    icon={<PlusOutlined />}
                    size="small"
                    onClick={() => handleAddItem(table.id)}
                    style={{ backgroundColor: '#4CAF50', color: 'white' }}
                  />
                  <Button
                    icon={<PrinterOutlined />}
                    size="small"
                    onClick={() => handlePrint(table.id)}
                    style={{ backgroundColor: '#2196F3', color: 'white' }}
                  />
                  <Button
                    icon={<EditOutlined />}
                    size="small"
                    onClick={() => setIsEditCms({ isOpen: true, cmsId: room?.id })}
                    style={{ backgroundColor: '#FF9800', color: 'white' }}
                  />
                  <Popconfirm
                    title="Are you sure to delete this table?"
                    onConfirm={() => handleDelete(table.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      icon={<DeleteOutlined />}
                      size="small"
                      style={{ backgroundColor: '#f44336', color: 'white' }}
                    />
                  </Popconfirm>
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
