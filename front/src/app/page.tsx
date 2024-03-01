import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link href='/'>준비중</Link>
      <br />
      <br />
      <br />

      <Link href={'admin'}>관리자 홈페이지 가기</Link>
    </>
  );
}
