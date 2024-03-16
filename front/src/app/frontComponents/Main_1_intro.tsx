"use client"

import { Button, Card } from "antd";

export default function Main_1_intro() {
  return (
    <div className="text-center leading-8">
      <div className="text-4xl mb-4">이장님닷컴</div>
      <div className="text-2xl mb-4">지역의 우수한 농산물과 함께 하는 기업</div>
      <p className="p-4">
        조합원과 함께 우리의 땅에서 재배하고 수확한 농산물을 바탕으로 일자리와 소득을 창출하여   충남 6차산업을 인정받았으며 소득의 일부를 사회에 환원하는 예비사회적기업을 바탕으로 기업을 이어가고 있습니다.
      </p>
      <div className="flex gap-x-2">
        <Card 
          actions={[<Button key='detail'>자세히 보기</Button>]}
          cover={<img src="https://ejangnim.com/dmedi/img/ban1_01.jpg" />}
          >
          <Card.Meta title="냉동딸기" description="결수확 및 매입 한 딸기의 꼭지를 따내고 위생적으로 세척 영하40여도에서 급속냉동하여 맛과향을 최대한 유지" />
        </Card>
        <Card 
          actions={[<Button key='detail'>자세히 보기</Button>]}
          cover={<img src="https://ejangnim.com/dmedi/img/ban1_02.jpg" />}
          >
          <Card.Meta title="과일청" description="결수확 및 매입 한 딸기의 꼭지를 따내고 위생적으로 세척 영하40여도에서 급속냉동하여 맛과향을 최대한 유지" />
        </Card>
       
        <Card 
          actions={[<Button key='detail'>자세히 보기</Button>]}
          cover={<img src="https://ejangnim.com/dmedi/img/ban1_03.jpg" />}
          >
          <Card.Meta title="건나물" description="국내산 나물을 건조하여 3가지로 구성
반나절이상 불려서 먹어야 했던 나물요리를 단 20여분 만에 요리가 가능" />
        </Card>
        <Card 
          actions={[<Button key='detail'>자세히 보기</Button>]}
          cover={<img src="https://ejangnim.com/dmedi/img/ban1_04.jpg" />}
          >
          <Card.Meta title="딸기잼" description="덜어서 먹던 불편함을 짜먹는 튜브형으로 생산, 캠핑 사무실등 휴대성과 위생성등 기존의 방식보다 우수" />
        </Card>
      </div>
    </div>
  );
}