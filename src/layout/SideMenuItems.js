import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UilEllipsisV } from '@iconscout/react-unicons';
import { HomeOutlined, UserOutlined, ShopOutlined, TableOutlined, CalendarOutlined } from '@ant-design/icons'; // Example icons
import PropTypes from 'prop-types';
import { currentUser } from '../utility/services/auth';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();
  const [user, setUser] = useState({});

  const { topMenu } = useSelector((state) => ({
    topMenu: state.ChangeLayoutMode.topMenu,
  }));

  const pathName = window.location.pathname;
  const mainPathSplit = pathName.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 1 ? [mainPathSplit[1]] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys[keys.length - 1]] : keys);
  };

  const onClick = () => {
    // setOpenKeys([]);
  };

  const items = [
    {
      label: (
        <NavLink onClick={toggleCollapsed} to={'/dashboard'} style={{ marginLeft: '-15px' }}>
          <HomeOutlined style={{ marginRight: 8 }} />
          {t('dashboard')}
        </NavLink>
      ),
      key: 'dashboard',
    },
    user.isSuper && {
      label: (
        <>
          <UserOutlined style={{ marginRight: 8 }} />
          {t('Admin')}
        </>
      ),
      key: 'admin',
      children: [
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/company'}>
              {t('company')}
            </NavLink>
          ),
          key: 'company',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/stores'}>
              {t('stores')}
            </NavLink>
          ),
          key: 'stores',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/roles'}>
              {t('roles')}
            </NavLink>
          ),
          key: 'roles',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/users'}>
              {t('users')}
            </NavLink>
          ),
          key: 'users',
        },
      ],
    },
    user.inventory && {
      label: (
        <>
          <ShopOutlined style={{ marginRight: 8 }} />
          {t('Inventory')}
        </>
      ),
      key: 'Store',
      children: [
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/products'}>
              {t('products')}
            </NavLink>
          ),
          key: 'products',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/bills'}>
              {t('billings')}
            </NavLink>
          ),
          key: 'billings',
        },
      ],
    },
    user.hotel && {
      label: (
        <>
          <CalendarOutlined style={{ marginRight: 8 }} />
          {t('Bookings')}
        </>
      ),
      key: 'Book',
      children: [
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/customers'}>
              {t('customers')}
            </NavLink>
          ),
          key: 'customers',
        },

        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/rooms'}>
              {t('rooms')}
            </NavLink>
          ),
          key: 'rooms',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/bookings'}>
              {t('bookings')}
            </NavLink>
          ),
          key: 'bookings',
        },
      ],
    },

    user.restraunt && {
      label: (
        <>
          <TableOutlined style={{ marginRight: 8 }} />
          {t('Restaurant')}
        </>
      ),
      key: 'Restraunt',
      children: [
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/items'}>
              {t('items')}
            </NavLink>
          ),
          key: 'items',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/tables'}>
              {t('tables')}
            </NavLink>
          ),
          key: 'tables',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/orders'}>
              {t('orders')}
            </NavLink>
          ),
          key: 'orders',
        },
        {
          label: (
            <NavLink onClick={toggleCollapsed} to={'/reports'}>
              {t('reports')}
            </NavLink>
          ),
          key: 'reports',
        },
      ],
    },
  ];

  useEffect(() => {
    currentUser().then((res) => {
      const data = res.data;
      setUser(data);
    });
  }, []);
  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      defaultSelectedKeys={[
        mainPathSplit.length === 1 ? 'dashboard' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2],
      ]}
      defaultOpenKeys={!topMenu ? [mainPathSplit[1] || 'dashboard'] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

// MenuItems.propTypes = {
//   toggleCollapsed: PropTypes.func,
// };

export default MenuItems;
