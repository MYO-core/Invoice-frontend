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
  useEffect(() => {
    let sum = 0;
    orderDetails.items.forEach((d) => {
      sum += d.price * d.quantity;
    });
    setSubtotal(sum);
  }, []);
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
        <style>
          {`
                    .custom-row {
                        color: #000 !important; 
                    }
                    .custom-row td {
                        color: #000 !important; 
                    }
                `}
        </style>
        <Title level={5} style={{ marginBottom: '5px' }}>
          {storeData.name}
        </Title>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '14px', color: '#000' }}>
          {storeData.address}
        </Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '14px', color: '#000' }}>
          Phone: {storeData.phoneNumber}
        </Text>
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '14px', marginBottom: '10px', color: '#000' }}>
          GSTIN: {orderDetails?.organisation?.gst}
        </Text>

        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <Text style={{ textAlign: 'left', fontSize: '14px', color: '#000' }}>Name: {orderDetails.customer_name}</Text>
        <Divider style={{ borderColor: '#000', margin: '0', color: '#000' }} />
        <br />
        <Text style={{ textAlign: 'left', display: 'block', fontSize: '14px', color: '#000' }}>
          Date: {currentDateTime}
        </Text>
        <Text style={{ fontSize: '14px', color: '#000' }}>Bill No: {orderDetails.orderNumber}</Text>
        <br />
        <Text style={{ fontSize: '14px', color: '#000' }}>Table: {orderDetails.tableNumber}</Text>

        <Divider style={{ borderColor: '#000' }} />

        <Table
          dataSource={orderDetails.items}
          columns={billColumns}
          pagination={false}
          rowClassName="custom-row td"
          size="small"
          style={{ marginBottom: '10px' }}
        />

        <Text style={{ textAlign: 'right', display: 'block', fontSize: '14px', color: '#000' }}>
          Sub Total {subtotal}
        </Text>

        <Text style={{ textAlign: 'right', display: 'block', fontSize: '14px', color: '#000', marginBottom: '10px' }}>
          gst {orderDetails.tax}% {tax.toFixed(2)}
        </Text>
        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <Text style={{ textAlign: 'right', display: 'block', fontSize: '10px', color: '#000' }}>round off: 0.01</Text>
        <Text style={{ textAlign: 'right', display: 'block', fontSize: '16px', color: '#000', marginBottom: '10px' }}>
          <strong>Grand Total ₹ {orderDetails.total}</strong>
        </Text>
        <Divider style={{ borderColor: '#000', margin: '0' }} />
        <br />
        <Text style={{ textAlign: 'center', display: 'block', fontSize: '14px', marginTop: '10px', color: '#000' }}>
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
