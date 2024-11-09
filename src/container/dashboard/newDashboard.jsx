import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Row, Col, Card, Statistic, Layout, Typography } from 'antd';
import { Line, Bar } from '@ant-design/charts';
import { UserOutlined, ShopOutlined, HomeOutlined } from '@ant-design/icons';
import { getRestrauntStats, getHotelStats } from '../../utility/services/dashboard';
import { getTodaysTotal } from '../../utility/services/orders';
const BestSeller = lazy(() => import('./overview/demoTwo/BestSeller'));
const BarChart = lazy(() => import('./overview/demoTwo/BarPlot'));
const BarplotQty = lazy(() => import('./overview/demoTwo/BarplotQty'));
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const Dashboard = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [hotelData, setHotelData] = useState({});
  const [total, setTotal] = useState({});
  const [top5Items, setTop5Items] = useState([]);

  useEffect(() => {
    getRestrauntStats()
      .then((d) => {
        setRestaurantData(d.data);
        setTotal(d.data?.total);
        setTop5Items(d.data?.top5Items);
      })
      .catch((e) => {
        console.log(e);
      });
    getHotelStats()
      .then((d) => {
        setHotelData(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // Safely access hotelData and restaurantData properties
  const hotelCounts =
    hotelData?.counts?.reduce((acc, item) => {
      acc[item.type] = item.value;
      return acc;
    }, {}) || {};

  const restaurantCounts =
    restaurantData?.counts?.reduce((acc, item) => {
      acc[item.type] = item.value;
      return acc;
    }, {}) || {};

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Content style={{ padding: '20px' }}>
          <Row gutter={16}>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Hotel Customers"
                  value={hotelCounts?.customer_count || 0}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: '#3f8600' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Total Rooms"
                  value={hotelCounts?.['total rooms'] || 0}
                  prefix={<HomeOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Available Rooms"
                  value={hotelCounts?.available_rooms || 0}
                  prefix={<ShopOutlined />}
                  valueStyle={{ color: '#cf1322' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Hotel Revenue"
                  value={hotelCounts?.revenue || 0}
                  prefix="₹"
                  valueStyle={{ color: '#faad14' }}
                />
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 16 }}>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Todays Sales"
                  value={total?.total || 0}
                  prefix="₹"
                  valueStyle={{ color: '#faad14' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Total Orders"
                  value={restaurantCounts?.total_orders || 0}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: '#722ed1' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Available Tables"
                  value={restaurantCounts?.available_tables || 0}
                  prefix={<HomeOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Restaurant Revenue"
                  value={restaurantCounts?.revenue || 0}
                  prefix="₹"
                  valueStyle={{ color: '#faad14' }}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: 16 }}>
            <Col xs={24} lg={12}>
              <BestSeller bestSellar={restaurantData.top5Items} />
            </Col>
            <Col xs={24} lg={12}>
              <BarChart data={top5Items} />
              <BarplotQty data={top5Items} />
            </Col>
          </Row>
        </Content>
      </Suspense>
    </Layout>
  );
};

export default Dashboard;
