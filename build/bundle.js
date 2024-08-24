(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BMapLoader = factory());
})(this, (function () { 'use strict';

  class BMapLoader {
    static load({ version = "1.0", type = "webgl", ak = "" }) {
      if (!window) return null;
      if (typeof BMapGL !== "undefined") {
        return null;
      }
      return new Promise((resolve, reject) => {
        window.bmap_js_loader_callback = () => {
          resolve(window.BMapGL);
        };
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://api.map.baidu.com/api?v=${version}&&type=${type}&ak=${ak}&callback=bmap_js_loader_callback`;
        document.head.appendChild(script);
      });
    }
  }

  return BMapLoader;

}));
