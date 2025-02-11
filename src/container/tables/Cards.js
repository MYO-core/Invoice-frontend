import React from 'react';
import { Card, Col, Row, Tag, Typography, Collapse, Button, Popconfirm } from 'antd';
import './tableNew.css';
import { PrinterOutlined, EyeOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;
const { Panel } = Collapse;
const RoomCards = ({ allData, setIsEditCms, setTableData, setVisible }) => {
  return (
    <div style={{ padding: '1px' }}>
      <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allData.map((room) => (
          <Col>
            {/* <Card
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
              </div>
            </Card> */}
            <>
              <Card
                id={room.id}
                className="table-box"
                onClick={() => {
                  setVisible(true);
                  setTableData(room);
                }}
                hoverable
                style={{
                  textAlign: 'center',
                  height: '80px',
                  minWidth: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...(room.current_order && { backgroundColor: 'rgb(125 107 144)', color: 'white' }),
                }}
              >
                {/* <div
                  style={{
                    position: 'absolute',
                    bottom: '0px', // Adjust as needed
                    left: '50%',
                    transform: 'translateX(-50%)', // Centers the icons horizontally
                    display: 'flex',
                    zIndex: 1,
                    justifyContent: 'space-between',
                    width: '40px',
                  }}
                >
                  <div style={{ backgroundColor: 'white' }}>
                    <PrinterOutlined style={{ fontSize: '20px', color: 'black', zIndex: 1, marginRight: '5px' }} />
                  </div>
                  <div style={{ backgroundColor: 'white', marginLeft: '4px' }}>
                    <EyeOutlined style={{ fontSize: '20px', color: 'black', zIndex: 1 }} />
                  </div>
                </div> */}
                {'T-' + room.table_number}
              </Card>
            </>
            {/* {
              <div
                style={{
                  position: 'absolute',
                  bottom: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                }}
              >
                <EditFilled onClick={() => setIsEditCms({ isOpen: true, cmsId: room?.id })} />
              </div>
            } */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RoomCards;
