/*! [BUILD VERSION] - 25.2.0 - Tue Mar 11 2025 06:45:48 GMT+0000 (Coordinated Universal Time) */
!function() {
  function t(t) {
      t.replaceWith('<div class="'.concat(t.attr("class"), '" id="').concat(t.attr("id"), '">').concat(t.html(), "</div>"))
  }
  $(document).ready((function() {
      $(".card .tile--simulate-links").each((function(i, n) {
          var e, a, c = $(n), r = c.find(".tile-title-link"), l = function(t) {
              if (t.attr("id"))
                  return t.attr("id");
              return window.cardTitleCounter = void 0 !== window.cardTitleCounter ? window.cardTitleCounter + 1 : 0,
              "card-title-id-".concat(window.cardTitleCounter, "-").concat(Math.floor(1e6 * Math.random()))
          }(c.find(".tile-title")), o = c.find(".tile-image-link"), d = c.find(".cta-wrapper a"), f = [];
          r.length > 0 && (e = r.attr("href")),
          o.length > 0 && (a = o.attr("href")),
          d.length > 0 && d.each((function(t, i) {
              f.push($(i).attr("href"))
          }
          )),
          o.length > 0 && (void 0 !== e || f.length > 0) && a === e && -1 !== f.indexOf(a) && t(o),
          r.length > 0 && f.length > 0 && -1 !== f.indexOf(e) && t(r),
          setTimeout((function() {
              d.each((function(t, i) {
                  var n = $(i)
                    , a = c.find(".tile-title-link, .tile-image-link")
                    , r = n.attr("href")
                    , o = n.attr("id") || "anchor-".concat(t, "-").concat(l)
                    , d = c.find(".tile-title");
                  d.length > 0 && (d.attr("id", l),
                  n.attr("id", o),
                  n.attr("aria-labelledby", "".concat(o, " ").concat(l))),
                  e === r && (a.css("cursor", "pointer"),
                  a.on("click", (function() {
                      n.get(0).click()
                  }
                  )))
              }
              ))
          }
          ))
      }
      ))
  }
  ))
}();
//# sourceMappingURL=bundle.min.js.map
