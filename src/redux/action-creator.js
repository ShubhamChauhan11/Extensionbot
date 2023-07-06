import actionConstant from "./action-constant";


export const handleSearchHistory = (data) => ({
  type: actionConstant.SEARCHHISTORY,
  payload: data,
});
export const setEnableChat = (data) => ({
  type: actionConstant.ENABLECHAT,
  payload: data,
});