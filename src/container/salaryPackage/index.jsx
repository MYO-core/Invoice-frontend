import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Table, Modal, Space, Popconfirm, message, Select, Input } from 'antd';
import AddUsers from './AddUsers';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { getAllUser, deleteUser } from '../../utility/services/users';
import { getAllRoles } from '../../utility/services/roles';

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
      path: '/users',
      breadcrumbName: 'Users',
    },
  ];

  const fetchRolesForFilter = () => {
    getAllRoles({})
      .then((res) => {
        const data = res?.data?.data;
        let dd = [{ value: '', label: 'All' }];
        data.map((obj) => {
          dd.push({
            value: obj.id,
            label: obj.name,
          });
        });
        setAllRoles(dd);
      })
      .catch((error) => {
        message.error('Error fetching room suggestions');
        // setLoading(false);
      });
  };

  useEffect(() => {
    fetchRolesForFilter();
  }, []);

  const getAllUsers = () => {
    getAllUser({ search: searchValue, roleId: statusChange })
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
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: "Father's Name",
      dataIndex: 'fatherName',
      key: 'fatherName',
      width: 150,
    },
    {
      title: "Mother's Name",
      dataIndex: 'motherName',
      key: 'otherName',
      width: 150,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 150,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
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
              deleteUser({ id: record?._id })
                .then((res) => {
                  // console.log('res', res);
                  message.success('User Deleted Successfully');
                  getAllUsers();
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

  const onSearch = (value) => {
    setSearchValue(value);
  };
  const handleStatusChange = (value) => {
    setStatusChange(value);
  };

  return (
    <>
      <PageHeader
        title="Users"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3  ">
        <Row gutter={16}>
          <Col>
            <Cards
              title={
                <div className="flex items-center gap-4">
                  <div>
                    <Select
                      style={{
                        width: 120,
                      }}
                      size="middle"
                      placeholder="Role"
                      onChange={handleStatusChange}
                      options={allRoles}
                    />
                  </div>
                  <div>
                    <Search placeholder="search" allowClear enterButton="Search" size="middle" onSearch={onSearch} />
                  </div>
                </div>
              }
              moreBtn={
                <Button type="primary" onClick={() => setIsAddUsers(true)}>
                  Add
                </Button>
              }
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
