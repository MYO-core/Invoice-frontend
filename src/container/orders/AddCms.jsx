import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Spin, Upload, message, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { addCms, getSingleCms, updateCms } from '../../utility/services/orders';
import { getAllCms } from '../../utility/services/restroItems';
import { getAllTables } from '../../utility/services/tables';
import OrderPDF from '../tables/Invoice';
import { generateHtml } from '../../utility/services/generateInvoice';
const { Option } = Select;

const AddRoom = ({ setisAddCms, getAllData, setIsEditCms, isEditCms, currentStore }) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState('');
  const [bill, setBill] = useState(false);
  const [tableDropdowns, setTableDropdowns] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    tableNumber: '',
    items: [],
    subtotal: 0,
    tax: 0,
    total: 0,
  });

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const body = values;
    body.table_id = body?.table_id.toString();

    if (isEditCms?.cmsId) {
      updateCms({
        id: isEditCms?.cmsId,
        body: body,
      })
        .then((res) => {
          setIsEditCms({ isOpen: false, cmsId: '' });
          getAllData();
          message.success('Data updated successfully');
        })
        .catch((err) => console.log('err', err));
    } else {
      body.store_id = currentStore;
      addCms({
        body: body,
      })
        ?.then((res) => {
          setisAddCms(false);
          getAllData();
          message.success('Data added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
        });
    }
  };

  useEffect(() => {
    // populate single data
    if (isEditCms?.cmsId) {
      setLoading(true);
      getSingleCms({ id: isEditCms?.cmsId })
        .then((res) => {
          form.setFieldsValue(res?.data);
          let d = res?.data;
          let ooo = {
            orderNumber: d.id,
            customer_name: d.customer_name,
            tableNumber: d.table_number,
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
    }
  }, [isEditCms?.cmsId]);

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
    getAllTables({})
      .then((data) => {
        setTableDropdowns(data.data.rows);
      })
      .catch((e) => {
        message.error('Error While Fetching Items');
      });
  }, []);
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
  const generatePdf = async () => {
    try {
      setLoading(true);
      await getOrder(isEditCms?.cmsId);
      const string = await generateHtml(orderDetails);
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      // tempDiv.style.visibility = 'hidden';
      document.body.appendChild(tempDiv);
      tempDiv.innerHTML = string;
      html2canvas(tempDiv).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        const receiptWidth = 80;
        const scaleFactor = receiptWidth / imgWidth;

        const scaledImgHeight = imgHeight * scaleFactor;

        const pdf = new jsPDF('p', 'mm', [receiptWidth, scaledImgHeight]);

        pdf.addImage(imgData, 'PNG', 0, 0, receiptWidth, scaledImgHeight);

        const pdfOutput = pdf.output('blob');
        const url = URL.createObjectURL(pdfOutput);

        const printWindow = window.open(url, '_blank');
        printWindow.onload = function () {
          printWindow.print();
        };

        document.body.removeChild(tempDiv);
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      message.warning('Something went wrong.');
      console.log(e);
    }
  };
  const getOrder = async (id) => {
    setLoading(true);
    getSingleCms({ id })
      .then((res) => {
        form.setFieldsValue(res?.data);
        let d = res?.data;
        let ooo = {
          orderNumber: d.id,
          customer_name: d.customer_name,
          tableNumber: d.table_id,
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
  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form
            name="order"
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onChange={getAllItems}
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
                    {tableDropdowns.map((data) => (
                      <Option value={data.id}>
                        {data.table_number} - {' (' + data.no_of_seats + ' Seater )'}
                      </Option>
                    ))}
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
                <Form.Item label="Tax Percent" name="tax_precent" initialValue={0}>
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
                            <Select
                              showSearch
                              onSearch={(value) => {
                                setSearch(value);
                              }}
                              onChange={(value) => {
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
                            >
                              {item.map((data) => (
                                <Option value={data.id} key={data.id}>
                                  {data.item_code} - {data.name}
                                </Option>
                              ))}
                            </Select>
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
                            <InputNumber min={0} defaultValue={1} style={{ width: '100%' }} />
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
                              remove(name);
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
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
              {/* <Button onClick={freeTable} type="ghost" htmlType="button" loading={loading}>
                Free Table
              </Button> */}
            </div>
          </Form>
        </div>
      </Spin>
      <div className="mt-4">{bill && <OrderPDF orderDetails={orderDetails} />}</div>
    </>
  );
};

export default AddRoom;
