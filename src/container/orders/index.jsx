import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Modal, Input, Popconfirm, Select, DatePicker } from 'antd';
import { useAtom } from 'jotai';
import { Space, Table } from 'antd';
import moment from 'moment';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import AddCms from './AddCms';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { deleteCms, getAllCms } from '../../utility/services/orders';
import { currentStoreId } from '../../globalStore/index';
const { Search } = Input;
const { RangePicker } = DatePicker;
const Cms = () => {
  const [isAddCms, setisAddCms] = useState(false);
  const [start, setStart] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isEditCms, setIsEditCms] = useState({ isOpen: false, cmsId: '' });
  const [allCms, setAllCms] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [status, setStatus] = useState('');
  const [dates, setDates] = useState([]);

  const [currentStore, setCurrentStore] = useAtom(currentStoreId);

  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/products',
      breadcrumbName: 'Products',
    },
  ];

  const columns = [
    {
      title: '#Id',
      dataIndex: 'id',
      key: 'id',
      width: 140,
    },
    {
      title: 'Total Price',
      dataIndex: 'total_price',
      key: 'total_price',
      width: 140,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 140,
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      // key: 'createdAt',
      render: (text, record) => moment(record.createdAt).format('DD-MM-YYYY (HH:mm)'),
      width: 140,
    },
    {
      title: 'Table',
      dataIndex: 'table_id',
      key: 'table_id',
      width: 150,
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="small" onClick={() => setIsEditCms({ isOpen: true, cmsId: record?.id })}>
            <EditFilled />
          </Button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              deleteCms({ id: record?._id })
                .then((res) => {
                  console.log('res', res);
                  message.success('Deleted Successfully');
                  getAllData();
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

  const getAllData = () => {
    getAllCms({ start, limit: 10, search: searchValue, status: status, dates, currentStore })
      .then((res) => {
        if (res) {
          setAllCms(res?.data?.rows);
          setTotalCount(res?.data?.count);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllData();
  }, [start, searchValue, status, dates, currentStore]);

  const onSearch = (value) => {
    setSearchValue(value);
  };

  const handleDateRangeChange = (dates, dateStrings) => {
    setDates(dateStrings);
  };
  const setPageSize = (value) => {
    const { current } = value;
    let s = 10 * (current - 1);
    setStart(s);
  };
  const handleStatusChange = (value) => {
    setStatus(value);
  };

  return (
    <>
      <PageHeader
        title="Orders"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3">
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} className="">
            <Cards
              title={
                <div>
                  <Row gutter={[16, 16]} align="middle">
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <Select
                        style={{ width: '100%' }}
                        size="middle"
                        placeholder="Status"
                        onChange={handleStatusChange}
                      >
                        <Option value="">All</Option>
                        <Option value="pending">Pending</Option>
                        <Option value="preparing">Preparing</Option>
                        <Option value="served">Served</Option>
                        <Option value="paid">Paid</Option>
                        <Option value="canceled">Canceled</Option>
                      </Select>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <RangePicker size="middle" onChange={handleDateRangeChange} style={{ width: '100%' }} />
                    </Col>
                  </Row>
                </div>
              }
              moreBtn={
                <Button type="primary" onClick={() => setisAddCms(true)}>
                  Add
                </Button>
              }
            >
              <Table
                size="small"
                scroll={{ x: '100%', y: 'auto' }}
                columns={columns}
                dataSource={allCms}
                pagination={{
                  pageSize: 10, // Number of items per page
                  total: totalCount, // Total number of items
                  showSizeChanger: false,
                }}
                onChange={setPageSize}
              />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>

      <Modal
        title={`${isAddCms ? 'Add Order' : 'Edit Order'}`}
        destroyOnClose
        open={isAddCms || isEditCms.isOpen}
        width={1024}
        // onOk={handleAddCmss}
        footer={false}
        onCancel={() => {
          setisAddCms(false);
          setIsEditCms({ isOpen: false, cmsId: '' });
        }}
      >
        <AddCms
          setisAddCms={setisAddCms}
          getAllData={getAllData}
          isEditCms={isEditCms}
          setIsEditCms={setIsEditCms}
          currentStore={currentStore}
        />
      </Modal>
    </>
  );
};

export default Cms;
