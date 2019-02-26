let plugin = {};
plugin.install = function(Vue, options) {
  //首字大写
  function Capital(val) {
    if (!val) return;
    let r = val.split(" ");
    for (let i = 0; i < r.length; i++) {
      r[i] = r[i].slice(0, 1).toUpperCase() + r[i].slice(1, r.length);
    }
    return r.join(" ");
  }

  // 替换字符
  function ReplaceVal(val, param) {
    if (!val) return;
    let r = val;
    let p = param;
    for (let i = 0; i < p.length; i++) {
      if (p[i].isSingle) {
        r = r
          .split(" ")
          .map(x => {
            let n = x.indexOf(p[i].target);
            return (x =
              n == 0 && p[i].target.length == x.length
                ? x.replace(
                    new RegExp(param[i].target, "g"),
                    param[i].replacement
                  )
                : x);
          })
          .join(" ");
      } else {
        r = r.replace(new RegExp(param[i].target, "g"), param[i].replacement);
      }
    }
    return r;
  }

  // 给定默认值
  function PlaceHolder(val, param) {
    let r = !val ? param : val;
    return r;
  }

  // 省略字符
  function Omit(val, param) {
    if (typeof param != "number") console.error("The input must be a number.");
    let r = val;
    r = `${r.substring(0, param)}...`;
    return r;
  }

  // 删除字符
  function Hidden(val, param) {
    if (!param) return val;
    let r = val;
    if (Array.isArray(param)) {
      for (let i = 0; i < param.length; i++) {
        r = r.replace(new RegExp(param[i], "g"), "");
      }
    } else {
      r = r.replace(new RegExp(param, "g"), "");
    }
    return r;
  }

  // 全局挂载
  Vue.filter("Capital", Capital);
  Vue.filter("ReplaceVal", ReplaceVal);
  Vue.filter("PlaceHolder", PlaceHolder);
  Vue.filter("Omit", Omit);
  Vue.filter("Hidden", Hidden);
};
export default plugin;
