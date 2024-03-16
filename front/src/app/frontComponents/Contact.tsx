"use client"

import { Input } from "antd";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Inputs {
  contact_text?: string;
  contact_phone?: string;
}

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  return (
    <div className="text-center my-8">
      <div className="text-4xl mb-4">NEW PRODUCT</div>
      <div className="text-2xl">이장님닷컴의 건강하고 맛있는 제품들을 지금 만나보세요</div>
      <div style={{ backgroundImage:'url("https://ejangnim.com/dmedi/img/ban1_02.jpg")', height:'300px', borderTop:'1px solid purple', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
                <div style={{ margin:'20px'}}>
                    <h2 style={{lineHeight:'2.5rem'}}>번호를 남기시면<br />전화드리겠습니다!</h2>
                    <div>위치와 수량을 말씀해주시고<br />번호를 남겨주시면 확인 후 <br />신속히 답변드리겠습니다</div>
                </div>
            <div style={{ margin:'10px'}}>
                <Input.TextArea style={{ width:'50%', marginBottom:'10px' }} placeholder='내용' {...register('contact_text')} />
                <Input.Search  style={{ width:'90%' }} enterButton='보내기' placeholder='휴대폰' {...register('contact_phone')} onSearch={handleSubmit(async(data: any) => {
                  try {
                    console.log({ data });
                    toast.success('생성 성공')
                  } catch (err) {
                    console.error(err);
                    toast.error('데이터 저장 오류입니다. 다시 시도해주세요')
                  }
                })} />
            </div> 
            </div>
    </div>
  );
}