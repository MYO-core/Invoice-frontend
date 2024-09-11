import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { message, Select } from 'antd';
import { getAllOrg as fetchAllStores } from '../../utility/services/stores';
import { currentStoreId, currentStoreData } from '../../globalStore/index';

const Users = () => {
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useAtom(currentStoreId);
  const [storeData, setStoreData] = useAtom(currentStoreData);
  const [allRoles, setAllRoles] = useState([]);
  const [defaultVal, setDefaultVal] = useState(null);

  const fetchRolesForFilter = () => {
    fetchAllStores({})
      .then((res) => {
        const data = res?.data?.rows;
        let dd = [];
        data.forEach((obj, index) => {
          if (index === 0) {
            setDefaultVal(obj.id); // Set the default value to the first item
            setStatusChange(obj.id);
            setStoreData(obj);
          }
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

  const handleStatusChange = (value) => {
    setStatusChange(value);
  };

  return (
    <>
      {defaultVal !== null && (
        <Select
          style={{
            width: 150,
          }}
          size="middle"
          placeholder="Stores"
          onChange={handleStatusChange}
          options={allRoles}
          defaultValue={defaultVal}
        />
      )}
    </>
  );
};

export default Users;
