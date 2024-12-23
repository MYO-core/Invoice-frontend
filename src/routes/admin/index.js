import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import withAdminLayout from '../../layout/withAdminLayout';

// const Dashboard = lazy(() => import('../../container/dashboard'));
const DemoEight = lazy(() => import('../../container/dashboard/newDashboard'));
const Roles = lazy(() => import('../../container/roles'));
const Cms = lazy(() => import('../../container/cms'));
const Bookings = lazy(() => import('../../container/bookings'));
const Users = lazy(() => import('../../container/usersNew'));
const Status = lazy(() => import('../../container/status'));
const Session = lazy(() => import('../../container/session'));
const Course = lazy(() => import('../../container/course'));
const Subject = lazy(() => import('../../container/subject'));
const Organisation = lazy(() => import('../../container/organisation'));
const Bills = lazy(() => import('../../container/bills'));
const Components = lazy(() => import('../../container/salaryComponents'));
const Packages = lazy(() => import('../../container/salaryPackage/index'));
const Rooms = lazy(() => import('../../container/rooms'));
const Tables = lazy(() => import('../../container/tables'));
const Items = lazy(() => import('../../container/items'));
const Orders = lazy(() => import('../../container/orders'));
const Products = lazy(() => import('../../container/products'));
const Stores = lazy(() => import('../../container/stores'));
const CustomerNew = lazy(() => import('../../container/customerNew'));
const Teachers = lazy(() => import('../../container/profileNew'));
const TermsAndConditions = lazy(() => import('../../container/pages/TermsConditions'));
const Jobs = lazy(() => import('../../container/reports/index'));
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
        <Route index path="bookings/*" element={<Bookings />} />
        <Route index path="status/*" element={<Status />} />
        <Route index path="session/*" element={<Session />} />
        <Route index path="course/*" element={<Course />} />
        <Route index path="subjects/*" element={<Subject />} />
        <Route index path="company/*" element={<Organisation />} />
        <Route index path="bills/*" element={<Bills />} />
        <Route index path="products/*" element={<Products />} />
        <Route index path="stores/*" element={<Stores />} />
        <Route index path="customers/*" element={<CustomerNew />} />
        <Route index path="teachers/*" element={<Teachers />} />
        <Route index path="profile/*" element={<Teachers />} />
        <Route index path="components/*" element={<Components />} />
        <Route index path="packages/*" element={<Packages />} />
        <Route index path="rooms/*" element={<Rooms />} />
        <Route index path="tables/*" element={<Tables />} />
        <Route index path="items/*" element={<Items />} />
        <Route index path="orders/*" element={<Orders />} />
        <Route index path="reports/*" element={<Jobs />} />
        <Route index path="terms/*" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
