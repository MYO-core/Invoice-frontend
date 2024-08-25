import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { Row, Col, Button, Modal, Input, Popconfirm, Select, Switch } from 'antd';
const { Search } = Input;
import { Space, Table } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import AddCms from './AddCms';
import Cards1 from './Cards';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { deleteCms, getAllCms } from '../../utility/services/tables';
import { currentStoreId } from '../../globalStore/index';

const Cms = () => {
  const [isAddCms, setisAddCms] = useState(false);
  const [start, setStart] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useState('');
  const [currentStore, setCurrentStore] = useAtom(currentStoreId);
  const [isAvailable, setIsAvailable] = useState(false);

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
    getAllCms({ start, limit: 10, search, type, isAvailable, store_id: currentStore })
      .then((res) => {
        if (res) {
          setAllCms(res?.data?.rows);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllData({ search: searchValue, type: statusChange, isAvailable });
  }, [searchValue, statusChange, isAvailable, currentStore]);

  const onSearch = (value) => {
    setSearchValue(value);
  };
  const handleStatusChange = (value) => {
    setStatusChange(value);
  };
  const geIsActive = (value) => {
    setIsAvailable(!isAvailable);
  };

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
              title={
                <div className="flex items-center gap-4">
                  <div>
                    <Select
                      style={{
                        width: 120,
                      }}
                      size="medium"
                      placeholder="Status"
                      onChange={handleStatusChange}
                      // options={allRoles}
                    >
                      <Option value="">All</Option>
                      <Option value="booked">Booked</Option>
                      <Option value="available">Available</Option>
                      <Option value="service">Service</Option>
                      <Option value="preparing">Preparing</Option>
                    </Select>
                  </div>
                  {/* <div>
                    <Search
                      style={{ height: '50%' }}
                      placeholder="Room Number"
                      allowClear
                      enterButton="Search"
                      size="medium"
                      onSearch={onSearch}
                    />
                  </div> */}
                </div>
              }
              moreBtn={
                <Button type="primary" onClick={() => setisAddCms(true)}>
                  Add
                </Button>
              }
            >
              {/* <Table size="small" scroll={{ x: '100%', y: 'auto' }} columns={columns} dataSource={allCms} /> */}
              <Cards1 allData={allCms} setIsEditCms={setIsEditCms} />
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
