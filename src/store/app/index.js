import defaultSettings from "@/settings.js";

const { navTitle } = defaultSettings;

const defaultState = {
  sidebarLogo: localStorage.getItem("basicshowLogo") ? localStorage.getItem("basicshowLogo") : 1, // 获取角色权限,
  localName: "",
  navTitle: ""
}

export const changehostName = (data) => ({
  type: 'CHANGE_HOSTNAME',
  localName: data,
})

export const changeShowLogo = (data) => ({
  type: 'CHANGE_SHOWLOGO',
  sidebarLogo: data,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_SHOWLOGO':
      return {...state, sidebarLogo: action.sidebarLogo}
    case 'CHANGE_HOSTNAME':
      return {...state, localName: action.localName, navTitle: navTitle[action.localName]}
    default:
      return state
  }
}
export {
  reducer
}