import React, { useState, useCallback } from 'react';
import { Button, Popconfirm, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  menu_title: string;
  menu_property: number;
  menu_register: string;
}




export default function MenuTable() {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '0',
      menu_title: 'Edward King 0',
      menu_property: 32,
      menu_register: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      menu_title: 'Edward King 1',
      menu_property: 32,
      menu_register: 'London, Park Lane no. 1',
    },
  ]);

  const handleDelete = useCallback((key: React.Key) => {
    return () => {
      const newData = dataSource.filter((item) => item.key !== key);
      setDataSource(newData);
    }
  },[dataSource]);
  

  const columns: TableColumnsType<DataType> = [
    {
      title: '메뉴제목',
      dataIndex: 'menu_title',
    },
    {
      title: '메뉴속성',
      dataIndex: 'menu_property',
    },
    {
      title: '등록일',
      dataIndex: 'menu_register',
    },
    {
      title: '관리',
      dataIndex: 'menu_care',
      render:  (_, record: { key: React.Key }) =>
      dataSource.length >= 1 ? (
        <Button.Group>
            <Button>수정</Button>
              <Popconfirm title="Sure to delete?" onConfirm={handleDelete(record.key)}>
                <Button>삭제</Button>
              </Popconfirm>
          </Button.Group>
      ) : null,
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} pagination={false} />
    </>
  );
};