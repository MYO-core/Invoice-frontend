import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Spin,
  Upload,
  message,
  Switch,
  AutoComplete,
  Card,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { MinusCircleOutlined, PlusCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import OrderPDF from './Invoice';
import { addCms, getSingleCms, updateCms } from '../../utility/services/orders';
import { getAllCms } from '../../utility/services/restroItems';
import { generateHtml, generateKot } from '../../utility/services/generateInvoice';
import { currentStoreData } from '../../globalStore';
const { Option } = Select;

const AddRoom = ({ tableData, setVisible, visible, currentStore, allCms, setAllCms }) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [bill, setBill] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [search, setSearch] = useState('');
  const [deletedItem, setDeletedItem] = useState([]);
  const [storeData, setStoreData] = useAtom(currentStoreData);
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    tableNumber: '',
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  });
  const [form] = Form.useForm();

  const generatePdf = async () => {
    try {
      setLoading(true);
      if (!tableData.current_order) {
        message.warning('Please save the order first');
        setLoading(false);
        return;
      }
      await getOrder(tableData.current_order);
      const string = await generateHtml(orderDetails);
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      document.body.appendChild(tempDiv);
      tempDiv.innerHTML = string;
      html2canvas(tempDiv).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 80;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const pdf = new jsPDF('p', 'mm', [imgWidth, imgHeight]);

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        const pdfOutput = pdf.output('blob');
        const url = URL.createObjectURL(pdfOutput);

        printJS({
          printable: url,
          type: 'pdf',
          documentTitle: 'Order Bill',
        });
        document.body.removeChild(tempDiv);
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      message.warning('Something went wrong.');
      console.log(e);
    }
  };

  const generateKotPdf = async () => {
    try {
      setLoading(true);
      if (!tableData.current_order) {
        message.warning('Please save the order first');
        setLoading(false);
        return;
      }

      await getOrder(tableData.current_order);
      const string = await generateKot(orderDetails);
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      document.body.appendChild(tempDiv);
      tempDiv.innerHTML = string;
      html2canvas(tempDiv).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 80;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const pdf = new jsPDF('p', 'mm', [imgWidth, imgHeight]);

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        const pdfOutput = pdf.output('blob');
        const url = URL.createObjectURL(pdfOutput);

        printJS({
          printable: url,
          type: 'pdf',
          documentTitle: 'Order Bill',
        });
        document.body.removeChild(tempDiv);
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      message.warning('Something went wrong.');
      console.log(e);
    }
  };
  const updateTableStatus = (orderId, status) => {
    let dd = allCms.map((d) => {
      if (d.id === tableData.id) {
        d.status = status;
        d.current_order = orderId;
        return d;
      }
      return d;
    });
    setAllCms(dd);
  };

  const onFinish = (values) => {
    const body = values;
    body.table_id = body.table_id.toString();
    delete body.select_item;
    delete body.select_item_name;
    delete body.select_item_price;
    delete body.select_item_quantity;
    if (tableData.current_order) {
      body.order_items = [...body.order_items, ...deletedItem];
      updateCms({
        id: tableData.current_order,
        body: body,
      })
        .then((res) => {
          let status = body.status === 'paid' ? 'available' : 'booked';
          let orderId = body.status === 'paid' ? null : tableData.current_order;
          updateTableStatus(orderId, status);
          message.success('Data updated successfully');
        })
        .catch((err) => {
          message.error('Something Went Wrong');
          console.log('err :>> ', err);
        });
    } else {
      body.store_id = currentStore;
      addCms({
        body: body,
      })
        ?.then((res) => {
          let orderId = body.status === 'paid' ? null : res?.data?.id;
          let status = body.status === 'paid' ? 'available' : 'booked';
          updateTableStatus(orderId, status);
          message.success('Data added successfully');
          setVisible(false);
        })
        .catch((err) => {
          message.error('Something Went Wrong');
          console.log('err :>> ', err);
        });
    }
  };

  useEffect(() => {
    getAllCms({ search })
      .then((data) => {
        setItem(data.data.rows);
      })
      .catch((e) => {
        message.error('Error While Fetching Items');
      });
  }, [form, search]);

  useEffect(() => {
    setDeletedItem([]);
    setBill(false);
    setOrderDetails({
      orderNumber: '',
      tableNumber: '',
      items: [],
      subtotal: 0,
      tax: 0,
      total: 0,
    });
  }, [visible]);

  const getOrder = async (id) => {
    setLoading(true);
    getSingleCms({ id })
      .then((res) => {
        form.setFieldsValue(res?.data);
        form.setFieldValue('tax_precent', res?.data?.tax_precent);
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
        setOrderDetails(ooo);
        setLoading(false);
      })
      .catch((err) => {
        message.error(err?.data?.message || 'Something Went Wrong');
        console.log('err', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (visible) {
      form.resetFields();
      form.setFieldsValue({
        table_id: tableData.id,
      });
      if (tableData.current_order) {
        getOrder(tableData.current_order);
      }
    }
  }, [form, visible]);

  const getAllItems = () => {
    let data = form.getFieldsValue(['order_items']);
    let total = 0;
    data?.order_items?.map((d) => {
      let t = Number(d?.price) * Number(d?.quantity);
      total += t;
    });

    const formData = form.getFieldsValue();
    const { tax_precent, discount_precent } = formData;
    let pt = 0.01 * tax_precent * total;
    total += pt;
    let dp = 0.01 * discount_precent * total;
    total -= dp;
    form.setFieldValue('total_price', total);
  };

  const handleAddItem = () => {
    const value = form.getFieldValue('select_item');
    const quantity = form.getFieldValue('select_item_quantity');
    const selectedItem = item.find((data) => data.id === value);
    if (selectedItem) {
      const orderItems = form.getFieldsValue(['order_items']).order_items || [];
      const existingItemIndex = orderItems.findIndex((orderItem) => orderItem.item_id === selectedItem.id);

      if (existingItemIndex !== -1) {
        orderItems[existingItemIndex].quantity += quantity || 1;
      } else {
        orderItems.push({
          item_id: selectedItem.id,
          item_name: selectedItem.name,
          price: selectedItem.price,
          quantity: quantity || 1,
        });
      }

      form.setFieldsValue({
        order_items: [...orderItems],
      });
      form.setFieldsValue({
        select_item_name: null,
        select_item_price: null,
        select_item_quantity: null,
        select_item: null,
      });
      getAllItems();
    }
  };
  const addNewItem = (e) => {
    const selectedItem = item.find((data) => data.id === e);
    form.setFieldsValue({
      select_item_name: selectedItem.name,
      select_item_price: selectedItem.price,
      select_item_quantity: 1,
    });
  };
  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form
            name="order"
            form={form}
            layout="vertical"
            onChange={getAllItems}
            onFinish={onFinish}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddItem;
              }
            }}
            autoComplete="off"
          >
            {/* Customer Info Section */}
            <div style={{ padding: 0 }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="Table"
                    name="table_id"
                    rules={[{ required: true, message: 'Please select the table ID' }]}
                  >
                    <Select>
                      <Option value={tableData.id}>
                        {tableData.table_number} - {' (' + tableData.no_of_seats + ' Seater )'}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Customer Name" name="customer_name">
                    <Input placeholder="Enter customer name" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Customer Phone" name="customer_phone">
                    <Input placeholder="Enter phone number" />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            {/* Item Selection AutoComplete */}
            <div>
              <Row
                gutter={16}
                align="middle"
                onKeyDown={(e) => {
                  console.log(e.key);
                  if (e.key === 'Enter') {
                    handleAddItem();
                  }
                }}
              >
                <Col xs={12} sm={12} md={7}>
                  <Form.Item label="Select Item" name="select_item">
                    <AutoComplete
                      onSearch={(value) => setSearch(value)}
                      onSelect={addNewItem}
                      options={item.map((data) => ({
                        value: data.id,
                        label: `${data.name} - ${data.item_code}`,
                      }))}
                    />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={7}>
                  <Form.Item label="Name" name="select_item_name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <Form.Item label="Quantity" name="select_item_quantity">
                    <InputNumber
                      min={0}
                      precision={0}
                      defaultValue={1}
                      style={{ width: '100%' }}
                      placeholder="Quantity"
                    />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <Form.Item label="Price" name="select_item_price">
                    <InputNumber min={0} precision={0} defaultValue={1} style={{ width: '100%' }} placeholder="Price" />
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <PlusCircleOutlined
                    style={{ fontSize: '30px', marginTop: '25px', color: 'green' }}
                    onClick={handleAddItem}
                  />
                </Col>
              </Row>
            </div>

            {/* Items Section */}
            <div>
              <div style={{ marginBottom: '10px', color: 'black' }}>
                <Row gutter={8} align="middle">
                  {' '}
                  {/* Reduced gutter space */}
                  <Col xs={12} sm={12} md={4}>
                    <span>Item Code</span>
                  </Col>
                  <Col xs={12} sm={12} md={10}>
                    <span>Item Name</span>
                  </Col>
                  <Col xs={8} sm={12} md={4}>
                    <span>Quantity</span>
                  </Col>
                  <Col xs={12} sm={12} md={4}>
                    <span>Unit Price</span>
                  </Col>
                  <Col span={2}>
                    <span>Action</span>
                  </Col>
                </Row>
                <hr style={{ borderColor: '#e8e8e8', marginTop: '10px' }} /> {/* Reduced space after hr */}
              </div>
              <Form.List name="order_items">
                {(fields, { remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <div key={key}>
                        <Row gutter={16} align="middle">
                          <Col xs={12} sm={12} md={4}>
                            <Form.Item
                              {...restField}
                              name={[name, 'item_id']}
                              fieldKey={[fieldKey, 'item_id']}
                              // label="Item Code"
                              rules={[{ required: true, message: 'Please select items' }]}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col xs={12} sm={12} md={10}>
                            <Form.Item
                              {...restField}
                              name={[name, 'item_name']}
                              fieldKey={[fieldKey, 'item_name']}
                              // label="Item Name"
                              rules={[{ required: true, message: 'Please enter the item name' }]}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col xs={8} sm={12} md={4}>
                            <Form.Item
                              {...restField}
                              name={[name, 'quantity']}
                              fieldKey={[fieldKey, 'quantity']}
                              // label="Quantity"
                              rules={[{ required: true, message: 'Please enter the quantity' }]}
                            >
                              <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                          </Col>
                          <Col xs={12} sm={12} md={4}>
                            <Form.Item
                              {...restField}
                              name={[name, 'price']}
                              fieldKey={[fieldKey, 'price']}
                              // label="Unit Price"
                              rules={[{ required: true, message: 'Please enter the price' }]}
                            >
                              <InputNumber min={0} precision={2} style={{ width: '100%' }} disabled />
                            </Form.Item>
                          </Col>
                          <Col span={2}>
                            <MinusCircleOutlined
                              onClick={() => {
                                const itemToBeDeleted = form.getFieldValue('order_items')[name];
                                remove(name);
                                if (tableData.current_order) {
                                  let dd = deletedItem;
                                  dd.push({ ...itemToBeDeleted, deleted: true });
                                  setDeletedItem(dd);
                                }
                                getAllItems();
                              }}
                              style={{ fontSize: '30px', marginTop: '0px', color: 'red' }}
                            />
                          </Col>
                        </Row>
                        {/* <hr style={{ margin: '20px 0', borderColor: '#e8e8e8' }} /> */}
                      </div>
                    ))}
                  </>
                )}
              </Form.List>
            </div>

            <div>
              <Row gutter={16}>
                <Col xs={12} sm={12} md={8}>
                  <Form.Item
                    label="Total Price"
                    name="total_price"
                    rules={[{ required: true, message: 'Please enter the total price' }]}
                  >
                    <InputNumber min={0} precision={2} style={{ width: '100%' }} placeholder="Total price" />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={8}>
                  <Form.Item label="Discount Percent" name="discount_precent" initialValue={storeData.discount || 0}>
                    <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} placeholder="Discount (%)" />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={8}>
                  <Form.Item label="GST" name="tax_precent" initialValue={storeData.gst || 0}>
                    <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} placeholder="GST (%)" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={12} sm={12} md={8}>
                  <Form.Item label="Order Status" name="status" initialValue="pending">
                    <Select>
                      <Option value="pending">Pending</Option>
                      <Option value="preparing">Preparing</Option>
                      <Option value="served">Served</Option>
                      <Option value="paid">Paid</Option>
                      <Option value="canceled">Canceled</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={16} style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <div style={{ textAlign: 'left' }}>
                    <InfoCircleOutlined style={{ fontSize: '18px', color: '#000', marginRight: '4px' }} />
                    <a style={{ color: '#000' }}>Tip: Change the status to 'Paid' to free the table..</a>
                  </div>
                </Col>
              </Row>

              <div className="flex justify-end gap-2 mt-5">
                <Button
                  htmlType="button"
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={generatePdf} htmlType="button">
                  Print
                </Button>
                <Button onClick={generateKotPdf} htmlType="button">
                  Print Kot
                </Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Spin>
    </>
  );
};

export default AddRoom;
