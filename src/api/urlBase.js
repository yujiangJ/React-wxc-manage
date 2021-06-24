/*
 * @Description: '接口基础封装'
 * @Autor: yubiao
 * @Date: 2021-06-22 10:25:21
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-22 10:54:34
 */
export const BASE_URL = "martech-basic-platform";
export const CRM_BASE_URL = "martech-crm";

// 请求的是平台那边的接口地址
export const PORT_BASE_URL = "prot";

export const marketingPage = {
  tableUrl: `${BASE_URL}/tenant/v1/tenant-page`,
  contractTableUrl: `${BASE_URL}/contract/v1/contract-page`,
  roleTableUrl: `${BASE_URL}/role/v1/role-page`,
  crmFollowUp: `${CRM_BASE_URL}/crm/customer/v1/find`,
  personnel: `${BASE_URL}/user/v1/user-page`,
  getApplication: `${PORT_BASE_URL}/application/page`, // 外部应用列表
  getTenantProduct: `${PORT_BASE_URL}/tenant/manage/product/page`,
  getAllCategory: `${PORT_BASE_URL}/category/queryAllCategory/1.0`,
  getAbilityTenant: `${PORT_BASE_URL}/openApi/ability/tenant`, // 推送能力列表
  getDetailAbility: `${PORT_BASE_URL}/application/product/page`, // 详情推送能力列表
  getAgain: `${BASE_URL}/estate-sale/v1/estate-stage-page` // 分期列表
};
