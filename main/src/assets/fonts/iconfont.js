!(function (e) {
  var t,
    c,
    l,
    n,
    o,
    i,
    d =
      '<svg><symbol id="iconscreen-exit" viewBox="0 0 1024 1024"><path d="M365.15043555 182.98538667c-0.97052445-8.00995555-10.80092445-11.40849778-16.50460444-5.70481778l-53.03637333 53.03637333L133.34755555 68.17564445c-3.76263111-3.76263111-9.95214222-3.76263111-13.71363555 0l-51.45827555 51.33653333c-3.76263111 3.76263111-3.76263111 9.95214222 0 13.71363555l162.26190222 162.26304-53.27758222 53.27758222c-5.70481778 5.70481778-2.30627555 15.53521778 5.70368 16.50574223L377.28711111 388.20977778c6.18951111 0.72817778 11.52910222-4.49080889 10.80092444-10.80092445l-22.9376-194.42346666z m12.25841778 452.92657778l-194.54520888 22.9376c-8.00995555 0.97052445-11.40849778 10.80092445-5.70368 16.50460444l53.27758222 53.27872L68.17564445 890.65244445c-3.76263111 3.76263111-3.76263111 9.95214222 0 13.71363555l51.45827555 51.33653333c3.76149333 3.76263111 9.95100445 3.76263111 13.71363555 0l162.26190223-162.14016 53.03637333 53.03523556c5.70368 5.70368 15.53408 2.30627555 16.50460444-5.70368l22.9376-194.30286222c0.72817778-6.18951111-4.48967111-11.40736-10.67918222-10.67918222z m269.18229334-247.8239289l194.54520888-22.9376c8.00995555-0.97052445 11.40849778-10.80092445 5.70368-16.50460444l-53.27758222-53.15697778L955.82435555 133.34755555c3.76263111-3.76263111 3.76263111-9.95214222 0-13.71363555l-51.45827555-51.33653333c-3.76149333-3.76263111-9.95100445-3.76263111-13.71363555 0l-162.26190223 162.01955555-53.03637333-53.03637333c-5.70368-5.70368-15.53408-2.30513778-16.50460444 5.70481778L635.91196445 377.28711111c-0.72817778 6.31125333 4.48967111 11.52910222 10.67918222 10.80092444z m146.97130666 340.42311112l53.27758222-53.27758222c5.70481778-5.70481778 2.30627555-15.53521778-5.70368-16.50574223L646.71288889 635.79022222c-6.18951111-0.72817778-11.52910222 4.49080889-10.80092444 10.80092445l22.9376 194.42346666c0.97052445 8.00995555 10.80092445 11.40849778 16.50460444 5.70481778l53.03637333-53.03637333L890.65244445 955.82435555c3.76263111 3.76263111 9.95214222 3.76263111 13.71363555 0l51.45827555-51.33653333c3.76263111-3.76263111 3.76263111-9.95214222 0-13.71363555L793.56245333 728.51114667z"  ></path></symbol><symbol id="iconscreen-full" viewBox="0 0 1024 1024"><path d="M224.6125037 155.22565689l56.83063467-56.83063467c6.08392533-6.08392533 2.45881363-16.56968533-6.08513896-17.60612504l-207.38503111-24.46677333c-6.60214518-0.77672297-12.29770903 4.79019615-11.52098608 11.5221997l24.46677333 207.38503112c1.03522608 8.54395259 11.52098608 12.16785067 17.60612504 6.08392533l56.57091793-56.57091792 173.07936237 172.949504c4.01347318 4.01347318 10.61561837 4.01347318 14.62909156 0l54.88761363-54.7589689c4.01347318-4.01225955 4.01347318-10.61440475 0-14.62787793L224.6125037 155.22565689z m456.58324385 242.46620919c4.01347318 4.01347318 10.61561837 4.01347318 14.62909156 0L868.90420148 224.74236208l56.57091793 56.57091792c6.08513897 6.08392533 16.57089897 2.46002725 17.60612504-6.08392533l24.46677333-207.25638637c0.77672297-6.60214518-4.79019615-12.29770903-11.52098608-11.52098608l-207.38503111 24.46677333c-8.54395259 1.03522608-12.1690643 11.52098608-6.08513896 17.60612504l56.83063467 56.82942104-173.07936238 172.82085926c-4.01347318 4.01347318-4.01347318 10.61561837 0 14.62909156l54.88761363 54.88761363zM943.08124445 748.77064533c-1.03522608-8.54395259-11.52098608-12.16785067-17.60612504-6.08392533l-56.57091793 56.57091792-173.07936237-172.949504c-4.01347318-4.01347318-10.61561837-4.01347318-14.62909156 0l-54.88761363 54.7589689c-4.01347318 4.01225955-4.01347318 10.61440475 0 14.62787793L799.3874963 868.77434311 742.55686163 925.60497778c-6.08392533 6.08392533-2.45881363 16.56968533 6.08513896 17.60612504l207.38503111 24.46677333c6.60214518 0.77672297 12.29770903-4.79019615 11.52098608-11.5221997l-24.46677333-207.38503112zM342.80425245 626.30813392c-4.01347318-4.01347318-10.61561837-4.01347318-14.62909156 0L155.09579852 799.25763792l-56.57091793-56.57091792c-6.08513897-6.08392533-16.57089897-2.46002725-17.60612504 6.08392533l-24.46677333 207.25638637c-0.77672297 6.60214518 4.79019615 12.29770903 11.52098608 11.52098608l207.38503111-24.46677333c8.54395259-1.03522608 12.1690643-11.52098608 6.08513896-17.60612504l-56.83063467-56.7007763 173.07936238-172.949504c4.01347318-4.01347318 4.01347318-10.61561837 0-14.62909156l-54.88761363-54.88761363z"  ></path></symbol></svg>',
    s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss");
  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function a() {
    o || ((o = !0), l());
  }
  (t = function () {
    var e, t, c, l;
    ((l = document.createElement("div")).innerHTML = d),
      (d = null),
      (c = l.getElementsByTagName("svg")[0]) &&
        (c.setAttribute("aria-hidden", "true"),
        (c.style.position = "absolute"),
        (c.style.width = 0),
        (c.style.height = 0),
        (c.style.overflow = "hidden"),
        (e = c),
        (t = document.body).firstChild
          ? ((l = e), (c = t.firstChild).parentNode.insertBefore(l, c))
          : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((c = function () {
            document.removeEventListener("DOMContentLoaded", c, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", c, !1))
      : document.attachEvent &&
        ((l = t),
        (n = e.document),
        (o = !1),
        (i = function () {
          try {
            n.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(i, 50);
          }
          a();
        })(),
        (n.onreadystatechange = function () {
          "complete" == n.readyState && ((n.onreadystatechange = null), a());
        }));
})(window);
