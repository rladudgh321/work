"use client"

import { Form} from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


interface Inputs {
  about_select_box?: boolean;
  abuout_displayName?: string;
  about_text?: string;
}

export default function TypePC() {
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
          <legend className="text-center p-2">영역별 디자인 설정 (PC)</legend>
          <ul>
            <li>- 홈페이지의 각 영역별 디자인을 설정할 수 있습니다.</li>
            <li>- 변경하실 각 영역별 디자인설정 바로가기 버튼을 클릭시 설정페이지로 이동합니다.</li>
          </ul>
        </fieldset>
        <div className="grid grid-cols-2">
          <div className="border border-slate-500 flex flex-col gap-y-4">
            <img className="object-cover mx-auto w-52 h-52" src="https://plus.unsplash.com/premium_photo-1676642611795-9f1de2b99f83?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" />
            <div>
            <div className="text-xl">상단박스 디자인설정</div>
            <p>홈페이지 상단 및 우측 퀵 메뉴까지의 공통영역 디자인 설정입니다.
              상단메뉴의 폰트크기, 색상 등 본 설정툴을 통해 수정할 수 있으며,
              각종 아이콘 및 색상등을 설정할 수 있습니다
            </p>
            </div>
            <button className="btn_type">버튼</button>
          </div>
          <div className="border border-slate-500 flex flex-col gap-y-4">
            <img className="object-cover mx-auto w-52 h-52" src="https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?q=80&w=1449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" />
            <div>
            <div className="text-xl">서브 공통 영역 디자인</div>
            <p>서브페이지의 2차, 3차 메뉴의 폰트생상, 크기 설정 및
              마이페이지, 통합검색, 로그인 페이지 등의 타이틀 배너 이미지등을
              등록, 설정할 수 있습니다.
            </p>
            </div>
            <button className="btn_type">버튼</button>
          </div>
          <div className="border border-slate-500 flex flex-col gap-y-4">
            <img className="object-cover mx-auto w-52 h-52" src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" />
            <div>
            <div className="text-xl">하단 영역 디자인</div>
            <p>하단 카피라이터 부분의 로고, 폰트 크기 및 색상등을 설정합니다.
              이미지 업로드 방식과 에디터 방식으로 이용할 수 있으며,
              에디터 방식으로 적용시 텍스트 기반의 내용을 입력할 수 있습니다.
            </p>
            </div>
            <button className="btn_type">버튼</button>
          </div>
          <div className="border border-slate-500 flex flex-col gap-y-4">
            <img className="object-cover mx-auto w-52 h-52" src="https://plus.unsplash.com/premium_photo-1675964349731-e7710eaebf8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" />
            <div>
            <div className="text-xl">상단박스 디자인설정</div>
            <p>홈페이지 상단 및 우측 퀵 메뉴까지의 공통영역 디자인 설정입니다.
            상단메뉴의 폰트크기, 색상 등 본 설정툴을 통해 수정할 수 있으며,
            각종 아이콘 및 색상등을 설정할 수 있습니다</p>
            </div>
            <button className="btn_type">버튼</button>
          </div>
        </div>
      </div>
    </Form>
  );
}