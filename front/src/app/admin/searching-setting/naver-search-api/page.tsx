"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  kakao_local_map?: string;
  map_radio: boolean;
  naver_clientID?: string;
  naver_Client_Secret?: string;
  kakao_PC_API_KEY?: string;
  kakao_M_API_KEY?: string;
  google?: string;
}

export default function NaverSearchApi() {
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
          <legend className="text-center p-2">네이버 검색 API 설정</legend>
          <div>네이버 톡톡이란 네이버에서 제공하는 1:1상담 무료채팅 서비스 입니다</div>
        </fieldset>
        <div>
          {/* border-slate-600 border-[1px] */}
          <div className="border border-slate-600 mt-10">
            
            <div className="flex mt-10">
              <div className="w-48 flex-shrink-0">네이버 검색 API 설정</div>
              <div>
                <div className="text-[10px]">길잡이: 네이버지도 서비스키를 발급받는 내용은 [도움말] 버튼을 클릭하여 참조하시기 바랍니다.
네이버지도를 템플릿파일에 사용하기 위한 태그명령어 설명은 [도움말] 버튼을 클릭하여 참조하시기 바랍니다.</div>
                <div className="flex gap-x-4 flex-col gap-y-3">
                  <div>
                    <label className="inline-block w-32" htmlFor="naver_clientID">ClientID</label>
                    <input className="rounded-md" type="text" id="naver_clientID" {...register("naver_clientID")} />
                  </div>
                  <div>
                    <label className="inline-block w-32" htmlFor="naver_Client_Secret">Client_Secret</label>
                    <input className="rounded-md" type="text" id="naver_Client_Secret" {...register("naver_Client_Secret")} />
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