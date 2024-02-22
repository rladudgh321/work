import Basic_info from './components/Basic_info';
import Board_list from './components/Board_list';
import Comment_list from './components/Comment_list';
import FAQ_list from './components/FAQ_list';

export default function Home() {
  return (
    <>
      <Basic_info />
      <div className="md:grid grid-cols-2 gap-4 m-4">
        <FAQ_list />
        <Comment_list />
        <Board_list />
      </div>
    </>
  );
}
