import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Modal, Carousel, Select, Input, Popconfirm, message } from 'antd';

import { Space, Table, Tag } from 'antd';
import AddRoom from './AddStatus';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { deleteStatus, getAllStatus } from '../../utility/services/status';

const { Search } = Input;

const Rooms = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [start, setStart] = useState(0);
  const [isAddRoom, setisAddRoom] = useState(false);
  const [isEditRoom, setIsEditRoom] = useState({ isOpen: false, roomId: '' });
  const [allRooms, setAllRooms] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useState('');

  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/Status',
      breadcrumbName: 'Status',
    },
  ];

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      width: 140,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="middle" onClick={() => setIsEditRoom({ isOpen: true, roomId: record?._id })}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this status?"
            onConfirm={() => {
              deleteStatus({ id: record?._id })
                .then((res) => {
                  console.log('res', res);
                  message.success('Room Deleted Successfully');
                  getAllRoomList();
                })
                .catch((err) => console.log('err', err));
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger size="middle">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: 150,
    },
  ];

  const getAllRoomList = () => {
    getAllStatus({})
      .then((res) => {
        if (res) {
          setAllRooms(res?.data?.data);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllRoomList();
  }, [searchValue, statusChange]);

  const onSearch = (value) => {
    setSearchValue(value);
  };

  const handleStatusChange = (value) => {
    console.log('===============', value);
    setStatusChange(value);
  };
  const handlePaginationChange = (pageNumber) => {
    let start = (pageNumber - 1) * 10;
    setStart(start);
  };

  return (
    <>
      <PageHeader
        title="Status"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3">
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} className="">
            <Cards
              title={
                <div className="flex items-center gap-4">
                  <div>
                    <Search
                      placeholder="Room Number"
                      allowClear
                      enterButton="Search"
                      size="middle"
                      onSearch={onSearch}
                    />
                  </div>
                </div>
              }
              moreBtn={
                <Button type="primary" onClick={() => setisAddRoom(true)}>
                  Add
                </Button>
              }
              // title="Rooms"
              border={false}
              size="default"
            >
              <Table
                size="small"
                scroll={{ x: '100%', y: 'auto' }}
                columns={columns}
                dataSource={allRooms}
                pagination={{ total: totalCount, onChange: handlePaginationChange }}
              />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>

      <Modal
        title={`${isAddRoom ? 'Add Room' : 'Edit Room'}`}
        destroyOnClose
        open={isAddRoom || isEditRoom.isOpen}
        footer={false}
        onCancel={() => {
          setisAddRoom(false);
          setIsEditRoom({ isOpen: false, roomId: '' });
        }}
      >
        <AddRoom
          setisAddRoom={setisAddRoom}
          isEditRoom={isEditRoom}
          setIsEditRoom={setIsEditRoom}
          getAllRoomList={getAllRoomList}
        />
      </Modal>
    </>
  );
};

export default Rooms;
