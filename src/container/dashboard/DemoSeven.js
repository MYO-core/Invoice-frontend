import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';

const { getStats } = require('../../utility/services/stats');

function DemoSeven() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 7',
    },
  ];

  useEffect(() => {
    setLoading(true);
    getStats()
      .then((res) => {
        if (res && res.data) {
          setData(res.data);
        } else {
          console.error('Invalid response data:', res);
          setData({});
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Dashboard"
        routes={PageRoutes}
      />

      <main className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic title="Total Stores" value={data?.store_count || 0} valueStyle={{ color: '#3f8600' }} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Total Sales"
                value={data?.total_sales || 0}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix="₹"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic title="Total Users" value={data?.user_count || 0} valueStyle={{ color: '#3f8600' }} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic title="Invoice Generated" value={data?.invoice_count || 0} valueStyle={{ color: '#3f8600' }} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mt-4">
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic title="Total Customers" value={data?.store_count || 0} valueStyle={{ color: '#3f8600' }} />
            </Card>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default DemoSeven;
