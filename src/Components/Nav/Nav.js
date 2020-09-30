import React, { useEffect, useState } from "react";
import styled from "styled-components";
import menuData from "./menuData";
import "./Nav.scss";

const Nav = () => {
  const [menu, changeMenu] = useState(menuData);

  const { menuContents, menuValid } = menu;

  const clickMenu = (idx) => {
    console.log(idx);
    let handleMenuDeatail = menuValid;
    handleMenuDeatail[idx] = !handleMenuDeatail[idx];
    console.log(handleMenuDeatail);
    changeMenu({
      ...menu,
      menuValid: handleMenuDeatail,
    });
  };

  useEffect(() => {
    console.log(menu);
  });

  return (
    <div className="Nav">
      <div className="navWrap">
        <div className="menuContainer">
          <div className="iconImg">
            <img alt="logo_img" src="/images/coinone_logo_blue.svg" />
          </div>
          <div className="menuTexts">
            {menuContents.map((menu, idx) => {
              const { id, menuName, menuDetail } = menu;
              return (
                <div
                  onMouseOver={() => clickMenu(idx)}
                  onMouseOut={() => clickMenu(idx)}
                  className="menuTextAndDetail"
                >
                  <div className="menuTextContainer">
                    <MenuStyle key={id}>
                      <span key={id} className="menuText">
                        {menuName}
                      </span>
                    </MenuStyle>
                  </div>
                  <MenuDetailValid validIdx={menuValid[idx]}>
                    <div className="menuDatailContainer">
                      <MenuDetail
                        menuDatil={menuDetail}
                        validIdx={menuValid[idx]}
                      >
                        <ul className="menuDetail">
                          {menuDetail.map((menuDetail) => {
                            return <li>{menuDetail}</li>;
                          })}
                        </ul>
                      </MenuDetail>
                    </div>
                  </MenuDetailValid>
                </div>
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
  cursor: pointer;
  font-weight: 600;
  margin: 10px 10px;
  padding: 0 10px;
  border-radius: 5px;
  &:hover {
    background-color: rgb(229, 249, 255);
  }
`;

const MenuDetailValid = styled.div`
  pointer-events: ${(props) => (props.validIdx ? null : "none")};
`;

const MenuDetail = styled.ul`
  display: ${(props) => (props.menuDatil.length === 0 ? "none" : null)};
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  opacity: ${(props) => (props.validIdx ? 1 : 0)};
  li {
    padding: 10px;
    &:hover {
      cursor: ${(props) => props.validIdx && "pointer"};
      background-color: rgb(229, 249, 255);
    }
  }
`;

export default Nav;
