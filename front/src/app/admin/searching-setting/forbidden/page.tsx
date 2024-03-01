"use client"

import { Button, Form, Input } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  forbidden?: string;
}

export default function Realtime() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  return (
    <>
      <div className="md:max-w-2xl mx-auto mt-10">
        <fieldset className="border-slate-600 border-[1px] p-4" >
          <legend className="text-center p-2">차단 단어 설정</legend>
          <div>
            <ul>
              <li>적용 범위는 솔루션내의 모든 POST 값을 체크합니다. 다만, 관리자모드에서는 체크하지 않습니다.</li>
              <li>- GET값을 사용하는 검색부분은 차단 단어 기능이 적용되지 않습니다.</li>

              <li>해당 기능을 사용하고 싶지 않으시다면, 아무런 내용도 입력하지 않으시면 됩니다.</li>
              <li>해킹방지 목적으로 사용하신다면 특정 태그를 입력하시면 됩니다.</li>
              <li>,표시로 띄어쓰기 없이 나열해주시면 됩니다</li>
            </ul>
          </div>
        </fieldset>
        <div>
        <Form onFinish={handleSubmit(async(data: any) => {
            try {
              console.log({ data });
              toast.success('생성 성공')
            } catch (err) {
              console.error(err);
              toast.error('데이터 저장 오류입니다. 다시 시도해주세요')
            }
          })}>
          <Input.TextArea rows={7} className="w-8/12 mt-4" {...register("forbidden")} />
        </Form>
        </div>
      </div>
    </>
  );
}
