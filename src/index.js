let plugin = {};
plugin.install = function(Vue, options) {
    //
    function change(val) {
        if (!val) return;
        let r = val.split(" ");
        for (let i = 0; i < r.length; i++) {
            r[i] = r[i].slice(0, 1).toUpperCase() + r[i].slice(1, r.length);
        }
        return r.join(" ");
    }

    // 全局挂载
    Vue.filter("change", change);
};
export default plugin;
