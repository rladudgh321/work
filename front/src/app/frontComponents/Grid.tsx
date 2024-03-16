export default function Grid() {
  return (
    <div className="grid grid-cols-4 gap-2 my-8">
      <div className="border border-slate-500 col-span-2 row-span-2 bg-[url('https://ejangnim.com/dmedi/img/ban1_01.jpg')] bg-cover min-h-[600px] min-w-[600px] bg-center" />
      <div className="border border-slate-500 bg-[url('https://ejangnim.com/dmedi/img/ban1_02.jpg')] bg-cover" />
      <div className="border border-slate-500 bg-[url('https://ejangnim.com/dmedi/img/ban1_03.jpg')] bg-no-repeat bg-cover" />
      <div className="border border-slate-500 col-span-2 bg-[url('https://ejangnim.com/dmedi/img/ban1_04.jpg')] bg-no-repeat bg-cover" />
    </div>
  );
}