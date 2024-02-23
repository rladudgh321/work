"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";

interface Inputs {
  kakao_local_map?: string;
  map_radio: boolean;
  naver_clientID?: string;
  naver_Client_Secret?: string;
  kakao_PC_API_KEY?: string;
  kakao_M_API_KEY?: string;
  google?: string;
}

export default function map_API_KEY() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  return (
    <Form onFinish={handleSubmit(async(data) => {
      try {
        console.log({ data });
        toast.success('생성 성공')
      } catch (err) {
        console.error(err);
        toast.error('데이터 저장 오류입니다. 다시 시도해주세요')
      }
    })}>
      <div className="md:max-w-2xl mx-auto">
        <fieldset className="border-slate-600 border-[1px] p-4" >
          <legend className="text-center p-2">지도API설정</legend>
          <div>네이버와 다음지도 구글지도 중에 선택해서 설정할 수 있습니다</div>
        </fieldset>
        <div>
          {/* border-slate-600 border-[1px] */}
          <div className="border border-slate-600">
            <div className="flex mt-10">
              <div className="w-48">나의 지도 선택</div>
              <div>
                <div>길잡이: 내 웹사이트에서 사용할 지도를 선택해주세요</div>
                <div className="flex gap-x-4">
                  <div>
                    <input type="radio" id="네이버" value='네이버지도' {...register("map_radio", { required: true })} />
                    <label htmlFor="네이버">네이버</label>
                  </div>
                  <div>
                    <input type="radio" id="카카오" value='카카오지도' {...register("map_radio", { required: true })} />
                    <label htmlFor="카카오">카카오</label>
                  </div>
                  <div>
                    <input type="radio" id="구글" value='구글지도' {...register("map_radio", { required: true })} />
                    <label htmlFor="구글">구글</label>
                  </div>
                </div>
                {errors?.map_radio?.type === 'required' && (
                  <div className="pt-2 text-xs text-red-600">필수 선택입니다</div>
                )}
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-48 flex-shrink-0">네이버 지도</div>
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
            <div className="flex mt-10">
              <div className="w-48 flex-shrink-0">카카오(다음) 지도</div>
              <div>
                <div className="overflow-hidden">길잡이:
                다음 지도키는 사용자가 직접 발급받으신 키값을 입력하셔야 합니다.
                다음 지도를 템플릿 파일에서 사용하는 방법은 도움말을 참고하시기 바랍니다.
                </div>
                <div className="flex gap-x-4 flex-col gap-y-3">
                  <div>
                    <label className="inline-block w-32" htmlFor="kakao_PC_API_KEY">JAVASCRIPT KEY</label>
                    <input className="rounded-md" type="text" id="kakao_PC_API_KEY" {...register("kakao_PC_API_KEY")} />
                  </div>
                  <div>
                    <label className="inline-block w-32" htmlFor="kakao_local_map">카카오 로컬키</label>
                    <input className="rounded-md" type="text" id="kakao_local_map" {...register("kakao_local_map")} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-48">카카오 모바일</div>
              <div>
                <div>
                  <fieldset className="border-[1px] border-gray-500 p-5 m-5">
                    <legend className="text-center">길잡이</legend>
                    <ol>
                      <li>1. 카카오개발센터 접속 https://developers.kakao.com/</li>
                      <li>2. 카카오계정으로 로그인</li>
                      <li>3. 좌측 앱만들기 버튼 클릭</li>
                      <li>4. 이름입력</li>
                      <li>5. 키발급완료</li>
                      <li>{`6. 설정 클릭 -> 플랫폼 추가 -> 웹선택 -> 도메인입력`}</li>
                      <li>7. 발급된 키값 중 JavaScript 키를 입력합니다.</li>
                    </ol>
                  </fieldset>
                </div>
                <div className="flex gap-x-4">
                  <div>
                    <label htmlFor="kakaoM">카카오모바일키</label>
                    <input type="text" id="kakaoM" {...register("kakao_M_API_KEY")} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-48 flex-shrink-0">구글 지도</div>
              <div>
                <div>
                  <fieldset className="border-[1px] border-gray-500 p-5 m-5">
                    <legend className="text-center">길잡이</legend>
                    구글 지도키는 사용자가 직접 발급받으신 키값을 입력하셔야 합니다.
                    구글 지도를 템플릿 파일에서 사용하는 방법은 도움말을 참고하시기 바랍니다.
                  </fieldset>
                </div>
                <div className="flex gap-x-4">
                  <div>
                    <label htmlFor="google">구글API KEY</label>
                    <input type="text" id="google" {...register("google")} />
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