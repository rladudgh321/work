"use client"

import { Button, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  meta_title?: string;
  meta_keyword?: string;
  meta_description?: string;
  meta_author?: string;
  meta_email?: string;
  meta_og_type?: string;
  meta_og_title?: string;
  meta_og_url?: string;
  meta_og_description?: string;
  meta_og_image?: string;
}


export default function Setting_site() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  return (
    <aside className="md:max-w-4xl mx-auto mt-10">
      <fieldset className="border border-slate-600 p-4 " >
        <legend className="text-center p-5">매타태그</legend>
        <div>매타태그란, 인터넷 검색 최적화(SEO)가 잘 되도록 하는 작업입니다.
        꼼꼼히 입력하여 우리 웹사이트가 인터넷 검색에 웹사이트 목적에 맞게 잘 노출 되도록 합시다!</div>
      </fieldset>

        <Form className="mt-10" onFinish={handleSubmit(async(data: any) => {
          try {
            console.log({ data });
            toast.success('생성 성공')
          } catch (err) {
            console.error(err);
            toast.error('데이터 저장 오류입니다. 다시 시도해주세요')
          }
        })}>
          <div className="flex mb-3">
            <label htmlFor='meta_title' className="w-48 my-auto">매타태그 제목<br />(title)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_title" {...register("meta_title")} />       </div>
          <div className="flex mb-3">
            <label htmlFor='meta_keyword' className="w-48 my-auto h-">매타태그 키워드<br />(keyword)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_keyword" {...register("meta_keyword")} />     </div>
          <div className="flex mb-3">
            <label htmlFor='meta_description' className="w-48 my-auto">매타태그 설명<br />(description)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_description" {...register("meta_description")} />   </div>
          <div className="flex mb-3">
            <label htmlFor='meta_author' className="w-48 my-auto">매타태그 작성자<br />(author)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_author" {...register("meta_author")} />   </div>
          <div className="flex mb-3">
            <label htmlFor='meta_email' className="w-48 my-auto">매타태그 회신메일<br />(reply-to)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_email" {...register("meta_email")} />      </div>
          <div className="flex mb-3">
            <label htmlFor='meta_og_type' className="w-48 my-auto">매타태그<br />(og:type)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_og_type" {...register("meta_og_type")} />          </div>
          <div className="flex mb-3">
            <label htmlFor='meta_og_title' className="w-48 my-auto">매타태그<br />(og:title)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_og_title" {...register("meta_og_title")} />
          </div>
          <div className="flex mb-3">
            <label htmlFor='meta_og_url' className="w-48 my-auto">매타태그<br />(og:url)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_og_url" {...register("meta_og_url")} />
          </div>
          <div className="flex mb-3">
            <label htmlFor='meta_og_description' className="w-48 my-auto">매타태그<br />(og:description)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_og_description" {...register("meta_og_description")} />
          </div>
          <div className="flex mb-3">
            <label htmlFor='meta_og_image' className="w-48 my-auto">매타태그<br />(og:image)</label>
            <input className="rounded-md max-w-xl w-full" type="text" id="meta_og_image" {...register("meta_og_image")} />
          </div>
          <div className="mt-10 border border-slate-800">
            <fieldset className="border border-slate-800 m-3">
              <legend className="text-center">메타태그</legend>
              <div>
                - 검색엔진에서 특정 홈페이지나 HTML 문서에 대한 정보를 표현하는 태그입니다. 이 태그를 이용하여
                어떤 페이지가 만들어져있고, 무엇에 관한 페이지인지등에 대한 정보를 간략하게 알 수 있습니다. 포털사이트등에 상위노출을
                목표로 한다면 이것만 잘 설정해주어도 노출이 쉬워집니다.
              </div>
            </fieldset>
          <div className="p-5">
            <div>
              <div>title</div>
              <div>
              - 현재사이트의 제목을 지정하여줍니다. 지정된 제목은 브라우저의 제목표시줄에 표시됩니다.
              </div>
            </div>

            <div>
              <div>author</div>
              <div>
                meta name=&quot;author&quot; content=&quot;요약설명표기가능&quot;
              - 제작자표기 또는 요약설명을 표시합니다.
              </div>
            </div>
            <div>
              <div>Keywords</div>
              <div>
                meta name=&quot;Keywords&quot; content=&quot;키워드&quot;
              - 검색엔진에서 노출가능하도록 방문자가 검색할 키워드를 설정합니다
              </div>
            </div>
            <div>
              <div>Description</div>
              <div>
              meta name=&quot;Description&quot; content=&quot;간략설명&quot;
            - 이 페이지에 대해 간략한 설명을 표시합니다.
              </div>
            </div>
            <div>
              <div>reply-to</div>
              <div>
              meta name=&quot;reply-to&quot; content=&quot;이메일주소&quot;
            - 제작자의 이메일주소를 표시합니다.
              </div>
            </div>
            <div>
              <div>og:type</div>
              <div>
              meta property=&quot;og:type&quot; content=&quot;website&quot;
            - 공유사이트의 타입을 지정합니다
              </div>
            </div>
            <div>
              <div>og:title</div>
              <div>
              meta property=&quot;og:title&quot; content=&quot;happycgi&quot;
            - 공유사이트의 타이틀정보를 입력합니다.
              </div>
            </div>
            <div>
              <div>og:url</div>
              <div>
            meta property=&quot;og:url&quot; content=&quot;happycgi.co.kr&quot;
            - 클릭시 이동할 url정보를 입력합니다.
              </div>
            </div>
            <div>
              <div>og:description</div>
              <div>
              meta property=&quot;og:description&quot; content=&quot;happycgi,cgimall,홈페이지솔루션등&quot;
            - 공유시 타임라인에 보여질 정보를 입력합니다.
              </div>
            </div>
            <div>
              <div>og:image</div>
              <div>
              meta property=&quot;og:image&quot; content=&quot;이미지절대경로&quot;
            - 공유시 보여질 이미지 주소를 입력합니다.
              </div>
            </div>
          </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button htmlType='submit' className="btn mt-5">저장하기</Button>
          </div>
        </Form>

    </aside>
  );
}