import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Table, Modal, Space, Popconfirm, message, Select, Input, Avatar } from 'antd';
import AddUsers from './AddUsers';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { getAllOrg, deleteOrg } from '../../utility/services/organisation';
import getInitials from '../../utility/common';

const { Search } = Input;

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allRoles, setAllRoles] = useState([]);
  const [isAddUsers, setIsAddUsers] = useState(false);
  const [isEditUsers, setIsEditUsers] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useState('');
  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/company',
      breadcrumbName: 'company',
    },
  ];

  const getAllUsers = () => {
    getAllOrg({ search: searchValue, roleId: statusChange })
      .then((res) => {
        if (res) {
          setAllUsers(res?.data?.rows);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllUsers();
  }, [searchValue, statusChange]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (_, data) => {
        return (
          <div className="flex gap-1 items-center">
            <Avatar src={data?.logoUrl}>{getInitials(data?.name)}</Avatar>
            <div>{data?.name}</div>
          </div>
        );
      },
    },
    {
      title: 'Strength',
      dataIndex: 'stregnth',
      key: 'stregnth',
      width: 150,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: 150,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 150,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="middle" onClick={() => setIsEditUsers({ isOpen: true, userId: record?.id })}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this User?"
            onConfirm={() => {
              deleteOrg({ id: record?.id })
                .then((res) => {
                  // console.log('res', res);
                  message.success('Organisation Deleted Successfully');
                  getAllUsers();
                })
                .catch((err) => console.log('err', err));
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger size="middle" disabled>
              Delete
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
        title="Company"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3  ">
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} className="">
            <Cards
              moreBtn={
                <Button type="primary" onClick={() => setIsAddUsers(true)} disabled>
                  Add
                </Button>
              }
              // title="Userss"
              // bUsers={false}
              // size="default"
            >
              <Table size="small" scroll={{ x: '100%', y: 'auto' }} columns={columns} dataSource={allUsers} />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>
      <Modal
        title={isAddUsers ? 'Add Users' : 'Edit Users'}
        destroyOnClose
        open={isAddUsers || isEditUsers.isOpen}
        width={1024}
        // onOk={handleAddCmss}
        footer={false}
        onCancel={() => {
          setIsAddUsers(false);
          setIsEditUsers({ isOpen: false, userId: null });
        }}
      >
        <AddUsers
          setIsAddUsers={setIsAddUsers}
          getAllUsers={getAllUsers}
          isEditUsers={isEditUsers}
          setIsEditUsers={setIsEditUsers}
        />
      </Modal>
    </>
  );
};

export default Users;
