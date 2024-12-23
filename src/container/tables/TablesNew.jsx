import React, { useState } from 'react';
import { Card, Row, Col, Button, Space, Popconfirm } from 'antd';
import { PlusOutlined, PrinterOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // Import Ant Design styles

// This is our Table component
const TablesComponent = () => {
  // Table data: you can replace this with a dynamic list or API call
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1', status: 'available' },
    { id: 2, name: 'Table 2', status: 'occupied' },
    { id: 3, name: 'Table 3', status: 'available' },
    { id: 4, name: 'Table 4', status: 'occupied' },
    { id: 5, name: 'Table 5', status: 'available' },
    { id: 6, name: 'Table 5', status: 'available' },
    { id: 7, name: 'Table 5', status: 'available' },
    { id: 8, name: 'Table 5', status: 'available' },
    { id: 9, name: 'Table 5', status: 'available' },
    { id: 10, name: 'Table 5', status: 'available' },
  ]);

  // Handle adding an item
  const handleAddItem = (tableId) => {
    console.log(`Add item to table ${tableId}`);
  };

  // Handle printing the receipt
  const handlePrint = (tableId) => {
    console.log(`Print receipt for table ${tableId}`);
  };

  // Handle deleting a table (popconfirm as a confirmation before delete)
  const handleDelete = (tableId) => {
    console.log(`Table ${tableId} deleted`);
    setTables(tables.filter((table) => table.id !== tableId)); // Remove the table from the state
  };

  return (
    <Row gutter={[16, 16]} justify="center">
      {tables.map((table, index) => (
        <Col key={table.id} span={4}>
          <Card
            // title={`Table ${index + 1}`}
            style={{
              width: '100%',
              height: '180px',
              backgroundColor: table.status === 'available' ? '#E0FFE0' : '#FFDDC1',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '40px',
            }}
          >
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <h3>{`Table ${index + 1}`}</h3>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '30px' }}>
              <h3>{table.status === 'available' ? 'Available' : 'Occupied'}</h3>
            </div>
            <Space style={{ justifyContent: 'center' }}>
              <Button
                icon={<PlusOutlined />}
                size="small"
                onClick={() => handleAddItem(table.id)}
                style={{ backgroundColor: '#4CAF50', color: 'white' }}
              />
              <Button
                icon={<PrinterOutlined />}
                size="small"
                onClick={() => handlePrint(table.id)}
                style={{ backgroundColor: '#2196F3', color: 'white' }}
              />
              <Button
                icon={<EditOutlined />}
                size="small"
                onClick={() => console.log(`Edit table ${table.id}`)}
                style={{ backgroundColor: '#FF9800', color: 'white' }}
              />
              <Popconfirm
                title="Are you sure to delete this table?"
                onConfirm={() => handleDelete(table.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button icon={<DeleteOutlined />} size="small" style={{ backgroundColor: '#f44336', color: 'white' }} />
              </Popconfirm>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TablesComponent;
