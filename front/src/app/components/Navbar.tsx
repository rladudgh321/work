import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, ConfigProvider, Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items']= [
  {
    label: '기본설정',
    key: 'master',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '기본 환경설정',
        children: [
          {
            label: <Link href={'/admin/master-setting/setting_site'}>기본 환경설정</Link>,
            key: 'master_1',
          },
          {
            label: <Link href={'/admin/master-setting/map_API_KEY'}>지도 API 설정</Link>,
            key: 'master_2',
          },
          {
            label: <Link href={'/admin/master-setting/naver_taktak'}>네이버톡톡 설정</Link>,
            key: 'master_3',
          },
          {
            label: <Link href={'/admin/master-setting/about-site'}>관련사이트 설정</Link>,
            key: 'master_4',
          },
          {
            label: <Link href={'/admin/master-setting/weather-setting'}>날씨환경설정</Link>,
            key: 'master_5',
          },
          {
            label: <Link href={'/admin/master-setting/meta-tag'}>기본메타태그 관리</Link>,
            key: 'master_6',
          },
        ],
      },
    ],
  },
  {
    label: '검색어설정',
    key: 'search',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '검색 관련 설정',
        children: [
          {
            label: <Link href={'/admin/searching-setting/realtime'}>실시간검색어 설정</Link>,
            key: 'search_a',
          },
          {
            label: <Link href={'/admin/searching-setting/forbidden'}>차단단어 설정</Link>,
            key: 'search_b',
          },
          {
            label: <Link href={'/admin/searching-setting/naver-search-api'}>네이버 검색 API 설정</Link>,
            key: 'search_3',
          },
        ],
      },
    ],
  },
  {
    label: <Link href={'/admin/menu-setting'}>메뉴설정</Link>,
    key: 'menu',
    icon: <SettingOutlined />,
  },
  {
    label: '디자인설정',
    key: 'design',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'pc디자인 설정',
        children: [
          {
            label: <Link href={'/admin/design-setting/pc/type'}>영역별 디자인 설정(PC)</Link>,
            key: 'design_PC_1',
          },
          {
            label: <Link href={'/admin/design-setting/pc/up_banner'}>상단 설정</Link>,
            key: 'design_PC_2',
          },
          {
            label: <Link href={'/admin/design-setting/pc/main-body'}>메인페이지 본문 설정</Link>,
            key: 'design_PC_3',
          },
          {
            label: <Link href={'/admin/design-setting/pc/common'}>공통영역 디자인 설정</Link>,
            key: 'design_PC_4',
          },
          {
            label: <Link href={`/admin/design-setting/pc/down_banner`}>하단 설정</Link>,
            key: 'design_PC_5',
          },
        ],
      },
      {
        type: 'group',
        label: '모바일 설정',
        children: [
          {
            label: <Link href={'/admin/design-setting/mobile/up_banner'}>영역별 디자인 설정(Mobile)</Link>,
            key: 'design_M_M_1',
          },
          {
            label: <Link href={'/admin/design-setting/mobile/up_banner'}>상단 설정</Link>,
            key: 'design_M_2',
          },
          {
            label: <Link href={'/admin/design-setting/mobile/common'}>공통영역 디자인 설정</Link>,
            key: 'design_M_4',
          },
          {
            label: <Link href={`/admin/design-setting/mobile/down_banner`}>하단 설정</Link>,
            key: 'design_M_5',
          },
        ],
      },
    ],
  },
  {
    label: '게시판설정',
    key: 'board',
    icon: <SettingOutlined />,
  },
  {
    label: '문의관리',
    key: 'FAQ',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '문의 관리',
        children: [
          {
            label: '문의 내역',
            key: 'FAQ_1',
          },
          {
            label: '문의 환경설정',
            key: 'FAQ_2',
          },
          {
            label: '문의 입력양식 관리',
            key: 'FAQ_3',
          },
          {
            label: '문자 전송 관리',
            key: 'FAQ_4',
          },
        ],
      },
    ],
  },
  {
    label: '상담자관리',
    key: 'consult',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '상담자관리',
        children: [
          {
            label: '상담자 카테고리 관리',
            key: 'consult_1',
          },
          {
            label: '상담자 관리',
            key: 'consult_2',
          },
          {
            label: '예약 기본설정',
            key: 'consult_3',
          },
        ],
      },
    ],
  },
  {
    label: '광고 및 통계',
    key: 'adandAnalytics',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '광고',
        children: [
          {
            label: '구글 애드센스 광고',
            key: 'ad',
          },
        ],
      },
      {
        type: 'group',
        label: '통계',
        children: [
          {
            label: '구글 Analytics',
            key: 'Analytics',
          },
        ],
      },
    ],
  },
  {
    label: 'SMS관리',
    key: 'SMS',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '기본 환경설정',
        children: [
          {
            label: 'SMS계정 및 발송설정',
            key: 'SMS_1',
          },
          {
            label: 'SMS알림 / 쪽지발송 문자설정',
            key: 'SMS_2',
          },
        ],
      },
    ],
  },
  {
    label: '고급설정',
    key: 'advanced',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '기본 환경설정',
        children: [
          {
            label: '로딩속도와 최신화 조절',
            key: 'advanced_1',
          },
          {
            label: 'HTTPS 설정',
            key: 'advanced_2',
          },
          {
            label: 'IP차단',
            key: 'advanced_3',
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  // const [current, setCurrent] = useState<string>("");

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('Navbar', e);
  //   setCurrent(e.key);
  // };

  return (
    <div>
      <div className="flex flex-row-reverse gap-x-2">
          <Button shape="round" size="small" className="text-[10px]">사이트 돌아가기</Button>
          <Button shape="round" danger={true} size="small" className="text-[10px]" >로그아웃</Button>
      </div>
      <div className="flex mt-0">
        <div className="text-center py-2 px-4 shrink-0 border-gray-800 border-solid border-[1px] my-auto mx-4 bg-gray-600 text-gray-50 font-semibold rounded-md">
          관리자모드
        </div>
        <ConfigProvider
          theme={{
            token: {
              /* here is your global tokens */
              fontSize:12,
              padding: 10
            },
          }}
        >
          {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="w-10/12" /> */}
          <Menu mode="horizontal" items={items} className="w-10/12" />
        </ConfigProvider>
      </div>
    </div>
  );
};