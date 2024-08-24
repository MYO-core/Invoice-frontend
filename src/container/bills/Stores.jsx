import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { message, Select, Input } from 'antd';
import { getAllOrg as fetchAllStores } from '../../utility/services/stores';
import { currentStoreId } from '../../globalStore/index';

const Users = () => {
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useAtom(currentStoreId);
  const [allRoles, setAllRoles] = useState([]);
  const fetchRolesForFilter = () => {
    fetchAllStores({})
      .then((res) => {
        const data = res?.data?.rows;
        let dd = [{ value: '', label: 'All' }];
        data.map((obj) => {
          dd.push({
            value: obj.id,
            label: obj.name,
          });
        });
        setAllRoles(dd);
      })
      .catch((error) => {
        message.error('Error fetching room suggestions');
      });
  };

  useEffect(() => {
    fetchRolesForFilter();
  }, []);

  const onSearch = (value) => {
    setSearchValue(value);
  };
  const handleStatusChange = (value) => {
    setStatusChange(value);
  };

  return (
    <>
      <Select
        style={{
          width: 150,
        }}
        size="middle"
        placeholder="Stores"
        onChange={handleStatusChange}
        options={allRoles}
      />
    </>
  );
};

export default Users;
