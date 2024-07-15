import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Modal, Carousel, Select, Input, Popconfirm, message } from 'antd';

import { Space, Table, Tag } from 'antd';
import AddRoom from './AddStatus';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { deleteSubject, getAllSubject } from '../../utility/services/subjects';

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
      path: '/subjects',
      breadcrumbName: 'Subject',
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
      title: 'code',
      dataIndex: 'code',
      key: 'code',
      width: 140,
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
            title="Are you sure to delete this subject?"
            onConfirm={() => {
              deleteSubject({ id: record?.id })
                .then((res) => {
                  console.log('res', res);
                  message.success('subject Deleted Successfully');
                  getAllRoomList();
                })
                .catch((err) => {
                  console.log('err', err);
                  message.error('Something Went Wrong');
                });
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
    getAllSubject({ start, search: searchValue })
      .then((res) => {
        if (res) {
          setAllRooms(res?.data?.data);
          setTotalCount(res?.data?.totalCount);
        }
      })
      .catch((err) => {
        console.log('err', err);
        message.error('Something Went Wrong');
      });
  };

  useEffect(() => {
    getAllRoomList();
  }, [searchValue, statusChange, start]);

  const onSearch = (value) => {
    setSearchValue(value);
  };

  const handleStatusChange = (value) => {
    setStatusChange(value);
  };

  const handlePaginationChange = (pageNumber) => {
    let start = (pageNumber - 1) * 10;
    setStart(start);
  };

  return (
    <>
      <PageHeader
        title="Subjects"
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
                    <Search placeholder="Search" allowClear enterButton="Search" size="middle" onSearch={onSearch} />
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
        title={`${isAddRoom ? 'Add Subject' : 'Edit Subject'}`}
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
