import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, ConfigProvider, Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items']= [
  {
    label: '회사소개',
    key: 'intro',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: <Link href={'/intro'}>대표 인사말</Link>,
            key: 'intro_1',
          },
          {
            label: <Link href={'/coming'}>오시는 길</Link>,
            key: 'intro_2',
          },
        ],
      },
    ],
  },
  {
    label: <Link href={'business'}>사업분야</Link>,
    key: 'business',
    icon: <SettingOutlined />,
  },
  {
    label: <Link href={'/product'}>제품안내</Link>,
    key: 'product',
    icon: <SettingOutlined />,
  },
  {
    label: <Link href={'contact'}>제품문의</Link>,
    key: 'contact',
    icon: <SettingOutlined />,
  },
];

export default function Navbar() {
  // const [current, setCurrent] = useState<string>("");

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('Navbar', e);
  //   setCurrent(e.key);
  // };

  return (
      <div className="flex my-4">
        <div className="text-center py-2 px-4 shrink-0 border-gray-800 border-solid border-[1px] my-auto mx-4 bg-gray-600 text-gray-50 font-semibold rounded-md">
          그린농장
        </div>
        <ConfigProvider
          theme={{
            token: {
              /* here is your global tokens */
              fontSize:12,
              padding: 10,
              
            },
          }}
        >
          {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="w-10/12" /> */}
          <Menu mode="horizontal" items={items} className="w-full justify-between" />
        </ConfigProvider>
      </div>
  );
};