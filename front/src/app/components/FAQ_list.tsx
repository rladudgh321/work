import type { TableProps } from 'antd';
import { Button, Table } from 'antd';

interface DataType {
  key: string;
  info: string;
  date: string;
  status: any;
  tool: any;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '접수정보',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: '접수일',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '처리상태',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '관리자도구',
    dataIndex: 'tool',
    key: 'tool',
  },
];

const data: DataType[] = [
  {
    key: '1',
    info: 'John Brown',
    date: new Date().toISOString(),
    status: '접수중',
    tool: <Button>보기</Button>
  },
  {
    key: '2',
    info: 'John Brown',
    date: new Date().toISOString(),
    status: '접수중',
    tool: <Button>보기</Button>
  },
  {
    key: '3',
    info: 'John Brown',
    date: new Date().toISOString(),
    status: '접수중',
    tool: <Button>보기</Button>
  },
  {
    key: '4',
    info: 'John Brown',
    date: new Date().toISOString(),
    status: '접수중',
    tool: <Button>보기</Button>
  },
];

export default function FAQ_list() {
  return (
    <div>
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