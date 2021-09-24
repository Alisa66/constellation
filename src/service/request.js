/*
 * @Author: your name
 * @Date: 2021-09-14 14:37:06
 * @LastEditTime: 2021-09-24 10:29:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\service\request.js
 */

import { axiosGet } from "../libs/http";
function getData(consName, type) {
  return new Promise((resolve, reject) => {
    //  console.log(JSON.stringify(consName) );
    axiosGet({
      url: `/api/constellation/getAll?consName=${consName}&type=${type}`,
      success(res) {
        resolve(res.data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}
export { getData };
