/*
 * @Description:
 * @Autor: yubiao
 * @Date: 2021-06-24 10:58:23
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 14:32:09
 */
import React from "react";
import Logo from "./logo";
import SibMenu from "./menu";
import loginStyle from "../../style.scss";

export default function Sidebar() {
  return (
    <div className={loginStyle.silbar}>
      <Logo
        imgSlot=''
      />
      <SibMenu />
    </div>
  );
}
