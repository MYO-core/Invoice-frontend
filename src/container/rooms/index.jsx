import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Modal, Input, Popconfirm } from 'antd';

import { Space, Table } from 'antd';
import AddCms from './AddCms';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { deleteCms, getAllCms } from '../../utility/services/rooms';

const Cms = () => {
  const [isAddCms, setisAddCms] = useState(false);
  const [start, setStart] = useState(0);

  const [isEditCms, setIsEditCms] = useState({ isOpen: false, cmsId: '' });
  const [allCms, setAllCms] = useState([]);

  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/rooms',
      breadcrumbName: 'Rooms',
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
      title: 'roomNumber',
      dataIndex: 'roomNumber',
      key: 'roomNumber',
      width: 140,
    },
    {
      title: 'roomType',
      dataIndex: 'roomType',
      key: 'roomType',
      width: 150,
    },
    {
      title: 'pricePerNight',
      dataIndex: 'pricePerNight',
      key: 'pricePerNight',
      width: 150,
    },
    {
      title: 'Available',
      key: 'isAvailable',
      width: 150,
      render: (_, record) => (
        <span style={{ color: record.isAvailable ? 'green' : 'red' }}>
          {record.isAvailable ? 'Available' : 'Not Available'}
        </span>
      ),
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="middle" onClick={() => setIsEditCms({ isOpen: true, cmsId: record?.id })}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this Room?"
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
            <Button danger size="middle">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: 150,
    },
  ];

  const getAllData = () => {
    getAllCms({ start, limit: 10 })
      .then((res) => {
        if (res) {
          setAllCms(res?.data?.rows);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <PageHeader
        title="Rooms"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3">
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} className="">
            <Cards
              moreBtn={
                <Button type="primary" onClick={() => setisAddCms(true)}>
                  Add
                </Button>
              }
              border={false}
              size="default"
            >
              <Table size="small" scroll={{ x: '100%', y: 'auto' }} columns={columns} dataSource={allCms} />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>

      <Modal
        title={`${isAddCms ? 'Add' : 'Edit'}`}
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
        <AddCms setisAddCms={setisAddCms} getAllData={getAllData} isEditCms={isEditCms} setIsEditCms={setIsEditCms} />
      </Modal>
    </>
  );
};

export default Cms;
