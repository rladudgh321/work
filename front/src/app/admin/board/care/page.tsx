"use client"

import type { TableProps } from 'antd';
import { Button, Table } from 'antd';
import Link from 'next/link';
import { PiClipboardTextBold } from "react-icons/pi";

interface DataType {
  key: string;
  name: string;
  group_name: string;
  dbtable_name: string;
  post_count: number;
  post_month_count: number;
  post_today_count: number;
  display_name: string;
  tools: any;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '게시글 이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '그룹명',
    dataIndex: 'group_name',
    key: 'group_name',
  },
  {
    title: 'db테이블명',
    dataIndex: 'dbtable_name',
    key: 'dbtable_name',
  },
  {
    title: '전체글수',
    dataIndex: 'post_count',
    key: 'post_count',
  },
  {
    title: '한달글수',
    dataIndex: 'post_month_count',
    key: 'post_month_count',
  },
  {
    title: '오늘글수',
    dataIndex: 'post_today_count',
    key: 'post_today_count',
  },
  {
    title: '출력이름',
    dataIndex: 'display_name',
    key: 'display_name',
  },
  {
    title: '관리자툴',
    dataIndex: 'tools',
    key: 'tools',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    group_name: 'hi',
    dbtable_name: 'hi',
    post_count: 1,
    post_month_count:1,
    post_today_count:1,
    display_name:'hi',
    tools:<Button.Group>
      <Button>보기</Button>
      <Button>수정</Button>
      <Button>삭제</Button>
      </Button.Group>
  },
  {
    key: '2',
    name: 'John Brown',
    group_name: 'hi',
    dbtable_name: 'hi',
    post_count: 1,
    post_month_count:1,
    post_today_count:1,
    display_name:'hi',
    tools:<Button.Group>
      <Button>보기</Button>
      <Button>수정</Button>
      <Button>삭제</Button>
      </Button.Group>
  },
  {
    key: '3',
    name: 'John Brown',
    group_name: 'hi',
    dbtable_name: 'hi',
    post_count: 1,
    post_month_count:1,
    post_today_count:1,
    display_name:'hi',
    tools:<Button.Group>
      <Button>보기</Button>
      <Button>수정</Button>
      <Button>삭제</Button>
      </Button.Group>
  },

];

export default function BoardCare() {
  return (
    <div className="my-5">
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="my-auto mr-2"><PiClipboardTextBold /></div>
          <div className="my-auto">전체게시판 관리</div>
          <Link href={`/admin/board/register`}><button className='btn w-5'>게시판 등록</button></Link>
        </div>
        <Button>더보기</Button>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

/**
 * 
 * <div className="flex">
        <div>로고</div>
        <div className="text-xl">최근 문의내역 현황</div>
        <Button className="float-right">더보기</Button>
      </div>
      <div className="bg-slate-800 text-slate-100 rounded-md p-4 flex text-center">
        <div className="grow-[2]">접수정보</div>
        <div className="grow-[1]">접수일</div>
        <div className="grow-[1]">처리상태</div>
        <div className="grow-[1]">관리자툴</div>
      </div>
      <div className="p-4 flex">
        <div className="grow-[2] border-slate-400 border-[1px]">건축상담</div>
        <div className="grow-[1] border-slate-400 border-[1px]">2024-02-23</div>
        <div className="grow-[1] border-slate-400 border-[1px]">접수중</div>
        <div className="grow-[1] border-slate-400 border-[1px]">보기</div>
      </div>
    </div>
 * 
 */