import React from 'react';
import { Card, Col, Row, Tag, Typography, Collapse, Button, Popconfirm } from 'antd';

import { EditFilled, DeleteFilled, PlusOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;
const { Panel } = Collapse;

const RoomCards = ({ allData, setIsEditCms, setTableData, setVisible }) => {
  return (
    <div style={{ padding: '1px' }}>
      <Row gutter={[16, 16]}>
        {allData.map((room) => (
          <Col key={room.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={
                <Title level={5}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base">Table No:- {room.table_number}</span>
                    <span className="ml-4 sm:ml-16">
                      <PlusOutlined
                        onClick={() => {
                          setVisible(true);
                          setTableData(room);
                        }}
                        style={{ cursor: 'pointer', color: '#1890ff' }}
                      />
                    </span>
                  </div>
                </Title>
              }
              bordered={false}
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}
            >
              <Text strong>#ID: </Text>
              <Text>{room.id}</Text>
              <br />
              <Text strong>Total Seats: </Text>
              <Text>{room.no_of_seats}</Text>
              <br />

              <Text strong>Status: </Text>
              {room.status === 'available' ? (
                <Tag color="green">{room.status}</Tag>
              ) : (
                <Tag color="red">{room.status}</Tag>
              )}
              <div className="flex justify-between mt-2">
                <EditFilled
                  onClick={() => setIsEditCms({ isOpen: true, cmsId: room?.id })}
                  style={{ cursor: 'pointer', color: '#1890ff' }}
                />
                <Popconfirm
                  title="Are you sure to delete this Table?"
                  onConfirm={() => {
                    // deleteCms({ id: room?.id })
                    //   .then((res) => {
                    //     console.log('res', res);
                    //     message.success('Deleted Successfully');
                    //     // getAllData();
                    //   })
                    //   .catch((err) => console.log('err', err));
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteFilled onClick={() => {}} style={{ cursor: 'pointer', color: '#ff4d4f' }} />
                </Popconfirm>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RoomCards;
