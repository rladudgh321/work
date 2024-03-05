import React from 'react';
import { ColorPicker, Space } from 'antd';

interface ColorPickerProps {
  size?: 'small' | 'large';
  defaultValue: string; // #1677ff
}

export default function ColorPick({size, defaultValue}:ColorPickerProps) {
  return (
    <div>
      <Space direction="vertical">
        <ColorPicker defaultValue={defaultValue} size={size} showText />
      </Space>
    </div>
  );
}
