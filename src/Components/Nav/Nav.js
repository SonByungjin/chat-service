import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Nav.scss";

const Nav = () => {
  const [menu, changeMenu] = useState({
    id: 0,
    menuContents: [],
  });
  const { id, menuContents } = menu;

  const clickMenu = (idx) => {
    console.log(idx);
  };

  const getDataInitial = () => {
    changeMenu({
      ...menu,
      menuContents: [
        ...menuContents,
        "간편구매",
        "거래소",
        "프로차트",
        "자산",
        "코인정보",
        "플러스",
      ],
    });
  };

  useEffect(() => {
    getDataInitial();
  }, []);

  return (
    <div className="Nav">
      <div className="navWrap">
        <div className="menuContainer">
          <div className="iconImg">
            <img src="https://coinone.co.kr/common/assets/images/coinone_logo/coinone_logo_blue.svg" />
          </div>
          <div className="menuTexts">
            {menuContents.map((menuContent, idx) => {
              return (
                <MenuStyle>
                  <span key={idx} className="menuText">
                    {menuContent}
                  </span>
                </MenuStyle>
              );
            })}
          </div>
        </div>
        <div className="userInfo">
          <span>회원가입</span>
          <span>로그인</span>
        </div>
      </div>
    </div>
  );
};

const MenuStyle = styled.span`
  font-weight: 600;
  margin 0 20px
`;

export default Nav;
