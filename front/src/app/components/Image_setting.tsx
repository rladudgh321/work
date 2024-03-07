"use client"

import { Button, Form } from "antd";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import UploadImage from "@/components/UploadImage";

interface Image_settingProps {
  title: string;
  recommendSize: string;
}

export default function Image_setting({title, recommendSize}:Image_settingProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
      <div className="md:max-w-4xl mx-auto mt-10">
        <div>
          <div className="border border-slate-600 mt-10">
            <div className="flex">
                <div className="w-40 text-center my-auto">{title}</div>
                <div>
                  <UploadImage />
                  <div>권장 이미지 사이즈 {recommendSize}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}