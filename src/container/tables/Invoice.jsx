import React, { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { Button, Typography, Table, Divider, message } from 'antd';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import printJS from 'print-js';
import { currentStoreData } from '../../globalStore/index';
import './invoice.css';
const { Title, Text } = Typography;

const OrderPDF = ({ orderDetails }) => {
  const kotRef = useRef(null);
  const billRef = useRef(null);
  const [storeData, setStoreData] = useAtom(currentStoreData);
  const currentDateTime = new Date().toLocaleString();
  const [tax, setTax] = useState(Number(orderDetails.tax) * 0.01 * Number(orderDetails.total));
  const [subtotal, setSubtotal] = useState(0);
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
  useEffect(() => {
    let sum = 0;
    orderDetails.items.forEach((d) => {
      sum += d.price * d.quantity;
    });
    setSubtotal(sum);
  }, []);
  // PDF generation function for the Bill
  // const generateBill = () => {
  //   const content = billRef.current;
  //   html2canvas(content).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', [80, canvas.height * (80 / canvas.width)]);
  //     pdf.addImage(imgData, 'PNG', 0, 0, 80, canvas.height * (80 / canvas.width));
  //     pdf.save('order_bill.pdf');
  //   });
  // };
  const generateBill = () => {
    try {
      const content = billRef.current;
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', [80, canvas.height * (80 / canvas.width)]);
        pdf.addImage(imgData, 'PNG', 0, 0, 80, canvas.height * (80 / canvas.width));
        const pdfOutput = pdf.output('blob');
        const url = URL.createObjectURL(pdfOutput);
        printJS({
          printable: url,
          type: 'pdf',
          documentTitle: 'Order Bill',
        });
      });
    } catch (e) {
      message.warning('Error While Printing Bill');
    }
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
      render: (text) => `${text.toFixed(2)}`,
    },
    {
      title: 'Amount',
      key: 'total',
      align: 'center',
      render: (record) => `${(record.quantity * record.price).toFixed(2)}`,
    },
  ];

  return (
    <div>
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
        <Title level={5} style={{ marginBottom: '5px' }}>
          {storeData.name}
        </Title>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '12px' }}>{storeData.address}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px' }}>Phone: {storeData.phoneNumber}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '12px', marginBottom: '10px' }}>
          GSTIN: {orderDetails?.organisation?.gst}
        </Text>

        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <Text style={{ textAlign: 'left', fontSize: '12px' }}>Name: {orderDetails.customer_name}</Text>
        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <br />
        <Text style={{ textAlign: 'left', display: 'block', fontSize: '12px' }}>Date: {currentDateTime}</Text>
        <Text style={{ fontSize: '12px' }}>Bill No: {orderDetails.orderNumber}</Text>
        <br />
        <Text style={{ fontSize: '12px' }}>Table: {orderDetails.tableNumber}</Text>

        <Divider style={{ borderColor: '#000' }} />

        <Table
          dataSource={orderDetails.items}
          columns={columns}
          pagination={false}
          size="small"
          style={{ marginBottom: '10px' }}
        />

        <Divider style={{ borderColor: '#000' }} />

        <Text style={{ textAlign: 'center', display: 'block', fontSize: '12px' }}>Thank You Visit Again</Text>
      </div>

      <Button style={{ marginTop: '20px' }} onClick={generateKOT}>
        Print KOT
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
        <Title level={5} style={{ marginBottom: '5px' }}>
          {storeData.name}
        </Title>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '12px' }}>{storeData.address}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '10px' }}>Phone: {storeData.phoneNumber}</Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '12px', marginBottom: '10px' }}>
          GSTIN: {orderDetails?.organisation?.gst}
        </Text>

        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <Text style={{ textAlign: 'left', fontSize: '12px' }}>Name: {orderDetails.customer_name}</Text>
        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <br />
        <Text style={{ textAlign: 'left', display: 'block', fontSize: '12px' }}>Date: {currentDateTime}</Text>
        <Text style={{ fontSize: '12px' }}>Bill No: {orderDetails.orderNumber}</Text>
        <br />
        <Text style={{ fontSize: '12px' }}>Table: {orderDetails.tableNumber}</Text>

        <Divider style={{ borderColor: '#000' }} />

        {/* Bill Items Table */}
        <Table
          dataSource={orderDetails.items}
          columns={billColumns}
          pagination={false}
          rowClassName="custom-row"
          size="small"
          style={{ marginBottom: '10px' }}
        />

        <Text style={{ textAlign: 'right', display: 'block', fontSize: '14px' }}>
          <strong>Sub Total </strong> {subtotal}
        </Text>

        <Text style={{ textAlign: 'right', display: 'block', fontSize: '14px' }}>
          <strong>gst </strong> {orderDetails.tax}% {tax.toFixed(2)}
        </Text>
        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <Text style={{ textAlign: 'right', display: 'block', fontSize: '10px' }}>round off: 0.01</Text>
        <Text style={{ textAlign: 'right', display: 'block', fontSize: '16px' }}>
          <strong>Grand Total ₹ {orderDetails.total}</strong>
        </Text>
        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <br />
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '14px', marginTop: '10px' }}>
          Thank You Visit Again...
        </Text>
      </div>

      <Button style={{ marginTop: '20px' }} onClick={generateBill}>
        Download Bill
      </Button>
    </div>
  );
};

export default OrderPDF;
