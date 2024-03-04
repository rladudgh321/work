import React from 'react';
import { ColorPicker, Space } from 'antd';

interface ColorPickerProps {
  size?: 'small' | 'large';
  defaultValue: string;
}

export default function ColorPicker({size, defaultValue}:ColorPickerProps) (
  return (
    <Space>
      <Space direction="vertical">
        <ColorPicker defaultValue="#1677ff" size="small" />
        <ColorPicker defaultValue="#1677ff" />
        <ColorPicker defaultValue="#1677ff" size="large" />
      </Space>
      <Space direction="vertical">
        <ColorPicker defaultValue="#1677ff" size={size} showText />
      </Space>
    </Space>
  );
);
