'use client'

import { Button } from 'antd';

export default function Basic_info() {
  return (
    <>
      <div className="mt-4 md:max-w-2xl mx-auto">
        <div className="flex bg-slate-800 text-slate-100 rounded-md p-4">
          <div className="basis-40 text-sm">사이트명</div>
          <div className="text-lg">아이돌 홈페이지</div>
        </div>
        <div className="flex border-b-slate-400 border-b-[1px] p-4">
          <div className="basis-40">이름/아이디</div>
          <div>홍길동</div>
        </div>
        <div className="flex border-b-slate-400 border-b-[1px] p-4">
          <div className="basis-40">이메일</div>
          <div>123@123.com</div>
        </div>
        <div className="flex border-b-slate-400 border-b-[1px] p-4">
          <div className="basis-40">사이트주소</div>
          <div>http://127.0.0.1:3000</div>
        </div>
        <div className="flex border-b-slate-400 border-b-[1px] p-4">
          <div className="basis-40">문자발송연락처</div>
          <div>010-1234-5678</div>
          <Button size='small' className="bg-slate-50 p-1 ml-5 text-[10px]">SMS발송설정</Button>
        </div>
      </div>
    </>
  );
}