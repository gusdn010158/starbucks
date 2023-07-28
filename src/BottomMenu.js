import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './BottomMenu.css';

function BottomMenu() {
// // on이 true일때 seton이 false이니까 ontion을 에서 if mouseover을 하면 on 아니면 seton을 해서 mouseover시 클래스이름이 보이고
// //.BottomMenu_coffee>BottomMenu_aa_content display:block가되고 transition:all 2s; overflow:hidden 해서 height:auto로 천천히 보여주게 하는 방법?

// const[display,setDisplay]=useState(false);

// function outMouseDisplay(index){
//     let newDisplay=[...display];
//     newDisplay[index]=true;
//     setDisplay(newDisplay);
// }

//bottomaa를 hover시 coffee의 이름은 on이 되고 bottommenu_aa_content는 display:block이 되게 한다.

    return (
        <div className ="BottomMenu">

            <div className="Bottom_aa">
           <h2>
           <a href="/coffee/index.do" class="">COFFEE</a>
           </h2>
            <div className="BottomMenu_aa_content">
                <ul className="content_a"><h4>커피</h4>
                <li>스타벅스 원두</li>
                <li>스타벅스 비아</li>
                <li>스타벅스엣홈by캡슐</li>
                <li>나와 어울리는 커피</li>
                </ul>
                <ul className="content_b"><h4>커피 이야기</h4>
                <li>농장에서 우리손으로</li>
                <li>최상의 아라비카 원두</li>
                <li>스타벅스 로스트 스펙트럼</li>
                <li>스타벅스 디카페인</li>
                </ul>
                <ul className="content_c"><h4>스타벅스 리저브</h4>
                <li>RESERVE MAGAZINE</li>
                </ul>
                <ul className="content_d"><h4>에스프레소 음료</h4>
                <li>도피오</li>
                <li>에스프레소 마끼아또</li>
                <li>아메리카노</li>
                <li>마키아또</li>
                <li>카푸치노</li>
                <li>라떼</li>
                <li>모카</li>
                </ul>
                <ul className="content_e"><h4>최상의 커피를 즐기는 법</h4>
                <li>커피 프레스</li>
                <li>푸어 오버</li>
                <li>커피 푸어 오버</li>
                <li>커피 메이커</li>
                </ul>
            </div>
            </div>
        
<div class="Bottom_bb">        
    <Link to="/">
        <div className="BottomMenu_menu">MENU</div>
        </Link>
        <div className="BottomMenu_bb_content">
                <ul className="content_a"><h4>음료</h4>
                <li>콜드블루</li>
                <li>에스프레소</li>
                <li>카푸치노</li>
                <li>티</li>
                <li>기타제조음료</li>
                </ul>
                <ul className="content_b"><h4>푸드</h4>
                <li>브레드</li>
                <li>케이크</li>
                <li>샌드위치</li>
                <li>따듯한 음료</li>
                <li>아이스크림</li>
                </ul>
                <ul className="content_c"><h4>상품</h4>
                <li>머그</li>
                <li>글라스</li>
                <li>텀블러</li>
                <li>보온병</li>
                </ul>
                <ul className="content_d"><h4>카드</h4>
                <li>실물 카드</li>
                </ul>
                <ul className="content_e"><h4>메뉴 이야기</h4>
                <li>나이트로 콜드블루</li>
                <li>콜드블루</li>
                </ul>
            </div>
        </div>

        <div class="Bottom_cc">
        <Link to="/">
        <div className="BottomMenu_store">STORE</div>
        </Link>
        <div className="BottomMenu_cc_content">
                <ul className="content_a"><h4>매장 찾기</h4>
                <li>퀵 검색</li>
                <li>지역 검색</li>
                </ul>
                <ul className="content_b"><h4>드라이브 스루 매장</h4></ul>
                <ul className="content_c"><h4>스타벅스 리저브 매장</h4></ul>
                <ul className="content_d"><h4>커뮤니티 스토어 매장</h4></ul>
                <ul className="content_e"><h4>매장 이야기</h4>
                <li>티바나 바 매장</li>
                </ul>
            </div> 
        </div>

        <div class="Bottom_dd">
        <Link to="/">
        <div className="BottomMenu_pesponsibility">PESPONSIBILITY</div>
        </Link>
        <div className="BottomMenu_dd_content">
                <ul className="content_a"><h4>사회공헌 캠페인 소개</h4>
                </ul>
                <ul className="content_b"><h4>지역 사회 참여 활동</h4>
                <li>희망배달 캠페인</li>
                <li>커뮤니티 스토어</li>
                <li>우리 문화 지키기</li>
                </ul>
                <ul className="content_c"><h4>환경 보호 활동</h4>
                <li>친환경 활동</li>
                <li>일회용컵 없는 매장</li>
                <li>커피 원두 재활용</li>
                </ul>
                <ul className="content_d"><h4>윤리 구매</h4>
                <li>윤리적 원두 구매</li>
                <li>공정 무역 인증</li>
                <li>커피 농가 지원 활동</li>
                
                </ul>
                <ul className="content_e"><h4>글로벌 사회 공헌</h4>
                <li>윤리경영 보고서</li>
                <li>스타벅스 재단</li>
                <li>지구촌 봉사의 달</li>
                
                </ul>
            </div> 
        </div>

        <div class="Bottom_ee">
        <Link to="/">
        <div className="BottomMenu_rewards">STARBUCKS REWARDS</div>
        </Link>
        <div className="BottomMenu_ee_content">
                <ul className="content_a"><h4>스타벅스 리워드</h4>
                <li>스타벅스 리워드 소개</li>
                <li>스타벅스 별</li>
                <li>자주 하는 질문</li>
                </ul>
                <ul className="content_b"><h4>스타벅스 카드</h4>
                <li>등록 및 조회</li>
                <li>충전 및 이용 안내</li>
                <li>분실신고</li>
                <li>자주 하는 질문</li>
                
                </ul>
                <ul className="content_c"><h4>스타벅스 e-gift card</h4>
                <li>이용 안내</li>
                <li>선물하기</li>
                <li>자주 하는 질문</li>
                
                </ul>
            </div> 
        </div>

        <div class="Bottom_ff">
        <Link to="/">
        <div className="BottomMenu_corporate">CORPORATE SALES</div>
        </Link>
        <div className="BottomMenu_ff_content">
                <ul className="content_a"><h4>단체 및 기업 구매 안내</h4>
                </ul>
                <ul className="content_b"><h4>단체 주문 배달 안내</h4>
                <li>단체 주문 배달 안내</li>
                <li>단체 주문 신청</li>
                <li>신청 내역 조회</li>
                
                </ul>
            </div> 
        </div>

        <div class="Bottom_gg">
        <Link to="/">
        <div className="BottomMenu_news">WHAT'S NEWS</div>
        </Link>
        <div className="BottomMenu_gg_content">
                <ul className="content_a"><h4>이벤트</h4>
                <li>전체</li>
                <li>스타벅스 카드</li>
                <li>스타벅스 리워드</li>
                <li>온라인</li>
                
                </ul>
                <ul className="content_b"><h4>뉴스</h4>
                <li>전체</li>
                <li>상품 출시</li>
                <li>스타벅스와 문화</li>
                <li>스타벅스 사회 공헌</li>
                <li>스타벅스 카드 출시</li>
                
                </ul>
                <ul className="content_c"><h4>매장별 이벤트</h4>
                <li>일반 매장</li>
                <li>신규 매장</li>
                </ul>
                <ul className="content_d"><h4>e-프리퀀시</h4>
               
                </ul>
                <ul className="content_e"><h4>공지사항</h4></ul>
            </div> 
        </div>

    </div>
    );
}

export default BottomMenu;