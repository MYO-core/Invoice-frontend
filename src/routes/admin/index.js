import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import withAdminLayout from '../../layout/withAdminLayout';

// const Dashboard = lazy(() => import('../../container/dashboard'));
const DemoEight = lazy(() => import('../../container/dashboard/DemoSeven'));
const Roles = lazy(() => import('../../container/roles'));
const Cms = lazy(() => import('../../container/cms'));
const Orders = lazy(() => import('../../container/orders'));
const Users = lazy(() => import('../../container/usersNew'));
const Status = lazy(() => import('../../container/status'));
const Session = lazy(() => import('../../container/session'));
const Course = lazy(() => import('../../container/course'));
const Subject = lazy(() => import('../../container/subject'));
const Organisation = lazy(() => import('../../container/organisation'));
const Bills = lazy(() => import('../../container/bills'));
const Stores = lazy(() => import('../../container/stores'));
const CustomerNew = lazy(() => import('../../container/customerNew'));
const Teachers = lazy(() => import('../../container/profileNew'));
const NotFound = lazy(() => import('../../container/pages/404'));

const Admin = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <div className="spin flex items-center justify-center bg-white dark:bg-dark h-screen w-full fixed z-[999] ltr:left-0 rtl:right-0 top-0">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/*" element={<DemoEight />} /> //dashboard
        <Route index path="roles/*" element={<Roles />} />
        <Route index path="users/*" element={<Users />} />
        <Route index path="cms/*" element={<Cms />} />
        <Route index path="orders/*" element={<Orders />} />
        <Route index path="status/*" element={<Status />} />
        <Route index path="session/*" element={<Session />} />
        <Route index path="course/*" element={<Course />} />
        <Route index path="subjects/*" element={<Subject />} />
        <Route index path="company/*" element={<Organisation />} />
        <Route index path="bills/*" element={<Bills />} />
        <Route index path="stores/*" element={<Stores />} />
        <Route index path="customers/*" element={<CustomerNew />} />
        <Route index path="teachers/*" element={<Teachers />} />
        <Route index path="profile/*" element={<Teachers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
