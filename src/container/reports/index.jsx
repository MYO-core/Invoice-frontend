import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { Table, Row, Col, DatePicker, Tabs } from 'antd';

import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { getAllCms } from '../../utility/services/reports';
import { Cards } from '../../components/cards/frame/cards-frame';
const { RangePicker } = DatePicker;
function GalleryTwo() {
  const [allUsers, setAllUsers] = useState([]);
  const [dates, setDates] = useState([]);
  const [dateString, setDateString] = useState({});
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const columns = [
    {
      title: '#Item Id',
      dataIndex: 'item_id',
      key: 'item_id',
      width: 150,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 150,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 150,
    },
  ];
  // const handleDateRangeChange = (dates, dateStrings) => {
  //   setSelectedRange([moment(dates), moment(dateStrings)]);
  //   // setDates(dateStrings);
  // };
  const getDateRange = (rangeType) => {
    let startDate, endDate;

    if (rangeType === 'today') {
      startDate = moment().startOf('day').format('YYYY-MM-DD');
      endDate = moment().endOf('day').format('YYYY-MM-DD');
    } else if (rangeType === 'this-week') {
      startDate = moment().startOf('week').startOf('day').format('YYYY-MM-DD');
      endDate = moment().endOf('week').endOf('day').format('YYYY-MM-DD');
    } else if (rangeType === 'this-month') {
      startDate = moment().startOf('month').startOf('day').format('YYYY-MM-DD');
      endDate = moment().endOf('month').endOf('day').format('YYYY-MM-DD');
    } else {
      startDate = moment().startOf('day').format('YYYY-MM-DD');
      endDate = moment().endOf('day').format('YYYY-MM-DD');
    }

    return { startTime: startDate, endTime: endDate };
  };
  const handleTabChange = (key) => {
    const range = getDateRange(key);
    setDateString(range);
  };
  const getAllUsers = (dateString) => {
    getAllCms(dateString)
      .then((res) => {
        if (res) {
          setAllUsers(res?.data);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllUsers(dateString);
  }, [dateString]);
  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/reports',
      breadcrumbName: 'Reports',
    },
  ];
  return (
    <>
      <PageHeader
        title="Reports"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />

      <GlobalUtilityStyle className="p-3">
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} className="">
            <Cards
              title={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'space-between',
                  }}
                >
                  <Tabs defaultActiveKey="today" onChange={handleTabChange}>
                    <Tabs.TabPane tab="Today" key="today" />
                    <Tabs.TabPane tab="This Week" key="this-week" />
                    <Tabs.TabPane tab="This Month" key="this-month" />
                    {/* <Tabs.TabPane tab="Custom Range" key="custom">
                      <Row gutter={[16, 16]} align="middle">
                        <Col xs={24} sm={12} md={8} lg={6}>
                          <RangePicker
                            size="middle"
                            value={selectedRange}
                            onChange={handleDateRangeChange}
                            style={{ width: '100%' }}
                          />
                        </Col>
                      </Row>
                    </Tabs.TabPane> */}
                  </Tabs>
                  <ExportButtonPageHeader />
                  {/* <div style={{ marginTop: 20 }}>
                    <p>
                      Selected Range:{' '}
                      {selectedRange[0] && selectedRange[1]
                        ? `${selectedRange[0].format('YYYY-MM-DD')} to ${selectedRange[1].format('YYYY-MM-DD')}`
                        : 'No Range Selected'}
                    </p>
                  </div> */}
                </div>
              }
            >
              <Table
                size="small"
                scroll={{ x: '100%', y: 'auto' }}
                columns={columns}
                dataSource={allUsers}
                pagination={{ pageSize: 30 }}
              />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>
    </>
  );
}

export default GalleryTwo;
