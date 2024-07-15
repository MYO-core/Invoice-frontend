import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Modal, Carousel, Select, Input, Popconfirm, message } from 'antd';

import { Space, Table, Tag } from 'antd';
import AddRoom from './AddStatus';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { deleteSession, getAllSession } from '../../utility/services/session';

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
      title: 'session name',
      dataIndex: 'session_name',
      key: 'session_name',
      width: 140,
    },
    {
      title: 'start date',
      dataIndex: 'session_start',
      key: 'session_start',
      width: 140,
    },
    {
      title: 'end date',
      dataIndex: 'session_end',
      key: 'session_end',
      width: 140,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 140,
      render: (status) => <span>{status === 1 ? 'Active' : 'Inactive'}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="middle" onClick={() => setIsEditRoom({ isOpen: true, roomId: record?.id })}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this status?"
            onConfirm={() => {
              deleteSession({ id: record?.id })
                .then((res) => {
                  console.log('res', res);
                  message.success('Status Deleted Successfully');
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
    getAllSession({})
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
                      placeholder="session name"
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
        title={`${isAddRoom ? 'Add Session' : 'Edit Session'}`}
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
