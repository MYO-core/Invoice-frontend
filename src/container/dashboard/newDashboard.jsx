import React from 'react';
import { Row, Col, Card, Statistic, Layout, Typography } from 'antd';
import { Line, Bar } from '@ant-design/charts';
import { UserOutlined, ShopOutlined, HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const Dashboard = ({}) => {
  let restaurantData = {
    counts: [
      {
        value: '12',
        type: 'item_count',
      },
      {
        value: '9',
        type: 'total_orders',
      },
      {
        value: '12',
        type: 'available_tables',
      },
      {
        value: '6217.33',
        type: 'revenue',
      },
    ],
    monthlyOrders: [
      {
        count: '3',
        date_part: 8,
      },
      {
        count: '6',
        date_part: 9,
      },
    ],
    top5Products: [
      {
        name: 'Butter roti',
        count: '3',
      },
      {
        name: 'Chicken do pyaza',
        count: '3',
      },
      {
        name: 'Butter chicken ',
        count: '3',
      },
      {
        name: 'Plain roti ',
        count: '1',
      },
      {
        name: 'chikan do pyaza',
        count: '3',
      },
    ],
    monthlyIncome: [
      {
        sum: '3800.00',
        date_part: 8,
      },
      {
        sum: '2417.33',
        date_part: 9,
      },
    ],
  };
  let hotelData = {
    counts: [
      {
        value: 10,
        type: 'customer_count',
      },
      {
        value: 12,
        type: 'total rooms',
      },
      {
        value: 12,
        type: 'available_rooms',
      },
      {
        value: 231200,
        type: 'revenue',
      },
    ],
    monthlyBokings: [
      {
        sum: 231200,
        date_part: 8,
      },
    ],
    monthlyIncome: [
      {
        sum: 231200,
        date_part: 8,
      },
    ],
    roomBookedMonthly: [
      {
        count: '2',
        date_part: 8,
      },
    ],
    maxBookedRoms: [
      {
        roomType: 'double',
        count: '1',
      },
      {
        roomType: 'single',
        count: '4',
      },
    ],
    customerVisitMonthly: [
      {
        sum: '32',
        date_part: 8,
      },
    ],
  };
  // Extract data for easy access
  const hotelCounts = hotelData.counts.reduce((acc, item) => {
    acc[item.type] = item.value;
    return acc;
  }, {});

  const restaurantCounts = restaurantData.counts.reduce((acc, item) => {
    acc[item.type] = item.value;
    return acc;
  }, {});

  // Line chart for hotel monthly bookings and income
  const hotelMonthlyData = hotelData.monthlyBokings
    .map((item) => ({
      month: `Month ${item.date_part}`,
      value: item.sum,
      type: 'Bookings',
    }))
    .concat(
      hotelData.monthlyIncome.map((item) => ({
        month: `Month ${item.date_part}`,
        value: item.sum,
        type: 'Income',
      })),
    );

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
  const restaurantMonthlyData = restaurantData.monthlyOrders
    .map((item) => ({
      month: `Month ${item.date_part}`,
      value: item.count,
      type: 'Orders',
    }))
    .concat(
      restaurantData.monthlyIncome.map((item) => ({
        month: `Month ${item.date_part}`,
        value: item.sum,
        type: 'Income',
      })),
    );

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

  // Bar chart for hotel room bookings
  const hotelRoomsData = hotelData.maxBookedRoms.map((item) => ({
    roomType: item.roomType,
    count: parseInt(item.count, 10),
  }));

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
  const topProductsData = restaurantData.top5Products.map((item) => ({
    name: item.name,
    count: parseInt(item.count, 10),
  }));

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
      {/* <Header style={{ backgroundColor: '#001529', padding: '16px' }}></Header> */}
      <Content style={{ padding: '20px' }}>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Hotel Customers"
                value={hotelCounts.customer_count}
                prefix={<UserOutlined />}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Total Rooms"
                value={hotelCounts['total rooms']}
                prefix={<HomeOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Available Rooms"
                value={hotelCounts.available_rooms}
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Hotel Revenue"
                value={hotelCounts.revenue}
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
                value={restaurantCounts.item_count}
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Total Orders"
                value={restaurantCounts.total_orders}
                prefix={<UserOutlined />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Available Tables"
                value={restaurantCounts.available_tables}
                prefix={<HomeOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Restaurant Revenue"
                value={restaurantCounts.revenue}
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
