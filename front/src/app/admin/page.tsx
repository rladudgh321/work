import Basic_info from '@/components/Basic_info';
import Board_list from '@/components/Board_list';
import Comment_list from '@/components/Comment_list';
import FAQ_list from '@/components/FAQ_list';

export default function Home() {
  return (
    <>
      <Basic_info />
      <div className="lg:grid grid-cols-2 gap-4 m-4 mt-20">
        <div className="mt-10">
          <FAQ_list />
        </div>
        <div className="mt-10">
          <Comment_list />
        </div>
        <div className="mt-10">
          <Board_list />
        </div>
      </div>
    </>
  );
}
