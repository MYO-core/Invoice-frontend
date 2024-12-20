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
} from 'antd';
import React, { useEffect, useState } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import OrderPDF from './Invoice';
import { addCms, getSingleCms, updateCms } from '../../utility/services/orders';
import { getAllCms } from '../../utility/services/restroItems';
import { generateHtml, generateKot } from '../../utility/services/generateInvoice';
const { Option } = Select;

const AddRoom = ({ tableData, setVisible, visible, currentStore, allCms, setAllCms }) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [bill, setBill] = useState(false);
  const [search, setSearch] = useState('');
  const [deletedItem, setDeletedItem] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    tableNumber: '',
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  });
  const [form] = Form.useForm();

  const freeTable = () => {
    updateCms({
      id: tableData.current_order,
      body: { free_table: true, table_id: tableData.id.toString() },
    })
      .then((res) => {
        updateTableStatus(null, 'available');
        message.success('Table status updated.');
      })
      .catch((err) => {
        message.error('Something Went Wrong');
        console.log('err :>> ', err);
      });
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
  const generatePdf = async () => {
    try {
      setLoading(true);
      await getOrder(tableData.current_order);
      const string = await generateHtml(orderDetails);
      console.log('===', string);
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      // tempDiv.style.visibility = 'hidden';
      document.body.appendChild(tempDiv);
      tempDiv.innerHTML = string;
      html2canvas(tempDiv).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        const imgWidth = 80;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const pdf = new jsPDF('p', 'mm', [imgWidth, imgHeight]);

        // Add the image (canvas) to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        const pdfOutput = pdf.output('blob');
        const url = URL.createObjectURL(pdfOutput);

        // Print using printJS
        printJS({
          printable: url,
          type: 'pdf',
          documentTitle: 'Order Bill',
        });
        // const printWindow = window.open(url, '_blank');

        // Try to invoke print after the window has loaded
        // printWindow.onload = function () {
        //   printWindow.print();
        // };
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
      await getOrder(tableData.current_order);
      const string = await generateKot(orderDetails);
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      // tempDiv.style.visibility = 'hidden';
      document.body.appendChild(tempDiv);
      tempDiv.innerHTML = string;
      html2canvas(tempDiv).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        const imgWidth = 80;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const pdf = new jsPDF('p', 'mm', [imgWidth, imgHeight]);

        // Add the image (canvas) to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        const pdfOutput = pdf.output('blob');
        const url = URL.createObjectURL(pdfOutput);

        // Print using printJS
        printJS({
          printable: url,
          type: 'pdf',
          documentTitle: 'Order Bill',
        });
        // const printWindow = window.open(url, '_blank');

        // Try to invoke print after the window has loaded
        // printWindow.onload = function () {
        //   printWindow.print();
        // };
        document.body.removeChild(tempDiv);
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      message.warning('Something went wrong.');
      console.log(e);
    }
  };
  const onFinish = (values) => {
    const body = values;
    body.table_id = body.table_id.toString();

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
          // console.log(res);
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
      form.resetFields(); // Reset the form fields
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
    let tax_precent = form.getFieldValue('tax_precent');
    let discount = form.getFieldValue('discount_precent');
    let pt = 0.01 * tax_precent * total;
    total += pt;
    let dp = 0.01 * discount * total;
    total -= dp;
    form.setFieldValue('total_price', total);
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
            autoComplete="off"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Table number"
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
              <Col span={12}>
                <Form.Item label="Customer Name" name="customer_name">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Customer Phone" name="customer_phone">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item
                  label="Total Price"
                  name="total_price"
                  rules={[{ required: true, message: 'Please enter the total price' }]}
                >
                  <InputNumber min={0} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item label="Discount Percent" name="discount_precent" initialValue={0}>
                  <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item label="Gst" name="tax_precent" initialValue={5}>
                  <InputNumber min={0} max={100} precision={2} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={12} sm={12} md={12} lg={8}>
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
              <Col xs={12} sm={12} md={12} lg={8}>
                <Form.Item label="Table Status" name="free_table" valuePropName="checked">
                  <Switch checkedChildren="Available" unCheckedChildren="Booked" />
                </Form.Item>
              </Col>
            </Row>

            <Form.List name="order_items">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <>
                      <hr style={{ margin: '20px 0', borderColor: '#e8e8e8' }} />
                      <Row key={key} gutter={16} align="middle">
                        <Col xs={12} sm={12} md={12} lg={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'item_id']}
                            fieldKey={[fieldKey, 'item_id']}
                            label="Item Code"
                            rules={[{ required: true, message: 'Please select the item ID' }]}
                          >
                            <AutoComplete
                              onSearch={(value) => {
                                setSearch(value);
                              }}
                              onSelect={(value) => {
                                const selectedItem = item.find((data) => data.id === value);
                                form.setFieldsValue({
                                  order_items: {
                                    [name]: {
                                      item_name: selectedItem?.name,
                                      price: selectedItem?.price,
                                      quantity: 1,
                                    },
                                  },
                                });
                                getAllItems();
                              }}
                              options={item.map((data) => ({
                                value: data.id,
                                label: `${data.name} - ${data.item_code}`,
                              }))}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'item_name']}
                            fieldKey={[fieldKey, 'item_name']}
                            label="Item Name"
                            rules={[{ required: true, message: 'Please enter the item name' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col xs={8} sm={12} md={12} lg={4}>
                          <Form.Item
                            {...restField}
                            name={[name, 'quantity']}
                            fieldKey={[fieldKey, 'quantity']}
                            label="Quantity"
                            rules={[{ required: true, message: 'Please enter the quantity' }]}
                          >
                            <InputNumber min={0} style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                          <Form.Item
                            {...restField}
                            name={[name, 'price']}
                            fieldKey={[fieldKey, 'price']}
                            label="Unit Price"
                            rules={[{ required: true, message: 'Please enter the price' }]}
                          >
                            <InputNumber min={0} precision={2} style={{ width: '100%' }} />
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
                            style={{ fontSize: '20px', color: 'red' }}
                          />
                        </Col>
                      </Row>
                    </>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      Add Item
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

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
              <Button onClick={freeTable} type="ghost" htmlType="button" loading={loading}>
                Free Table
              </Button>
            </div>
          </Form>
        </div>
      </Spin>
      <div className="mt-4">{bill && <OrderPDF orderDetails={orderDetails} />}</div>
    </>
  );
};

export default AddRoom;
