"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import UploadImage from "@/components/UploadImage";
import MenuTable from "@/components/MenuTable";

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
          <legend className="text-center p-2">메뉴 및 페이지 설정</legend>
          <div>
            <ul>
              <li>· 메뉴별 “하위메뉴생성” 버튼을 클릭하면 하위 메뉴를 등록할 수 있습니다. (예:1차메뉴 &gt; 2차메뉴)</li>
              <li>· 메뉴는 갯수에 제한없이 등록할 수 있습니다.</li>
              <li>· 메뉴를 생성하면 메뉴속성을 지정한 후 속성에 따라 설정시 한 페이지가 완성됩니다.</li>
                          
              <li>· 메뉴별 접속권한을 설정하여 회원그룹별로 페이지 접근을 설정할 수 있습니다.</li>
              <li>· 메뉴별 관리권한, 만족도, 담당부서 등을 설정하여 각 페이지별 관리 및 평가등을 설정할 수 있습니다.</li>
              <li>· 메뉴별(페이지별) 메타태그를 설정할 수 있어 정확도 높은 SEO 를 설정할 수 있습니다.</li>
            </ul>
            </div>
        </fieldset>
        <div>
          <div className="border border-slate-600 mt-10">
              <MenuTable />
          </div>
          <div className="flex justify-center"><Button className="btn mt-5" htmlType="submit">저장하기</Button></div>
        </div>
      </div>
    </Form>
  );
}