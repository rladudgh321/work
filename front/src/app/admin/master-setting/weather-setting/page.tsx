"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  weather_select_box?: string;
}

export default function WeatherSetting() {
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
          <legend className="text-center p-2">날씨환경설정</legend>
          <div>날씨 환경설정이란, 아래의 지역으로부터 날씨데이터를 최신화하는 과정입니다
          사용목적은 이사로 인한 이동 및 사용자의 목적에 있습니다
          </div>
        </fieldset>
        <div>
          <div className="border border-slate-600 mt-10">
            <div className="flex mt-10">
              <div className="w-48 flex-shrink-0">날씨환경설정</div>
              <div>
                <div>
                  <fieldset className="border-[1px] border-gray-500 p-5 m-5">
                    <legend className="text-center">길잡이: 지역을 선택하여 우리지역 날씨를 고객에게도 알려주세요</legend>
                    아래 사진과 같이 고객들에게 보여질 날씨정보입니다
                  </fieldset>
                </div>
                <div className="flex mt-5">
                  <div className="w-32 flex-shrink-0">사용 여부</div>
                  <div className="flex gap-x-4">
                    <div>
                      <input type="radio" id="셀렉트박스 사용" value='셀렉트박스 사용' {...register("weather_select_box", { required: true })} />
                      <label htmlFor="셀렉트박스 사용">사용</label>
                    </div>
                    <div>
                      <input type="radio" id="셀렉트박스 미사용" checked={true} value='셀렉트박스 미사용' {...register("weather_select_box", { required: true })} />
                      <label htmlFor="셀렉트박스 미사용">미사용</label>
                    </div>
                  </div>
                </div>
                <div style={{ color:'red' }}>
                  다음주소 API 등록하여 입력
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center"><Button className="btn mt-5" htmlType="submit">저장하기</Button></div>
        </div>
      </div>
    </Form>
  );
}