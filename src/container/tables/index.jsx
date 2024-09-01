import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { Row, Col, Button, Modal, Input, Popconfirm, Select, Switch, Pagination } from 'antd';
const { Search } = Input;
import { Space, Table, Drawer } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import AddCms from './AddCms';
import AddOrder from './AddOrder';
import Cards1 from './Cards';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { deleteCms, getAllTables } from '../../utility/services/tables';
import { currentStoreId, currentTableData } from '../../globalStore/index';
const Cms = () => {
  const [isAddCms, setisAddCms] = useState(false);
  const [start, setStart] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useState('');
  const [currentStore, setCurrentStore] = useAtom(currentStoreId);
  const [tableData, setTableData] = useAtom(currentTableData);
  const [isAvailable, setIsAvailable] = useState(false);
  const [newRecord, setNewRecord] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const [isEditCms, setIsEditCms] = useState({ isOpen: false, cmsId: '' });
  const [allCms, setAllCms] = useState([]);

  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/tables',
      breadcrumbName: 'Tables',
    },
  ];

  const getAllData = ({ search, type, isAvailable }) => {
    getAllTables({ start, limit: 12, search, type, isAvailable, store_id: currentStore })
      .then((res) => {
        if (res) {
          setAllCms(res?.data?.rows);
          setTotalCount(res?.data?.count);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllData({ search: searchValue, type: statusChange, isAvailable });
  }, [searchValue, statusChange, isAvailable, currentStore, newRecord, start]);

  const onSearch = (value) => {
    setSearchValue(value);
  };
  const handleStatusChange = (value) => {
    setStatusChange(value);
  };
  const geIsActive = (value) => {
    setIsAvailable(!isAvailable);
  };
  const changeStart = (value) => {
    let s = 10 * (value - 1);
    setStart(s);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <PageHeader
        title="Tables"
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
                    <Col xs={24} sm={12} md={6}>
                      <Select
                        style={{
                          width: '100%', // Full width for better responsiveness
                        }}
                        size="medium"
                        placeholder="Status"
                        onChange={handleStatusChange}
                      >
                        <Option value="">All</Option>
                        <Option value="booked">Booked</Option>
                        <Option value="available">Available</Option>
                        <Option value="service">Service</Option>
                        <Option value="preparing">Preparing</Option>
                      </Select>
                    </Col>
                    <Col xs={24} sm={8} md={6}>
                      <Search
                        placeholder="Table number"
                        allowClear
                        enterButton="Search"
                        size="medium"
                        onSearch={onSearch}
                        style={{ width: '100%' }} // Full width for better responsiveness
                      />
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
              <Cards1
                allData={allCms}
                setIsEditCms={setIsEditCms}
                setTableData={setTableData}
                setVisible={setVisible}
              />
              <div className="mt-2 flex justify-end">
                <Pagination
                  // current={1}
                  pageSize={12}
                  total={totalCount} // Total number of items
                  onChange={changeStart}
                  showSizeChanger={false} // Allows changing the number of items per page
                  // pageSizeOptions={['10']} // Page size options
                />
              </div>
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>

      <Modal
        title={`${isAddCms ? 'Add Tables' : 'Edit Table'}`}
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
          newRecord={newRecord}
          setNewRecord={setNewRecord}
        />
      </Modal>
      <Drawer
        title="Add Order"
        placement="right"
        onClose={onClose}
        open={visible}
        width={window.innerWidth < 768 ? 300 : 600}
      >
        <AddOrder
          setVisible={setVisible}
          tableData={tableData}
          visible={visible}
          // setTableData={setTableData}
          currentStore={currentStore}
        />
      </Drawer>
    </>
  );
};

export default Cms;
