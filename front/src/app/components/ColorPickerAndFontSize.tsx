import { InputNumber } from 'antd';
import ColorPick from './Color_picker';

interface ColorPickerAndFontSizeProps {
  title: string;
  defaultValue?: string;
}

export default function ColorPickerAndFontSize({title, defaultValue='#f0f0f0'}: ColorPickerAndFontSizeProps) {
  const InputNumberOnChange = (value: number) => {
    console.log('changed', value);
  };
  return (
    <div className="flex p-10 border border-slate-500 my-4">
      <div className="w-60 ">{title}</div>
      <div className="flex gap-4 ">
        <div className="w-10">글자색상</div>
        <ColorPick size="small" defaultValue={defaultValue} />
      </div>
      <div className="flex gap-4 ">
        <div className="w-10">글자크기</div>
        <InputNumber min={10} max={50} defaultValue={17} size="small" onChange={InputNumberOnChange} />
        {'px'}
      </div>
    </div>
  );
}