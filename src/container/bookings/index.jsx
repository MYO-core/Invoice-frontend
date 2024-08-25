import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Row, Col, Button, Table, Modal, Space, Popconfirm, message, Select, Input } from 'antd';
import moment from 'moment';
import AddOrder from './AddOrder';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { getAllOrder, deleteOrder } from '../../utility/services/bookings';
import { currentStoreId } from '../../globalStore/index';

const { Search } = Input;

const Users = () => {
  const [allOrder, setAllOrder] = useState([]);
  const [isAddOrder, setIsAddOrder] = useState(false);
  const [isEditOrder, setIsEditOrder] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useState('');
  const [currentStore, setCurrentStore] = useAtom(currentStoreId);
  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/bookings',
      breadcrumbName: 'Bookings',
    },
  ];

  const getAllOrders = () => {
    getAllOrder({ search: searchValue, status: statusChange })
      .then((res) => {
        if (res) {
          setAllOrder(res?.data?.rows);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllOrders();
  }, [searchValue, statusChange]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'customer',
      // key: 'customer',
      render: (e) => e.name,
      width: 180,
    },
    {
      title: 'Phone',
      dataIndex: 'customer',
      // key: 'customerEmail',
      render: (e) => e.phone,
      width: 180,
    },
    {
      title: 'Check In',
      dataIndex: 'checkInDate',
      key: 'checkInDate',
      width: 150,
      render: (checkInDate) => moment(checkInDate).format('YYYY-MM-DD'),
    },
    {
      title: 'Check Out',
      dataIndex: 'checkOutDate',
      key: 'checkOutDate',
      width: 150,
      render: (checkoutDate) => moment(checkoutDate).format('YYYY-MM-DD'),
    },
    {
      title: 'no. of Rooms',
      dataIndex: 'noOfRooms',
      width: 150,
      key: 'noOfRooms',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="small" onClick={() => setIsEditOrder({ isOpen: true, orderId: record?.id })}>
            <EditFilled />
          </Button>
          <Popconfirm
            title="Are you sure to delete this Order?"
            onConfirm={() => {
              deleteOrder({ id: record?._id })
                .then((res) => {
                  // console.log('res', res);
                  message.success('Order Deleted Successfully');
                  getAllOrders();
                })
                .catch((err) => console.log('err', err));
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger size="small">
              <DeleteFilled />
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: 150,
    },
  ];

  const onSearch = (value) => {
    setSearchValue(value);
  };
  const handleStatusChange = (value) => {
    setStatusChange(value);
  };

  return (
    <>
      <PageHeader
        title="Bookings"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3  ">
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} className="">
            <Cards
              title={
                <div className="flex items-center gap-4">
                  <div>
                    <Select
                      style={{
                        width: 120,
                      }}
                      size="middle"
                      placeholder="Status"
                      onChange={handleStatusChange}
                      options={[
                        {
                          value: '',
                          label: 'All',
                        },
                        {
                          value: 'booked',
                          label: 'booked',
                        },
                        {
                          value: 'checked-in',
                          label: 'checked-in',
                        },
                        {
                          value: 'checked-out',
                          label: 'checked-out',
                        },
                        {
                          value: 'cancelled',
                          label: 'cancelled',
                        },
                      ]}
                    />
                  </div>
                  <div>
                    <Search placeholder="search" allowClear enterButton="Search" size="middle" onSearch={onSearch} />
                  </div>
                </div>
              }
              moreBtn={
                <Button type="primary" onClick={() => setIsAddOrder(true)}>
                  Add
                </Button>
              }
              // title="Orders"
              // border={false}
              // size="default"
            >
              <Table size="small" scroll={{ x: '100%', y: 'auto' }} columns={columns} dataSource={allOrder} />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>
      <Modal
        title={isAddOrder ? 'Add Booking' : 'Edit Booking'}
        destroyOnClose
        open={isAddOrder || isEditOrder.isOpen}
        width={1024}
        // onOk={handleAddCmss}
        footer={false}
        onCancel={() => {
          setIsAddOrder(false);
          setIsEditOrder({ isOpen: false, orderId: null });
        }}
      >
        <AddOrder
          setIsAddOrder={setIsAddOrder}
          getAllOrder={getAllOrders}
          isEditOrder={isEditOrder}
          setIsEditOrder={setIsEditOrder}
          currentStore={currentStore}
        />
      </Modal>
    </>
  );
};

export default Users;
