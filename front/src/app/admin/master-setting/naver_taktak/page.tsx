"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import UploadImage from "@/components/UploadImage";

interface Inputs {
  kakao_local_map?: string;
  map_radio: boolean;
  naver_clientID?: string;
  naver_Client_Secret?: string;
  kakao_PC_API_KEY?: string;
  kakao_M_API_KEY?: string;
  google?: string;
}

export default function NaverTaktak() {
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
          <legend className="text-center p-2">네이버 톡톡</legend>
          <div>네이버 톡톡이란 네이버에서 제공하는 1:1상담 무료채팅 서비스 입니다</div>
        </fieldset>
        <div>
          <div className="border border-slate-600 mt-10">
            <div className="flex mt-10">
              <div className="w-48 flex-shrink-0">네이버톡톡</div>
              <div>
                <div>
                  <fieldset className="border-[1px] border-gray-500 p-5 m-5">
                    <legend className="text-center">길잡이: 네이버톡톡 API KEY 발급 방법</legend>
                    설명하는 네이버 톡톡서비스 기준은 고객과 기본적인 대화 수준 설정입니다 이후 추가 설정은 아래 홈페이지에서 확인하시길 바랍니다
                  </fieldset>
                </div>
                <div className="grid grid-cols-3">
                  <div>설명 그림1</div>
                  <div>설명 그림2</div>
                  <div>설명 그림3</div>
                  <div>설명 그림4</div>
                  <div>설명 그림5</div>
                  <div>설명 그림6</div>
                </div>
                <div className="flex gap-x-4 mt-10">
                  <div>
                    <label htmlFor="google">네이버톡톡API KEY</label>
                    <input type="text" id="google" {...register("google")} />
                  </div>
                </div>
                <div className="flex gap-x-4 mt-10">
                  <div className="flex flex-x-gap-4">
                    <div className="flex-shrink-0 basis-14">PC<br/> 이미지</div>
                    <UploadImage />
                  </div>
                  <div className="flex flex-x-gap-4 ml-4">
                    <div className="flex-shrink-0 basis-14">모바일<br/> 이미지</div>
                    <UploadImage />
                  </div>
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