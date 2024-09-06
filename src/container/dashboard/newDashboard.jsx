import React, { useEffect, useState, Suspense } from 'react';
import { Row, Col, Card, Statistic, Layout, Typography } from 'antd';
import { Line, Bar } from '@ant-design/charts';
import { UserOutlined, ShopOutlined, HomeOutlined } from '@ant-design/icons';
import { getRestrauntStats, getHotelStats } from '../../utility/services/dashboard';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const Dashboard = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [hotelData, setHotelData] = useState({});

  useEffect(() => {
    getRestrauntStats()
      .then((d) => {
        setRestaurantData(d.data);
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

  // Line chart for hotel monthly bookings and income
  const hotelMonthlyData = [
    ...(hotelData?.monthlyBookings?.map((item) => ({
      month: `Month ${item.date_part}`,
      value: item.sum,
      type: 'Bookings',
    })) || []),
    ...(hotelData?.monthlyIncome?.map((item) => ({
      month: `Month ${item.date_part}`,
      value: item.sum,
      type: 'Income',
    })) || []),
  ];

  const hotelMonthlyConfig = {
    data: hotelMonthlyData,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    smooth: true,
    height: 300,
    point: { size: 5, shape: 'circle' },
    animation: {
      appear: {
        animation: 'path-in',
        duration: 500,
      },
    },
    tooltip: {
      showMarkers: true,
      shared: true,
    },
  };

  // Line chart for restaurant monthly orders and income
  const restaurantMonthlyData = [
    ...(restaurantData?.monthlyOrders?.map((item) => ({
      month: `Month ${item.date_part}`,
      value: item.count,
      type: 'Orders',
    })) || []),
    ...(restaurantData?.monthlyIncome?.map((item) => ({
      month: `Month ${item.date_part}`,
      value: item.sum,
      type: 'Income',
    })) || []),
  ];

  const restaurantMonthlyConfig = {
    data: restaurantMonthlyData,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    smooth: true,
    height: 300,
    point: { size: 5, shape: 'diamond' },
    animation: {
      appear: {
        animation: 'path-in',
        duration: 500,
      },
    },
    tooltip: {
      showMarkers: true,
      shared: true,
    },
  };

  function shortenText(text, wordLimit = 2) {
    const words = text.split(' ');

    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }

    return text;
  }
  // Bar chart for hotel room bookings
  const hotelRoomsData =
    hotelData?.maxBookedRooms?.map((item) => ({
      roomType: item.roomType,
      count: parseInt(item.count, 10),
    })) || [];

  const hotelRoomsConfig = {
    data: hotelRoomsData,
    xField: 'roomType',
    yField: 'count',
    seriesField: 'roomType',
    colorField: 'roomType',
    height: 300,
    label: { style: { fill: '#aaa' } },
    tooltip: {
      showMarkers: true,
    },
    animation: {
      appear: {
        animation: 'scale-in-y',
        duration: 500,
      },
    },
  };

  // Bar chart for top 5 products in restaurant
  const topProductsData =
    restaurantData?.top5Products?.map((item) => ({
      name: shortenText(item.name),
      count: parseInt(item.count, 10),
    })) || [];

  const topProductsConfig = {
    data: topProductsData,
    xField: 'name',
    yField: 'count',
    seriesField: 'name',
    colorField: 'name',
    height: 300,
    label: { style: { fill: '#aaa' } },
    tooltip: {
      showMarkers: true,
    },
    animation: {
      appear: {
        animation: 'scale-in-x',
        duration: 500,
      },
    },
  };

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
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
                title="Restaurant Items"
                value={restaurantCounts?.item_count || 0}
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#52c41a' }}
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
            <Card title="Hotel Monthly Bookings and Income">
              <Line {...hotelMonthlyConfig} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="Restaurant Monthly Orders and Income">
              <Line {...restaurantMonthlyConfig} />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col xs={24} lg={12}>
            <Card title="Most Booked Rooms (Hotel)">
              <Bar {...hotelRoomsConfig} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="Top 5 Products (Restaurant)">
              <Bar {...topProductsConfig} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
