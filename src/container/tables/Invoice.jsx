import React, { useRef } from 'react';
import { useAtom } from 'jotai';
import { Button, Typography, Table, Divider } from 'antd';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { currentStoreData } from '../../globalStore/index';
const { Title, Text } = Typography;

const OrderPDF = ({ orderDetails }) => {
  const kotRef = useRef(null);
  const billRef = useRef(null);
  const [storeData, setStoreData] = useAtom(currentStoreData);
  const currentDateTime = new Date().toLocaleString();

  // PDF generation function for KOT (Kitchen Order Ticket)
  const generateKOT = () => {
    const content = kotRef.current;
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', [80, canvas.height * (80 / canvas.width)]);
      pdf.addImage(imgData, 'PNG', 0, 0, 80, canvas.height * (80 / canvas.width));
      pdf.save('kot.pdf');
    });
  };

  // PDF generation function for the Bill
  const generateBill = () => {
    const content = billRef.current;
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', [80, canvas.height * (80 / canvas.width)]);
      pdf.addImage(imgData, 'PNG', 0, 0, 80, canvas.height * (80 / canvas.width));
      pdf.save('order_bill.pdf');
    });
  };

  // Ant Design Table for order items
  const columns = [
    {
      title: 'Item',
      dataIndex: 'item_name',
      key: 'item_name',
    },
    {
      title: 'Qty',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
  ];

  const billColumns = [
    {
      title: 'Item',
      dataIndex: 'item_name',
      key: 'item_name',
    },
    {
      title: 'Qty',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (text) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Total',
      key: 'total',
      align: 'center',
      render: (record) => `$${(record.quantity * record.price).toFixed(2)}`,
    },
  ];

  return (
    <div>
      {/* KOT (Kitchen Order Ticket) */}
      <div
        ref={kotRef}
        style={{
          padding: '10px',
          width: '80mm',
          backgroundColor: '#fff',
          margin: 'auto',
          fontFamily: 'Arial, sans-serif',
          border: '1px solid #000',
        }}
      >
        <Title level={4} style={{ textAlign: 'center', marginBottom: '5px' }}>
          {storeData.name}
        </Title>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px' }}>{storeData.address}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px' }}>Phone: {storeData.phoneNumber}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px', marginBottom: '10px' }}>
          Date: {currentDateTime}
        </Text>

        <Divider dashed />

        <Text style={{ fontSize: '12px' }}>
          <strong>Order #:</strong> {orderDetails.orderNumber}
        </Text>
        <br />
        <Text style={{ fontSize: '12px' }}>
          <strong>Waiter:</strong> {orderDetails.waiterName || 'N/A'}
        </Text>
        <br />
        <Text style={{ fontSize: '12px' }}>
          <strong>Table #:</strong> {orderDetails.tableNumber}
        </Text>

        <Divider dashed />

        {/* Order Items Table */}
        <Table
          dataSource={orderDetails.items}
          columns={columns}
          pagination={false}
          size="small"
          style={{ marginBottom: '10px' }}
        />

        <Divider dashed />

        <Text style={{ textAlign: 'center', display: 'block', fontSize: '12px' }}>Thank You!</Text>
      </div>

      <Button style={{ marginTop: '20px' }} onClick={generateKOT}>
        Download KOT PDF
      </Button>

      {/* Bill */}
      <div
        ref={billRef}
        style={{
          padding: '10px',
          width: '80mm',
          backgroundColor: '#fff',
          margin: 'auto',
          fontFamily: 'Arial, sans-serif',
          border: '1px solid #000',
          marginTop: '40px',
        }}
      >
        <Title level={4} style={{ textAlign: 'center', marginBottom: '5px' }}>
          {storeData.name}
        </Title>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px' }}>{storeData.address}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px' }}>Phone: {storeData.phoneNumber}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px', marginBottom: '10px' }}>
          Date: {currentDateTime}
        </Text>
        <Divider dashed />

        <Text style={{ fontSize: '12px' }}>
          <strong>Order #:</strong> {orderDetails.orderNumber}
        </Text>
        <br />
        <Text style={{ fontSize: '12px' }}>
          <strong>Waiter:</strong> {orderDetails.waiterName || 'N/A'}
        </Text>
        <br />
        <Text style={{ fontSize: '12px' }}>
          <strong>Table #:</strong> {orderDetails.tableNumber}
        </Text>

        <Divider dashed />

        {/* Bill Items Table */}
        <Table
          dataSource={orderDetails.items}
          columns={billColumns}
          pagination={false}
          size="small"
          style={{ marginBottom: '10px' }}
        />

        {/* Bill Total Summary */}
        <Text style={{ fontSize: '12px', marginTop: '10px' }}>
          <strong>Subtotal:</strong> ${orderDetails.subtotal}
        </Text>
        <br />
        <Text style={{ fontSize: '12px' }}>
          <strong>Tax ({orderDetails.tax}%):</strong> ${orderDetails.tax}
        </Text>
        <br />
        <Text style={{ fontSize: '12px' }}>
          <strong>Total:</strong> ${orderDetails.total}
        </Text>

        <Divider dashed />

        <Text style={{ textAlign: 'center', display: 'block', fontSize: '12px', marginTop: '10px' }}>
          Thank you for dining with us!
        </Text>
      </div>

      <Button style={{ marginTop: '20px' }} onClick={generateBill}>
        Download Bill PDF
      </Button>
    </div>
  );
};

export default OrderPDF;
