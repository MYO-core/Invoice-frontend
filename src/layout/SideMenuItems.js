import {
  UilChartBar,
  UilShoppingCart,
  UilDocumentLayoutLeft,
  UilLayerGroup,
  UilUsersAlt,
  UilMap,
  UilAirplay,
} from '@iconscout/react-unicons';

import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const pathName = window.location.pathname;
  const pathArray = pathName || [];
  const mainPath = pathArray;
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 1 ? [mainPathSplit[1]] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const items = [
    getItem(
      <NavLink onClick={toggleCollapsed} to={'/dashboard'}>
        {t('dashboard')}
      </NavLink>,
      'dashboard',
      !topMenu && <UilChartBar />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'/company'}>
        {t('company')}
      </NavLink>,
      'company',
      !topMenu && <UilMap />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'/stores'}>
        {t('stores')}
      </NavLink>,
      'stores',
      !topMenu && <UilShoppingCart />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'/roles'}>
        {t('roles')}
      </NavLink>,
      'roles',
      !topMenu && <UilAirplay />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'/users'}>
        {t('users')}
      </NavLink>,
      'users',
      !topMenu && <UilUsersAlt />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'/customers'}>
        {t('customers')}
      </NavLink>,
      'customers',
      !topMenu && <UilLayerGroup />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'/invoices'}>
        {t('invoices')}
      </NavLink>,
      'invoices',
      !topMenu && <UilDocumentLayoutLeft />,
    ),
    // getItem(<span>{t(' store setup')}</span>, 'stores', !topMenu && <UilUsersAlt />, [
    //   getItem(
    //     <NavLink onClick={toggleCollapsed} to={'/company'}>
    //       {t('company')}
    //     </NavLink>,
    //     'company',
    //   ),
    //   getItem(
    //     <NavLink onClick={toggleCollapsed} to={'/stores'}>
    //       {t('stores')}
    //     </NavLink>,
    //     'stores',
    //   ),
    //   getItem(
    //     <NavLink onClick={toggleCollapsed} to={'/users'}>
    //       {t('users')}
    //     </NavLink>,
    //     'users',
    //   ),
    // ]),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1
                  ? 'dashboard'
                  : mainPathSplit.length === 2
                  ? mainPathSplit[1]
                  : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? [mainPathSplit[1]] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
