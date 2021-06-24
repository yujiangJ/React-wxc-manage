/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-24 11:31:11
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 14:28:29
 */
import loginStyle from "../../style.scss";
import { useSelector } from "react-redux";
import imgUrlJSON from "@/assests/iconUrl.js";

export default function Logo(props) {
  const { logo } = useSelector((state) => ({
    logo: state.user.logo,
  }));
  const showLog = (props) => {
    if(props.imgSlot) {
      return props.imgSlot
    } else {
      return  <img
      src={!logo ? imgUrlJSON.noLogo : logo}
      className={loginStyle.sidebarLogo}
      alt=""
    />
    }
  }
  return (
    <div className={loginStyle.sidebarLogoContainer}>
      <div className={loginStyle.sidebarLogoLink}>
        {showLog(props)}
      </div>
    </div>
  )
}