"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  // kakao_local_map?: string;
  // map_radio: boolean;
  // naver_clientID?: string;
  // naver_Client_Secret?: string;
  // kakao_PC_API_KEY?: string;
  // kakao_M_API_KEY?: string;
  // google?: string;
  board_path?: string;
  board_imgtime?: number;
  board_exttime?: number;
  board_horizonsize?: number;
  board_verticalsize?: number;
}

export default function BoardBasicSetting() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      board_path: 'html_bbs',
      board_imgtime: 1,
      board_exttime: 365,
      board_horizonsize: 80,
      board_verticalsize: 60,
    }
  });
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
          <legend className="text-center p-2">게시판 환경설정</legend>
          <div>게시판 환경설정입니다</div>
        </fieldset>
        <div>
          {/* border-slate-600 border-[1px] */}
          <div className="border border-slate-600 mt-10">
            <div className="flex mt-10">
              <div className="w-48">템플릿 파일 경로</div>
              <div>
                <div>길잡이: 게시판에서 사용할 템플릿 파일 경로명을 설정합니다. (기본값 : html_bbs )</div>
                <div>
                  <input className="input" {...register("board_path", { required: true } )} />
                </div>
                {errors?.board_path?.type === 'required' && (
                  <div className="pt-2 text-xs text-red-600">필수 선택입니다</div>
                )}
              </div>
            </div>

            <div className="flex mt-10">
              <div className="w-48">게시글 NEW 아이콘<br />표시기간범위 설정</div>
              <div>
                <div>길잡이: 새로운 게시글이 등록되었을 경우 [new] 아이콘 출력기간 범위를 설정합니다. (기본값 : 1 )</div>
                <div>
                  <input className="input" {...register("board_imgtime", { required: true } )} />
                </div>
                {errors?.board_path?.type === 'required' && (
                  <div className="pt-2 text-xs text-red-600">필수 선택입니다</div>
                )}
              </div>
            </div>

            


            <div className="flex mt-10">
              <div className="w-48">베스트게시글<br />추출기간범위 설정</div>
              <div>
                <div>길잡이: 베스트(추천) 게시글의 추출기간 범위를 설정합니다. ( 기본값: 365 , 1 = 1일)</div>
                <div>
                  <input className="input" {...register("board_exttime", { required: true } )} />
                </div>
                {errors?.board_path?.type === 'required' && (
                  <div className="pt-2 text-xs text-red-600">필수 선택입니다</div>
                )}
              </div>
            </div>

            <div className="flex my-10">
              <div className="w-48">통합검색시 게시글 이미지 사이즈</div>
              <div>
                <div>길잡이: 통합검색결과 페이지에서 게시글 이미지 사이즈</div>
                <div className="flex gap-x-3">
                  <div className="w-9 my-auto">가로</div>
                  <input className="input" {...register("board_horizonsize", { required: true } )} />
                </div>
                <div className="flex gap-x-3 mt-2">
                  <div className="w-9 my-auto">세로</div>
                  <input className="input" {...register("board_verticalsize", { required: true } )} />
                </div>
                {errors?.board_path?.type === 'required' && (
                  <div className="pt-2 text-xs text-red-600">필수 선택입니다</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center"><Button className="btn mt-5" htmlType="submit">저장하기</Button></div>

        </div>
      </div>
    </Form>
  );
}