/*
 * @Author: your name
 * @Date: 2021-09-14 16:24:37
 * @LastEditTime: 2021-09-16 16:28:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\assets\js\common.js
 */
import FastClick from "./fastclick";

document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";

window.addEventListener(
  "load",
  function() {
    FastClick.attach(document.body);
  },
  false
);

document.documentElement.addEventListener(
  "touchmove",
  function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  false
);
