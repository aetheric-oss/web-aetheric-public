import { onLoad } from "#imports";

export default () => {
  onLoad(() => {
    window.smartlook ||
      (function (d) {
        var o = (smartlook = function () {
            o.api.push(arguments);
          }),
          h = d.getElementsByTagName('head')[0];
        var c = d.createElement('script');
        o.api = new Array();
        c.async = true;
        c.type = 'text/javascript';
        c.src = 'https://web-sdk.smartlook.com/recorder.js';
        h.appendChild(c);
      })(document);

    smartlook('init', '3d8cc3fad36fd64fa8461c440815b246c3b75961', {
      region: 'eu',
    });
  });
};
