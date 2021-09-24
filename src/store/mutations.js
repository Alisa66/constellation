/*
 * @Author: your name
 * @Date: 2021-09-14 13:39:07
 * @LastEditTime: 2021-09-24 11:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\store\mutation.js
 */
export default {
  setconsName(state, consName) {
    state.consName = consName;
  },
  setFiled(state, filed) {
    state.filed = filed;
  },
  setErrorCode(state, errorCode) {
    state.errorCode = errorCode;
  },
  setData(state, data) {
    state[state.filed] = data;
  },
};
