import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Spin, message, AutoComplete, Form, Row, Col, InputNumber } from 'antd';
import { useAtom } from 'jotai';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { getAllCms } from '../../utility/services/restroItems';
import './App.css';
import { addCms, getSingleCms, updateCms } from '../../utility/services/orders';
import { currentStoreData } from '../../globalStore';

const AddOrderNew = ({ tableData, setVisible, visible, currentStore, allCms, setAllCms }) => {
  // State management
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1); // Default quantity of 1
  const [itemPrice, setItemPrice] = useState('');
  const [orderData, setOrderData] = useState({});
  const [finalPrice, setFinalPrice] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [previousItems, setPreviousItems] = useState([]);
  const [search, setSearch] = useState('');
  const [storeData, setStoreData] = useAtom(currentStoreData);
  const [form] = Form.useForm();

  const calculateTotal = () => {
    const totalAmount = itemList?.reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2) || 0;
    const gst = form.getFieldValue('tax_precent') || 0;
    const discount = form.getFieldValue('discount_precent') || 0;
    let total = parseFloat(totalAmount) + (totalAmount * gst) / 100;
    total -= (total * discount) / 100;
    setFinalPrice(total);
    form.setFieldValue('total_price', total);
  };
  const addItem = () => {
    if (!itemName || !itemPrice) {
      message.warning('Please fill in all fields');
      return;
    }

    const existingItemIndex = itemList?.findIndex((item) => item.name === itemName);
    const totalPrice = (itemQuantity * parseFloat(itemPrice)).toFixed(2);
    if (existingItemIndex !== -1) {
      // Item already exists in the list, update the quantity and price
      const updatedList = [...itemList];
      updatedList[existingItemIndex].quantity = +updatedList[existingItemIndex].quantity + +itemQuantity; // Increase quantity
      updatedList[existingItemIndex].price = itemPrice; // Update price
      updatedList[existingItemIndex].total = (+updatedList[existingItemIndex].quantity * parseFloat(itemPrice)).toFixed(
        2,
      );
      setItemList(updatedList);
      const totalAmount = updatedList?.reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2) || 0;
      const gst = form.getFieldValue('tax_precent') || 0;
      const discount = form.getFieldValue('discount_precent') || 0;
      let total = parseFloat(totalAmount) + (totalAmount * gst) / 100;
      total -= (total * discount) / 100;
      setFinalPrice(total);
      form.setFieldValue('total_price', total);
    } else {
      // Item doesn't exist, add it as a new entry with a unique ID
      const newItem = {
        id: Date.now(), // Using timestamp as a unique ID
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice,
        total: totalPrice,
      };
      setItemList([...itemList, newItem]);
      const totalAmount =
        [...itemList, newItem]?.reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2) || 0;
      const gst = form.getFieldValue('tax_precent') || 0;
      const discount = form.getFieldValue('discount_precent') || 0;
      let total = parseFloat(totalAmount) + (totalAmount * gst) / 100;
      total -= (total * discount) / 100;
      setFinalPrice(total);
      form.setFieldValue('total_price', total);
    }

    resetFields();
  };

  // to reset fields everytime the modal is closed

  useEffect(() => {
    getAllCms({ search })
      .then((data) => {
        setItem(data.data.rows);
      })
      .catch((e) => {
        message.error('Error While Fetching Items');
      });
  }, [search]);

  useEffect(() => {
    calculateTotal();
  }, [itemList]);

  useEffect(() => {
    form.setFieldsValue({
      table_number: tableData.table_number,
    });

    if (tableData?.current_order) {
      getOrder(tableData.current_order);
    } else {
      resetFormValues({});
    }
  }, [visible]);

  const resetFields = () => {
    setItemName('');
    setItemQuantity(1); // Reset to default quantity
    setItemPrice('');
  };

  const removeItem = (id) => {
    const updatedList = itemList.filter((item) => item.id !== id);
    setItemList(updatedList);
    const totalAmount = updatedList?.reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2) || 0;
    const gst = form.getFieldValue('tax_precent') || 0;
    const discount = form.getFieldValue('discount_precent') || 0;
    let total = parseFloat(totalAmount) + (totalAmount * gst) / 100;
    total -= (total * discount) / 100;
    setFinalPrice(total || 0);
    form.setFieldValue('total_price', total);
  };

  const updateItem = (id, field, value) => {
    const updatedList = [...itemList];
    const itemIndex = updatedList.findIndex((item) => item.id === id);

    if (field === 'quantity' || field === 'price') {
      value = parseFloat(value);
      if (isNaN(value)) {
        message.warning('Please enter a valid number');
        return;
      }
    }

    updatedList[itemIndex][field] = value;

    if (field === 'quantity' || field === 'price') {
      const totalPrice = (updatedList[itemIndex].quantity * updatedList[itemIndex].price).toFixed(2);
      updatedList[itemIndex].total = totalPrice;
    }

    setItemList(updatedList);
  };

  let totalAmount = itemList?.reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2) || 0;

  const columns = [
    {
      title: 'Item',
      dataIndex: 'name',
      render: (text, record) => (
        // <Input
        //   value={record.name}
        //   onBlur={(e) => updateItem(record.id, 'name', e.target.value)}
        //   onChange={(e) => updateItem(record.id, 'name', e.target.value)}
        //   style={{ width: '100%', textAlign: 'center' }}
        // />
        <span>{record.name}</span>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render: (text, record) => (
        <Input
          type="number"
          value={record.quantity}
          onBlur={(e) => updateItem(record.id, 'quantity', e.target.value)}
          onChange={(e) => updateItem(record.id, 'quantity', e.target.value)}
          style={{ width: '100%', textAlign: 'center' }}
        />
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (text, record) => (
        <Input
          type="number"
          value={record.price}
          onBlur={(e) => updateItem(record.id, 'price', e.target.value)}
          onChange={(e) => updateItem(record.id, 'price', e.target.value)}
          style={{ width: '100%', textAlign: 'center' }}
        />
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: (text) => <span>{`₹${text}`}</span>,
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <Button
          icon={<DeleteOutlined />}
          danger
          onClick={() => removeItem(record.id)}
          style={{ border: 'none', background: 'transparent' }}
        />
      ),
    },
  ];

  const handleItemChange = (value) => {
    const selectedItem = item.find((data) => data.id === value);
    if (selectedItem) {
      setItemName(selectedItem.name);
      setItemPrice(selectedItem.price);
    }
  };

  // Handle Enter key for adding item
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };
  const resetFormValues = (data) => {
    form.resetFields();
    form.setFieldsValue({
      table_number: data.tableNumber || tableData.table_number,
      customer_name: data.customer_name,
      customer_phone: data.customer_phone,
    });
    setItemName('');
    setItemQuantity('');
    setItemPrice('');
    setFinalPrice(0);
    setItemList(
      data?.items?.map((item) => {
        return {
          id: item.id,
          name: item.item_name,
          quantity: item.quantity,
          price: item.price,
          total: (item.quantity * item.price).toFixed(2),
        };
      }),
    );
    setOrderData(data);
    setSearch('');
  };

  const getOrder = async (id) => {
    setLoading(true);
    getSingleCms({ id })
      .then((res) => {
        let d = res?.data;
        let ooo = {
          orderNumber: d.id,
          customer_name: d.customer_name,
          customer_phone: d.customer_phone,
          tableNumber: tableData.table_number,
          items: d.order_items,
          subtotal: d.total_price || 0,
          tax: d.tax_precent || 0,
          total: d.total_price || 0,
          organisation: d.Organisation,
          store: d.Store,
          user: d.User,
        };
        setPreviousItems(d.order_items);
        resetFormValues(ooo);
        setLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    // setPreviousItems(d.order_items);  modify here..
    const payload = {
      customer_name: form.getFieldValue('customer_name'),
      customer_phone: form.getFieldValue('customer_phone'),
      total_price: form.getFieldValue('total_price'),
      discount_precent: form.getFieldValue('discount_precent'),
      tax_precent: form.getFieldValue('tax_precent'),
      order_items: itemList.map((item) => ({
        id: item?.id,
        item_name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };
    if (orderData?.orderNumber) {
      console.log('========== submiting ', payload);
      updateCms({ id: orderData.orderNumber, body: payload })
        .then((res) => {
          message.success('Order updated successfully');
          setVisible(false);
        })
        .catch((err) => {
          message.error('Error while updating order');
        });
    } else {
      addCms(payload)
        .then((res) => {
          message.success('Order added successfully');
          setVisible(false);
        })
        .catch((err) => {
          message.error('Error while adding order');
        });
    }
  };

  return (
    <Spin spinning={loading}>
      <div className="order-container">
        <div
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Form form={form} layout="inline">
            <Row gutter={16}>
              <Col xs={12} sm={12} md={8}>
                <Form.Item label="Table" name="table_number">
                  <Input style={{ width: '100%', color: 'black' }} placeholder="Table number" disabled={true} />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} md={8}>
                <Form.Item label="Customer name" name="customer_name">
                  <Input style={{ width: '100%', color: 'black' }} placeholder="Customer name" />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} md={8}>
                <Form.Item label="Customer phone" name="customer_phone">
                  <Input style={{ width: '100%', color: 'black' }} placeholder="Customer phone" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="item-search">
          <AutoComplete
            onSearch={(value) => setSearch(value)}
            value={itemName}
            onChange={handleItemChange}
            options={item.map((data) => ({
              value: data.id,
              label: `${data.name} - ${data.item_code}`,
            }))}
            style={{ width: '30%' }}
          >
            <Input placeholder="Item Name" onKeyPress={handleKeyPress} />
          </AutoComplete>

          <Input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            placeholder="Quantity"
            style={{ width: '30%', marginRight: '10px' }}
            onKeyPress={handleKeyPress}
          />

          <Input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            placeholder="Price"
            style={{ width: '30%', marginRight: '10px' }}
            onKeyPress={handleKeyPress}
          />

          <Button onClick={addItem} type="primary" icon={<PlusOutlined />} style={{ width: '10%', height: '100%' }} />
        </div>

        <Table
          size="small"
          columns={columns}
          dataSource={itemList}
          rowKey={(record) => record.id} // Using the item's id as the row key
          pagination={false}
          className="order-table"
          style={{ marginTop: '20px' }}
        />

        <div className="total-row">
          <span>Sub Total: </span>
          <span>{`₹${totalAmount}`}</span>
        </div>
        <Form
          initialValues={{
            discount_precent: storeData.discount || 0,
            tax_precent: storeData.gst || 0,
            total_price: finalPrice,
          }}
          form={form}
          name="price-form"
        >
          <Row gutter={16}>
            <Col xs={12} sm={12} md={8}>
              <Form.Item
                label="Final Price"
                name="total_price"
                disabled={true}
                onChange={calculateTotal}
                value={finalPrice}
                rules={[{ required: true, message: 'Please enter the total price' }]}
              >
                <InputNumber min={0} precision={2} style={{ width: '100%' }} placeholder="Total price" />
              </Form.Item>
            </Col>
            <Col xs={12} sm={12} md={8}>
              <Form.Item label="Discount Percent" name="discount_precent">
                <InputNumber
                  min={0}
                  max={100}
                  precision={2}
                  onChange={calculateTotal}
                  style={{ width: '100%' }}
                  placeholder="Discount (%)"
                />
              </Form.Item>
            </Col>
            <Col xs={12} sm={12} md={8}>
              <Form.Item label="Tax (GST)" name="tax_precent">
                <InputNumber
                  min={0}
                  max={100}
                  precision={2}
                  style={{ width: '100%' }}
                  onChange={calculateTotal}
                  placeholder="Discount (%)"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <div className="flex justify-end gap-2 mt-5">
          <Button htmlType="button">Cancel</Button>
          <Button htmlType="button">Print</Button>
          <Button htmlType="button">Print Kot</Button>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button type="ghost" htmlType="button">
            Free Table
          </Button>
        </div>
      </div>
    </Spin>
  );
};

export default AddOrderNew;
