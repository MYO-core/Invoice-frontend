import { Button, Form, Input, InputNumber, Modal, Select, Spin, Upload, message, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { UploadOutlined, EyeOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';
import { addCourse, getSingleCourse, getAllCourse, updateCourse } from '../../utility/services/salaryComponents';
import { uploadImage } from '../../utility/services/upload';

const { Option } = Select;
const { TextArea } = Input;

const AddStatus = ({ setisAddStatus, isEditStatus, setIsEditStatus, getAllStatusList, allRooms }) => {
  const [fractionOptions, setFractionOptions] = useState(allRooms || []);
  const [isPreviewModal, setIsPreviewModal] = useState(false);
  const [previewTitle, setPreviewTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    const body = values;
    if (isEditStatus?.courseId) {
      updateCourse({
        id: isEditStatus?.courseId,
        body: body,
      })
        .then((res) => {
          setIsEditStatus({ isOpen: false, courseId: '' });
          getAllStatusList();
          message.success('Course updated successfully');
        })
        .catch((err) => {
          console.log('err', err);
          message.error('Something Went Wrong');
        });
    } else {
      addCourse({
        body: body,
      })
        ?.then((res) => {
          setisAddStatus(false);
          getAllStatusList();
          message.success('Course added successfully');
        })
        .catch((err) => {
          console.log('err :>> ', err);
          message.error('Something Went Wrong');
        });
    }
  };
  const fetchValue = (value) => {
    if (!value || value === '') {
      setFractionOptions(allRooms);
      return;
    }
    getAllCourse({ start: 0, limit: 10, search: value })
      .then((res) => {
        if (res) {
          setFractionOptions(res?.data?.rows);
          console.log(fractionOptions);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    // populate single Status data
    if (isEditStatus?.courseId) {
      setLoading(true);
      getSingleCourse({ id: isEditStatus?.courseId })
        .then((res) => {
          form.setFieldsValue(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('err', err);
          setLoading(false);
        });
    }
  }, [isEditStatus?.courseId]);

  return (
    <>
      <Spin spinning={loading}>
        <div>
          <Form
            form={form}
            name="Employee"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Type"
              name="type"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Select placeholder="Select type">
                <Select.Option value="EARNING">Earning</Select.Option>
                <Select.Option value="DEDUCTION">Deduction</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Pay Type"
              name="pay_type"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Select placeholder="Select pay type">
                <Select.Option value="FIXED">Fixed</Select.Option>
                <Select.Option value="VARIABLE">Variable</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) => prevValues.pay_type !== currentValues.pay_type}
            >
              {({ getFieldValue }) =>
                getFieldValue('pay_type') === 'VARIABLE' ? (
                  <Form.Item
                    label="When to Pay"
                    name="when_to_pay"
                    rules={[
                      {
                        required: true,
                        message: 'Required when Pay Type is Variable!',
                      },
                    ]}
                  >
                    <Select placeholder="Select when to pay">
                      <Select.Option value="MANUAL">Manual</Select.Option>
                      <Select.Option value="YEARLY">Yearly</Select.Option>
                      <Select.Option value="HALF_YEARLY">Half-Yearly</Select.Option>
                      <Select.Option value="QUARTERLY">Quarterly</Select.Option>
                      <Select.Option value="MONTHLY">Monthly</Select.Option>
                    </Select>
                  </Form.Item>
                ) : null
              }
            </Form.Item>

            <Form.Item label="Taxable" name="is_taxable" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item label="Show on Payslip" name="show_on_payslip" valuePropName="checked">
              <Switch defaultChecked />
            </Form.Item>

            <Form.Item
              label="Calculation Type"
              name="calculation_type"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Select placeholder="Select calculation type">
                <Select.Option value="PERCENTAGE">Percentage</Select.Option>
                <Select.Option value="FLAT_AMOUNT">Flat Amount</Select.Option>
                <Select.Option value="PERCENT_OF_CTC">Percent of CTC</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.calculation_type !== currentValues.calculation_type
              }
            >
              {({ getFieldValue }) =>
                getFieldValue('calculation_type') === 'PERCENTAGE' ? (
                  <Form.Item
                    label="Fraction Of"
                    name="fraction_of"
                    rules={[
                      {
                        required: true,
                        message: 'Required when Calculation Type is Percentage!',
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      onSearch={(value) => fetchValue(value)}
                      placeholder="Select percentage of"
                      filterOption={false}
                    >
                      {fractionOptions.map((option) => (
                        <Select.Option key={option.id} value={option.id}>
                          {option.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                ) : null
              }
            </Form.Item>

            <Form.Item
              label="Pay Amount"
              name="pay_amount"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <InputNumber min={0} />
            </Form.Item>

            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setisAddStatus(false);
                  setIsEditStatus({ isOpen: false, courseId: '' });
                  setFilesData([]);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={uploadLoading}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Spin>

      {/* Image preview modal */}
      <Modal
        width={410}
        title={previewTitle}
        open={isPreviewModal}
        footer={null}
        onCancel={() => {
          setIsPreviewModal(false);
          setPreviewImage('');
        }}
        destroyOnClose
      ></Modal>
    </>
  );
};

export default AddStatus;
