import type { TableProps } from 'antd';
import { Button, Table } from 'antd';
import { FaQuora } from "react-icons/fa6";

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
      <div className="flex justify-between">
        <div className="flex">
          <div className="my-auto mr-2"><FaQuora /></div>
          <div>최근 문의내역 현황</div>
        </div>
        <Button>더보기</Button>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}
