export default function Footer() {
  return (
    <footer className="p-8">
      <div className="flex gap-x-4">
        <div>홈</div>
        <div>회사소개</div>
        <div>이용약관</div>
        <div>개인정보처리</div>
        <div>이용안내</div>
      </div>
      <div className="flex gap-x-4">
        <div>상호명: 그린농장</div>
        <div>대표자: 권현주</div>
        <div>사업자 등록번호 안내: [000-00-00000]</div>
        <div>사업자정보확인</div>
      </div>
      <div className="flex gap-x-4">
        <div>통신판매업신고</div>
        <div>주소: 대전광역시</div>
      </div>
      <div className="flex gap-x-4">
        <div>개인정보책임자: 권현주</div>
        <div>전화: 010-1234-5678</div>
        <div>팩스: 042-623-1234</div>
      </div>
      <div>Copyright © 2024 그린농장. All rights reserved</div>
    </footer>
  );
}