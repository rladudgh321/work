// export default function MainPage() {
//   return (
//     <main className="min-h-[90vh] text-center mx-auto relative">
//       <div className="w-screen m-0 p-0 absolute">
//         <div className="min-h-full  h-[82vh] -z-10 bg-[url('https://ejangnim.com/dmedi/img/vi_04.jpg')] bg-center bg-no-repeat" />
//       </div>
//     </main>
//   );
// }

// ----------
import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function MainPage(){
  return (
  <main className="min-h-[90vh] text-center mx-auto relative">
    <Carousel autoplay className="w-screen m-0 p-0 absolute min-h-[90vh]">
      <div className='min-h-[90vh]'>
        <h3 style={contentStyle}>
        <div className="min-h-full  h-[82vh] -z-10 bg-[url('https://ejangnim.com/dmedi/img/vi_04.jpg')] bg-center bg-no-repeat" />
        </h3>
      </div>
      <div className='min-h-[90vh]'>
        <h3 style={contentStyle}>
        <div className="min-h-full  h-[82vh] -z-10 bg-[url('https://ejangnim.com/dmedi/img/vi_01.jpg')] bg-center bg-no-repeat" />
        </h3>
      </div>
      <div className='min-h-[90vh]'>
        <h3 style={contentStyle}>
        <div className="min-h-full  h-[82vh] -z-10 bg-[url('https://ejangnim.com/dmedi/img/vi_02.jpg')] bg-center bg-no-repeat" />
        </h3>
      </div>
      <div className='min-h-[90vh]'>
        <h3 style={contentStyle}>
        <div className="min-h-full  h-[82vh] -z-10 bg-[url('https://ejangnim.com/dmedi/img/vi_03.jpg')] bg-center bg-no-repeat" />
        </h3>
      </div>
    </Carousel>
  </main>
  );
}