import React from 'react';
import { Card, Col, Row, Tag, Typography, Collapse, Button, Popconfirm } from 'antd';

import { EditFilled, DeleteFilled } from '@ant-design/icons';
const { Text, Title } = Typography;
const { Panel } = Collapse;

const RoomCards = ({ allData, setIsEditCms }) => {
  return (
    <div style={{ padding: '20px' }}>
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
              title={
                <Title level={5}>
                  Room {room.roomNumber} - {room.roomType}
                </Title>
              }
              bordered={false}
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}
            >
              <Text strong>Price per Night: </Text>
              <Text>{room.pricePerNight}</Text>
              <br />
              <Text strong>Max Occupancy: </Text>
              <Text>{room.maxOccupancy} person(s)</Text>
              <br />
              <Text strong>Extra Beds: </Text>
              <Text>{room.extraBeds}</Text>
              <br />

              <Collapse ghost>
                <Panel header="Description" key="1">
                  <Text>{room.description}</Text>
                </Panel>
              </Collapse>

              <Text strong>Status: </Text>
              {room.isAvailable ? <Tag color="green">Available</Tag> : <Tag color="red">Not Available</Tag>}
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
