import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Table, Space, Popconfirm, Input, Tag, Modal, message, Statistic, Checkbox } from 'antd';
import AddTenant from './AddTenant';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import {
  getTenants,
  getPlatformStats,
  updateTenantStatus,
  deleteTenant,
  updateTenant,
} from '../../utility/services/admin';

const { Search } = Input;
const { TextArea } = Input;

const Tenants = () => {
  const [tenants, setTenants] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [stats, setStats] = useState({});
  const [pauseTarget, setPauseTarget] = useState(null);
  const [pauseReason, setPauseReason] = useState('');
  const [includeDeleted, setIncludeDeleted] = useState(false);
  const [isAddTenant, setIsAddTenant] = useState(false);
  const [editTenant, setEditTenant] = useState(null);

  const PageRoutes = [
    { path: '/', breadcrumbName: 'Dashboard' },
    { path: '/tenants', breadcrumbName: 'Tenants' },
  ];

  const pageSize = 10;

  const fetchTenants = () => {
    setLoading(true);
    getTenants({ start: (page - 1) * pageSize, limit: pageSize, search: searchValue, includeDeleted })
      .then((res) => {
        setTenants(res?.data?.rows || []);
        setTotal(res?.data?.count || 0);
      })
      .catch((err) => console.log('err', err))
      .finally(() => setLoading(false));
  };

  const fetchStats = () => {
    getPlatformStats()
      .then((res) => setStats(res?.data || {}))
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    fetchTenants();
  }, [searchValue, page, includeDeleted]);

  useEffect(() => {
    fetchStats();
  }, []);

  const applyStatusChange = (id, status, reason) => {
    updateTenantStatus({ id, body: { status, reason } })
      .then(() => {
        message.success(status === 'paused' ? 'Subscription paused' : 'Subscription resumed');
        fetchTenants();
        fetchStats();
      })
      .catch((err) => {
        console.log('err', err);
        message.error('Could not update subscription status');
      });
  };

  const handleDelete = (id) => {
    deleteTenant({ id })
      .then(() => {
        message.success('Tenant deleted');
        fetchTenants();
        fetchStats();
      })
      .catch((err) => {
        console.log('err', err);
        message.error('Could not delete tenant');
      });
  };

  const handleRestore = (id) => {
    updateTenant({ id, body: { is_deleted: false } })
      .then(() => {
        message.success('Tenant restored');
        fetchTenants();
        fetchStats();
      })
      .catch((err) => {
        console.log('err', err);
        message.error('Could not restore tenant');
      });
  };

  const columns = [
    {
      title: 'Tenant',
      dataIndex: 'name',
      key: 'name',
      render: (_, data) => (
        <div>
          <div className="font-medium">{data?.name}</div>
          <div className="text-xs text-light">{data?.email}</div>
        </div>
      ),
    },
    {
      title: 'Owner',
      key: 'owner',
      render: (_, data) => (
        <div>
          <div>{data?.owner_name}</div>
          <div className="text-xs text-light">{data?.owner_email}</div>
        </div>
      ),
    },
    {
      title: 'Usage',
      key: 'usage',
      render: (_, data) => (
        <div className="text-xs">
          <div>Users: {data?.user_count ?? 0}</div>
          <div>Invoices: {data?.invoice_count ?? 0}</div>
          <div>Customers: {data?.customer_count ?? 0}</div>
          <div>Stores: {data?.store_count ?? 0}</div>
        </div>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, data) =>
        data?.is_deleted ? (
          <Tag color="default">Deleted</Tag>
        ) : data.status === 'paused' ? (
          <Tag color="red">Paused</Tag>
        ) : (
          <Tag color="green">Active</Tag>
        ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.is_deleted ? (
            <Popconfirm
              title="Restore this tenant?"
              onConfirm={() => handleRestore(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button size="middle">Restore</Button>
            </Popconfirm>
          ) : (
            <>
              <Button size="middle" onClick={() => setEditTenant(record)}>
                Edit
              </Button>
              {record.status === 'paused' ? (
                <Popconfirm
                  title="Resume this tenant's subscription?"
                  onConfirm={() => applyStatusChange(record.id, 'active')}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" size="middle">
                    Resume
                  </Button>
                </Popconfirm>
              ) : (
                <Button danger size="middle" onClick={() => setPauseTarget(record)}>
                  Pause
                </Button>
              )}
              <Popconfirm
                title="Delete this tenant? They will immediately lose access."
                onConfirm={() => handleDelete(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger size="middle">
                  Delete
                </Button>
              </Popconfirm>
            </>
          )}
        </Space>
      ),
      width: 280,
    },
  ];

  const onSearch = (value) => {
    setPage(1);
    setSearchValue(value);
  };

  return (
    <>
      <PageHeader
        title="Tenants"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3">
        <Row gutter={16} className="mb-4">
          <Col sm={6} xs={12}>
            <Cards>
              <Statistic title="Total Tenants" value={stats?.total_tenants || 0} />
            </Cards>
          </Col>
          <Col sm={6} xs={12}>
            <Cards>
              <Statistic title="Active" value={stats?.active_tenants || 0} valueStyle={{ color: '#52c41a' }} />
            </Cards>
          </Col>
          <Col sm={6} xs={12}>
            <Cards>
              <Statistic title="Paused" value={stats?.paused_tenants || 0} valueStyle={{ color: '#f5222d' }} />
            </Cards>
          </Col>
          <Col sm={6} xs={12}>
            <Cards>
              <Statistic title="Total Users" value={stats?.total_users || 0} />
            </Cards>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24}>
            <Cards
              moreBtn={
                <div className="flex items-center gap-4">
                  <Checkbox checked={includeDeleted} onChange={(e) => setIncludeDeleted(e.target.checked)}>
                    Show deleted
                  </Checkbox>
                  <Search placeholder="Search tenants" onSearch={onSearch} allowClear style={{ width: 250 }} />
                  <Button type="primary" onClick={() => setIsAddTenant(true)}>
                    Add Tenant
                  </Button>
                </div>
              }
            >
              <Table
                size="small"
                scroll={{ x: '100%', y: 'auto' }}
                columns={columns}
                dataSource={tenants}
                rowKey="id"
                loading={loading}
                pagination={{
                  current: page,
                  pageSize,
                  total,
                  onChange: (p) => setPage(p),
                }}
              />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>
      <Modal
        title="Pause subscription"
        open={!!pauseTarget}
        onCancel={() => {
          setPauseTarget(null);
          setPauseReason('');
        }}
        onOk={() => {
          applyStatusChange(pauseTarget.id, 'paused', pauseReason);
          setPauseTarget(null);
          setPauseReason('');
        }}
        okText="Pause"
        okButtonProps={{ danger: true }}
      >
        <p>
          This tenant will lose access to the app until you resume them. Pausing <strong>{pauseTarget?.name}</strong>.
        </p>
        <TextArea
          rows={3}
          placeholder="Reason (optional)"
          value={pauseReason}
          onChange={(e) => setPauseReason(e.target.value)}
        />
      </Modal>
      <Modal
        title={editTenant ? 'Edit Tenant' : 'Add Tenant'}
        destroyOnClose
        open={isAddTenant || !!editTenant}
        width={900}
        footer={false}
        onCancel={() => {
          setIsAddTenant(false);
          setEditTenant(null);
        }}
      >
        <AddTenant
          editTenant={editTenant}
          setEditTenant={setEditTenant}
          setIsAddTenant={setIsAddTenant}
          refresh={() => {
            fetchTenants();
            fetchStats();
          }}
        />
      </Modal>
    </>
  );
};

export default Tenants;
