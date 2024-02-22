import { Button } from 'antd';

export default function FAQ_list() {
  return (
    <div>
      <div className="flex">
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
      <div>
        <div>건축상담</div>
        <div>2024-02-23</div>
        <div>접수중</div>
        <div>보기</div>
      </div>
    </div>
  );
}