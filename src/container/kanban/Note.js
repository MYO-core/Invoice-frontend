import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { Row, Col, Form, Input, Select, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilAlignLeft from '@iconscout/react-unicons/icons/uil-align-left';
import UilAlignRight from '@iconscout/react-unicons/icons/uil-align-right';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Modal } from '../../components/modals/antd-modals';
import { noteAddData } from '../../redux/note/actionCreator';

const All = lazy(() => import('./overview/all'));
const Favorite = lazy(() => import('./overview/favorite'));
const Personal = lazy(() => import('./overview/personal'));
const Work = lazy(() => import('./overview/work'));
const Social = lazy(() => import('./overview/social'));
const Important = lazy(() => import('./overview/important'));

const { Option } = Select;
function Note() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Note',
    },
  ];
  const { noteData } = useSelector((state) => {
    return {
      noteData: state.Note.data,
    };
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [state, setState] = useState({
    visible: false,
    modalType: 'primary',
    checked: [],
    responsive: 0,
    collapsed: false,
  });

  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleOk = (values) => {
    onCancel();
    const arrayData = [];
    noteData.map((data) => {
      return arrayData.push(data.key);
    });
    const max = Math.max(...arrayData);
    dispatch(
      noteAddData([
        ...noteData,
        {
          ...values,
          key: max + 1,
          time: new Date().getTime(),
          stared: false,
        },
      ]),
    );
    form.resetFields();
  };

  const handleCancel = () => {
    onCancel();
  };

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  const collapseSidebar = () => {
    setState({
      ...state,
      collapsed: false,
    });
  };

  const path = '.';

  const [activeNote, setActiveNote] = useState('all');

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Note"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row className="justify-content-center" gutter={25}>
          <Col xxl={19} xl={17} lg={15} xs={24}>
            <Suspense
              fallback={
                <div className="flex items-center justify-center [&>div]:flex [&>div]:items-center">
                  <Spin />
                </div>
              }
            >
              <Routes>
                <Route path="all" element={<All />} />
                <Route path="favorite" element={<Favorite />} />
                <Route path="personal" element={<Personal />} />
                <Route path="work" element={<Work />} />
                <Route path="social" element={<Social />} />
                <Route path="important" element={<Important />} />
              </Routes>
            </Suspense>
          </Col>
        </Row>
        <Modal type={state.modalType} title={null} visible={state.visible} footer={null} onCancel={handleCancel}>
          <div>
            <Form form={form} name="createProject" onFinish={handleOk}>
              <Form.Item
                rules={[{ required: true, message: 'Please input your note title!' }]}
                name="title"
                label="Title"
                className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              >
                <Input placeholder="Note Title" />
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: 'Please input your note description!' }]}
                name="description"
                label="Description"
                className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              >
                <Input.TextArea rows={4} placeholder="Note Description" />
              </Form.Item>
              <Form.Item
                name="label"
                initialValue="personal"
                label="Note Label"
                className="[&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:h-[50px] [&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector>.ant-select-selection-item]:leading-[50px] [&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:border-normal dark:[&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:text-white60 dark:[&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:border-white10 [&>.ant-form-item-row>div>div>div>.ant-select>.ant-select-selector]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white87"
              >
                <Select style={{ width: '100%' }}>
                  <Option value="personal">Personal</Option>
                  <Option value="work">Work</Option>
                  <Option value="social">Social</Option>
                  <Option value="important">Important</Option>
                </Select>
              </Form.Item>
              <Button
                htmlType="submit"
                size="default"
                type="primary"
                key="submit"
                className="h-11 px-5 text-sm font-semibold"
              >
                Add New Note
              </Button>
            </Form>
          </div>
        </Modal>
      </main>
    </>
  );
}

Note.propTypes = {
  // match: PropTypes.shape(PropTypes.object),
};
export default Note;
