import React from 'react';
import { Card, Col, Row, Tag, Typography, Collapse, Button, Popconfirm } from 'antd';

import { EditFilled, DeleteFilled } from '@ant-design/icons';
const { Text, Title } = Typography;
const { Panel } = Collapse;

const RoomCards = ({ allData, setIsEditCms }) => {
  return (
    <div style={{ padding: '1px' }}>
      <Row gutter={[16, 16]}>
        {allData.map((room) => (
          <Col
            key={room.id}
            xs={24} // 1 card per row on extra-small screens (mobile)
            sm={12} // 2 cards per row on small screens (tablets)
            md={8} // 3 cards per row on medium screens (small desktops)
            lg={6} // 4 cards per row on large screens (desktops)
          >
            <Card
              title={<Title level={5}>Table No:- {room.table_number}</Title>}
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
                  title="Are you sure to delete this Room?"
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
                ></Popconfirm>
                <DeleteFilled onClick={() => {}} style={{ cursor: 'pointer', color: '#ff4d4f' }} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RoomCards;
