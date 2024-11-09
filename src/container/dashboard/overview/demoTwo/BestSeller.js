import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle, TableDefaultStyle } from '../../../styled';

const sellerColumns = [
  {
    title: 'Item Name',
    dataIndex: 'item_name',
    key: 'item_name',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Amount',
    dataIndex: 'sum',
    key: 'sum',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
  },
];

const BestSeller = ({ bestSellar }) => {
  const [tableData, setTableDta] = useState(bestSellar);
  useEffect(() => {
    setTableDta(bestSellar);
  }, []);
  const sellerTab = 'today';

  return (
    <GlobalUtilityStyle className="h-full">
      <Cards
        title="Best Selling Items"
        size="large"
        className="h-full border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
      >
        <TableDefaultStyle>
          <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive">
            <Table columns={sellerColumns} dataSource={bestSellar} pagination={false} />
          </div>
        </TableDefaultStyle>
      </Cards>
    </GlobalUtilityStyle>
  );
};

export default BestSeller;
