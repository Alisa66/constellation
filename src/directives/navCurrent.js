
/*
 * @Author: your name
 * @Date: 2021-09-23 14:07:01
 * @LastEditTime: 2021-09-23 14:36:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation\src\directives\navCurrent.js
 */
export default{
    mounted(el,binding){
      const {className,activeClass,curIdx} = binding.value,
            oNavItems = el.getElementsByClassName(className);
            
     oNavItems[curIdx].className += ` ${activeClass}`;

    },
    updated(el,binding){
        const {className,activeClass,curIdx} = binding.value,
                oOptions = binding.oldValue,
                oNavItems = el.getElementsByClassName(className);

                oNavItems[curIdx].className += ` ${activeClass}`;
                oNavItems[oOptions.curIdx].className = className;
    }

}