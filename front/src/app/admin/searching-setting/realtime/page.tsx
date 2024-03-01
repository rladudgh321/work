"use client"

import RealTimeTable from "@/components/RealTimeTable";
import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  weather_select_box?: string;
}

export default function Realtime() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  return (
    <Form onFinish={handleSubmit(async(data: any) => {
      try {
        console.log({ data });
        toast.success('생성 성공')
      } catch (err) {
        console.error(err);
        toast.error('데이터 저장 오류입니다. 다시 시도해주세요')
      }
    })}>
      <div className="md:max-w-2xl mx-auto mt-10">
        <fieldset className="border-slate-600 border-[1px] p-4" >
          <legend className="text-center p-2">실시간 검색어 설정</legend>
          <div>
            <ul>
              <li>- 메인화면에 출력되고 있는 실시간인기검색어의 검색어를 등록합니다.</li>
              <li>- 통합검색창에서 검색어를 입력할경우 자동으로 횟수가 합산되어 인기검색어에 등록 되지만 관리자가 임의로 지정할 수 도 있습니다.</li>
              <li>- 검색어 및 검색횟수를 관리자 임의대로 설정해줄수있습니다. 똑같은 검색어를 입력하는경우 상위에 있는검색어에 횟수가 + 포함되며 중복됐던 두번째 검색어는 자동 삭제됩니다.</li>
              <li>- 개별 삭제 및 다중삭제가 가능하고, 순위변동을 임의대로 조절할 수도 있습니다.</li>
            </ul>
          </div>
        </fieldset>
        <div className="mt-10">
          <RealTimeTable  />
        </div>
      </div>
    </Form>
  );
}