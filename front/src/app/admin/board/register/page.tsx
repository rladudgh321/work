"use client"

import ColorPickerAndFontSize from "@/components/ColorPickerAndFontSize";
import Image_setting from "@/components/Image_setting";
import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { GrAction } from "react-icons/gr";
import { toast } from 'react-toastify';


interface Inputs {
  about_select_box?: boolean;
  abuout_displayName?: string;
  about_text?: string;
}

export default function BoardRegister() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const InputNumberOnChange = (value: number) => {
    console.log('changed', value);
  };
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
          <legend className="text-center p-2">게시판 등록</legend>
          <div>
            <div>기본설정: 게시판 이름 등</div>
            <div>기능별 이용권한: 권한마다 차등을 줄 수 있음</div>
            <div>템플릿 파일 설정: 템플릿</div>
            <div>디자인설정: 예스</div>
            <div>통합검색설정: 이것도?</div>
            <div>아이콘설정: 게시판 아이콘</div>
          </div>
        </fieldset>
        <div>
          <div className="border border-slate-600 mt-10">

          <div className="p-3">
            <div className="flex">
              <div><GrAction /></div>
              <div>게시판 등록</div>
            </div>
            <div className="flex">
              <Button>기본정보설정</Button>
              <Button>기능별 이용권한</Button>
              <Button>템플릿 파일설정</Button>
              <Button>디자인 설정</Button>
              <Button>통합검색설정</Button>
              <Button>아이콘설정</Button>
              <Button>기타기능설정</Button>
            </div>
          </div>

{/* 
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


            <div className="flex mt-10 w-48">
              <div className="w-24 flex-shrink-0 my-auto p-4">타이틀 문구 설정(색상)</div>
              <div>
                <div className="flex p-10 border border-slate-500 my-4">
                  <div className="w-60 ">대표색상</div>
                  <div className="flex gap-4 ">
                    <div className="w-10">색상</div>
                    <ColorPick size="small" defaultValue="#f0f0f0" />
                  </div>
                </div>
                <div className="flex p-10 border border-slate-500">
                  <div className="w-60 ">서브메뉴over배경색상</div>
                  <div className="flex gap-4 ">
                    <div className="w-10">색상</div>
                    <ColorPick size="small" defaultValue="#f0f0f0" />
                  </div>
                </div>
              </div>
            </div>

*/}

            <div className="flex mt-10">
              <div className="w-24 flex-shrink-0 my-auto p-4">기본정보설정</div>
              <div>
                <div className="flex p-10 border border-slate-500">
                  <div className="w-60 ">게시판 이름</div>
                  <div className="flex flex-col gap-4 ">
                    <div>길잡이: 등록할 게시판의 이름을 입력하세요.</div>
                    <input className="input mt-4" {...register("board_path", { required: true } )} />
                  </div>
                </div>
                <div className="flex p-10 border border-slate-500">
                  <div className="w-60 ">테이블 명</div>
                  <div className="flex gap-4 ">
                    <div>길잡이: 테이블명은 한글 공백 특수문자를 사용할 수 없으며, 영문 과 숫자의 조합으로 입력할 수 있습니다.</div>
                    <input className="input mt-4" {...register("board_path", { required: true } )} />
                  </div>
                </div>
                <div className="flex p-10 border border-slate-500">
                  <div className="w-60 ">게시판 그룹명 설정</div>
                  <div className="flex gap-4 ">
                    <div>길잡이: 사용자화면에만 적용되며, 관리자에서는 지원하지 않습니다.</div>
                    <input className="input mt-4" {...register("board_path", { required: true } )} />
                  </div>
                </div>
                <div className="flex p-10 border border-slate-500">
                  <div className="w-60 ">게시판 메뉴 출력순서</div>
                  <div className="flex gap-4 ">
                    <div>길잡이: 게시판 메뉴 출력 우선 순위는 숫자은 낮은 순입니다.
사용자화면에만 적용되며, 관리자에서는 지원하지 않습니다.</div>
                    <input className="input mt-4" {...register("board_path", { required: true } )} />
                    <div className="basis-24 my-auto">번째</div>
                  </div>
                </div>
                <div className="flex p-10 border border-slate-500">
                  <div className="w-60 ">게시글 메인페이지 추출설정</div>
                  <div className="flex flex-col gap-4 ">
                    <div>길잡이: 메인페이지에 등록된 게시글을 출력할 때 이 게시판에 등록된 모든글을 출력할지
관리자가 선정한 게시글만 출력해낼지를 설정합니다.</div>
                    <div>
                      <input type='radio'{...register("board_path", { required: true } )} />
                      <label>모든 게시글 출력</label>
                    </div>
                    <div>
                      <input type='radio'{...register("board_path", { required: true } )} />
                      <label>관리자가 지정한 게시글만 출력</label>
                    </div>
                  </div>
                </div>
                <div className="flex p-10 border border-slate-500">
                  <div className="w-60 ">게시판 스킨</div>
                  <div className="flex gap-4 flex-col">
                    <div>길잡이: 스킨 선택시 사용 템플릿파일이 변경 됩니다.</div>
                    <input className="input mt-4" {...register("board_path", { required: true } )} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex my-0">
              <div className="w-24 flex-shrink-0 my-auto p-4">테이블 명</div>
              <div>
                <div className="flex flex-col p-10 border border-slate-500 my-4">
                  <div>길잡이: 테이블명은 한글 공백 특수문자를 사용할 수 없으며, 영문 과 숫자의 조합으로 입력할 수 있습니다.</div>
                  <div>
                    <input className="input mt-4" {...register("board_path", { required: true } )} />
                  </div>
                </div>
              </div>
            </div>


            <div className="flex mt-10 w-48"> {/* 복사구간 */}
              <div className="w-24 flex-shrink-0 my-auto p-4">타이틀 문구 설정(색상, 크기)</div>
              <div>
                  <ColorPickerAndFontSize title="카피라이터영문" />
              </div>
            </div>
            
            <div className="flex mt-10 w-full"> {/* 복사구간 */}
              <div className="w-24 flex-shrink-0 my-auto p-4">이미지설정(링크X)</div>
              <div className="w-auto">
                <div>
                  <Image_setting title="카피라이터이미지" recommendSize="455 x 54" />
                </div>
                <div>
                  <Image_setting title="하단로고이미지" recommendSize="226 x 46" />
                </div>
                <div>
                  <Image_setting title="이용약관" recommendSize="47 x 11" />
                </div>
                <div>
                  <Image_setting title="이메일무단수집거부" recommendSize="106 x 11" />
                </div>
                <div>
                  <Image_setting title="개인정보취급방침" recommendSize="93 x 11" />
                </div>
                <div>
                  <Image_setting title="관리자쪽지" recommendSize="57 x 11" />
                </div>
                <div>
                  <Image_setting title="전자금융거래" recommendSize="70 x 11" />
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