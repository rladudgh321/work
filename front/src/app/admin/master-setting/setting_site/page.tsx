import { Button, Form, Input } from 'antd';

export default function SettingSite() {
  return (
    <aside className="md:max-w-2xl mx-auto mt-10">
      <fieldset className="border-slate-600 border-[1px] p-4" >
        <legend className="text-center p-2">주의 사항</legend>
        <div>여기에 있는 사항대로 하셔야 홈페이지를 원활하게 진행하실 수 있습니다s</div>
      </fieldset>

        <Form className="mt-10">
          <div className="flex mb-3">
            <label htmlFor='site_name' className="w-48 my-auto">사이트 이름</label>
            <Input id='site_name' />
          </div>
          <div className="flex mb-3">
            <label htmlFor='ad_name' className="w-48 my-auto">관리자 이름</label>
            <Input id='ad_name' />
          </div>
          <div className="flex mb-3">
            <label htmlFor='ad_id' className="w-48 my-auto">관리자 아이디</label>
            <Input id='ad_id' />
          </div>
          <div className="flex mb-3">
            <label htmlFor='ad_pw' className="w-48 my-auto">관리자 비밀번호</label>
            <Input id='ad_pw' />
          </div>
          <div className="flex mb-3">
            <label htmlFor='ad_email' className="w-48 my-auto">관리자 이메일</label>
            <Input id='ad_email' />
          </div>
          <div className="flex mb-3">
            <label htmlFor='site_address' className="w-48 my-auto">사이트 주소</label>
            <Input id='site_address' />
          </div>
          <div className="flex mb-3">
            <label htmlFor='solution_type' className="w-48 my-auto">솔루션 종류</label>
            <Input id='solution_type' />
          </div>
          <div className="flex justify-center mt-6">
            <Button className="bg-gray-600 text-gray-50 w-8/12 h-12">저장하기</Button>
          </div>
        </Form>

    </aside>
  );
}