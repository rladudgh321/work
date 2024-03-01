"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  about_select_box?: boolean;
  abuout_displayName?: string;
  about_text?: string;
}

export default function Naver_taktak() {
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
      <div className="md:max-w-4xl mx-auto mt-10">
        <fieldset className="border-slate-600 border-[1px] p-4" >
          <legend className="text-center p-2">관련사이트 설정</legend>
          <div>관련사이트 설정이란 맨 끝 하단에 선택사이트 설정입니다</div>
        </fieldset>
        <div>
          <div className="border border-slate-600 mt-10">
            <div className="flex mt-10">
              <div className="w-24 flex-shrink-0 my-auto">네이버톡톡</div>
              <div>
                <div>
                  <fieldset className="border-[1px] border-gray-500 p-5 m-5">
                    <legend className="text-center">길잡이: 관련사이트 설정</legend>
                    내 웹사이트가 이러한 웹사이트와 관련되어 있으며 사용자들에게 바로가기를 제공해줍니다
                    이는 마치 내 웹사이트가 관련 웹사이트와 제휴를 맺는 듯한 효과를 주는 디테일한 작업입니다
                    <br /><br />
                    {[...Array(3)].map((v,i) => (`${i+1}개 관련사진`))}
                  </fieldset>
                </div>
                <div className="flex gap-x-4 mt-10">
                  <div className="flex">
                    <label className="w-32 flex-shrink-0" htmlFor="abuout_displayName">첫 디스플레이 제목</label>
                    <input type="text" value={'관련 사이트'} id="abuout_displayName" {...register("abuout_displayName")} />
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="w-32 flex-shrink-0">사용 여부</div>
                  <div className="flex gap-x-4">
                    <div>
                      <input type="radio" id="셀렉트박스 사용" value='셀렉트박스 사용' {...register("about_select_box", { required: true })} />
                      <label htmlFor="셀렉트박스 사용">사용</label>
                    </div>
                    <div>
                      <input type="radio" id="셀렉트박스 미사용" value='셀렉트박스 미사용' {...register("about_select_box", { required: true })} />
                      <label htmlFor="셀렉트박스 미사용">미사용</label>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea rows={7} {...register("about_text")} className="w-10/12 mt-3 bg-slate-300"></textarea>
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