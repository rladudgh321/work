"use client"

import ColorPickerAndFontSize from "@/components/ColorPickerAndFontSize";
import ColorPick from "@/components/Color_picker";
import Image_setting from "@/components/Image_setting";
import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { ImFontSize } from "react-icons/im";
import { PiLinkLight } from "react-icons/pi";
import { SlPicture } from "react-icons/sl";
import { TfiTag } from "react-icons/tfi";
import { toast } from 'react-toastify';

interface Inputs {
  about_select_box?: boolean;
  abuout_displayName?: string;
  about_text?: string;
}

export default function UpBanner() {
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
          <legend className="text-center p-2">모바일 상단 영역 디자인</legend>
          <div>
            <ul>
              <li className="flex gap-x-4 mb-6">
                  <SlPicture className="text-4xl" />
                <div>
                  <div className="font-bold">이미지 등록시</div>
                  <p>
                  · 기본 등록된 이미지의 권장 이미지 사이즈로 등록하셔야 디자인 깨짐없이 이용이 가능합니다.<br />
                  · 이미지 교체 외에 디자인을 수정 및 추가하고자 하실 경우 HTML 파일을 직접 수정하셔야 합니다.<br />
                  · 모바일 이미지는 기존 이미지에서 2배 이상 큰 사이즈의 이미지로 등록하시길 권장합니다. <br />
                  · JPG, PNG 확장자로 제작 및 등록을 권장합니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4 mb-6">
                  <PiLinkLight className="text-4xl" />
                <div>
                  <div className="font-bold">링크</div>
                  <p>
                  · 링크 입력시 도메인을 제외한 상대경로로 등록하시기 바랍니다.<br />
                    (예: http://도메인/html_file.php?file=sitemap.html)
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4 mb-6">
                  <ImFontSize className="text-4xl" />
                <div>
                  <div className="font-bold">색상 및 글자색상, 글자크기</div>
                  <p>
                  · 글자 크기를 변경하실 경우 사이트의 디자인이 깨져보일 수 있으니 유의하시기 바랍니다.<br />
                  · 메뉴 및 페이지 설정시 메뉴명 출력방식을 이미지메이커나 이미지로 설정할 경우
                  본 설정은 적용되지 않습니다. <br />
                  · 색상 및 글자색상은 웹색상표준코드로 등록하시기 바랍니다. (예:#FF0000)<br />
                  </p>
                </div>
              </li>
              <li className="flex gap-x-4 mb-6">
                  <TfiTag className="text-4xl" />
                <div>
                  <div className="font-bold">출력태그 이용방법</div>
                  <p>
                  · <span className="font-bold">출력태그</span>는 각 설정화면 우측에 표시된 출력태그를 HTML 파일에 삽입하여 이용이 가능합니다.<br />
                  · <span className="font-bold">출력태그</span>는 각 항목별 용도에 맞게 적용하셔야 합니다. 
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </fieldset>
        <div>
          <div className="border border-slate-600 mt-10">
            <div className="flex mt-10 w-48">
              <div className="w-24 flex-shrink-0 my-auto p-4">타이틀 문구 설정(색상)</div>
                <div className="flex p-10 border border-slate-500 my-4">
                  <div className="w-60 ">대표색상</div>
                  <div className="flex gap-4 ">
                    <div className="w-10">색상</div>
                    <ColorPick size="small" defaultValue="#f0f0f0" />
                  </div>
                </div>
            </div>
            <div className="flex mt-10 w-48"> {/* 복사구간 */}
              <div className="w-24 flex-shrink-0 my-auto p-4">타이틀 문구 설정(색상, 크기)</div>
              <div>
                <div>
                  <ColorPickerAndFontSize title="대메뉴" />
                  <ColorPickerAndFontSize title="서브메뉴" />
                </div>
              </div>
            </div>
            
            <div className="flex mt-10 w-full"> {/* 복사구간 */}
              <div className="w-24 flex-shrink-0 my-auto p-4">이미지설정(링크X)</div>
              <div className="w-auto">
                <div>
                  <Image_setting title="로고" recommendSize="229 x 46" />
                </div>
                <div>
                  <Image_setting title="상단배경" recommendSize="1 x 100" />
                </div>
                <div>
                  <Image_setting title="전체보기아이콘" recommendSize="100 x 100" />
                </div>
                <div>
                  <Image_setting title="통합검색아이콘" recommendSize="100 x 100" />
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