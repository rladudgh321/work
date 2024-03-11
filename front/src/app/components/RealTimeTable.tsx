"use client"

import React from 'react';
import { Button, Checkbox, Form, Input, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  searching_word?: string;
  search_count?: number;
  delete?: any;
}

interface DataType {
  key: string;
  priority: string;
  priority_change: any;
  date: string;
  searching_word: string;
  search_count: number;
  delete: any;
}



export default function RealTimeTable() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '순위',
      dataIndex: 'priority',
      key: 'priority',
      // render: (text) => <Input>{text}</Input>,
    },
    {
      title: '순위변동',
      dataIndex: 'priority_change',
      key: 'priority_change',
    },
    {
      title: '날짜',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '검색어',
      dataIndex: 'searching_word',
      key: 'searching_word',
      render: (text) => <Input value={text} {...register("searching_word")} />
    },
    {
      title: '검색횟수',
      dataIndex: 'search_count',
      key: 'search_count',
      render: (number) => <Input value={number} {...register("search_count")} ></Input>,
    },
    {
      title: '삭제',
      dataIndex: 'delete',
      key: 'delete',
      render: () => <Checkbox {...register("delete")}>삭제</Checkbox>,
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      priority: '1등',
      priority_change: 'new',
      date: '2024-02-24',
      searching_word: '해피해피',
      search_count: 102,
      delete: <Checkbox></Checkbox>
    },
    {
      key: '2',
      priority: '2등',
      priority_change: 'new',
      date: '2024-02-26',
      searching_word: '해피해피day',
      search_count: 51,
      delete: <Checkbox></Checkbox>
    },
    {
      key: '3',
      priority: '3등',
      priority_change: 'new',
      date: '2024-02-27',
      searching_word: '해피해피 night',
      search_count: 21,
      delete: <Checkbox></Checkbox>
    },
    
  ];

  return (
    <>
      <div className="md:max-w-4xl">
        <Form onFinish={handleSubmit(async(data: any) => {
      try {
        console.log({ data });
        toast.success('생성 성공')
      } catch (err) {
        console.error(err);
        toast.error('데이터 저장 오류입니다. 다시 시도해주세요')
      }
    })}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Form>
      </div>
      <div className="flex justify-center"><Button className="btn mt-5" htmlType="submit">저장하기</Button></div>
    </>
  );
} 