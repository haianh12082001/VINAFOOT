f = function (t) {
    var n = !1;
    if (e.const.ANIMATED_LIST.forEach(function (e) {
        t.classList.contains(e) && (n = !0)
    }),
        n) {
        var r = t.getElementsByClassName("ladipage-animated-words-wrapper")[0];
        if (!e.isEmpty(r)) {
            var o = e.isEmpty(r.getAttribute("data-word")) ? [] : JSON.parse(r.getAttribute("data-word"));
            if (0 != o.length) {
                var l = r.textContent.trim();
                if (r.textContent = "",
                    r.innerHTML = r.innerHTML + '<b class="is-visible">' + l + "</b>",
                    o.forEach(function (t) {
                        e.isEmpty(t) ? r.innerHTML = r.innerHTML + "<b>" + l + "</b>" : r.innerHTML = r.innerHTML + "<b>" + t.trim() + "</b>"
                    }),
                    !e.isEmpty(e.findAncestor(r, "type")) || !e.isEmpty(e.findAncestor(r, "loading-bar")) || !e.isEmpty(e.findAncestor(r, "clip"))) {
                    r.innerHTML = r.innerHTML + '<div class="after"></div>';
                    for (var s = getComputedStyle(r).color, c = r.getElementsByClassName("after"), u = 0; u < c.length; u++)
                        c[u].style.setProperty("background-color", s)
                }
                if (t.classList.contains("type") && r.classList.add("waiting"),
                    (t.classList.contains("type") || t.classList.contains("rotate-2") || t.classList.contains("rotate-3") || t.classList.contains("scale")) && t.classList.add("letters"),
                    function (t) {
                        for (var i = 0; i < t.length; i++) {
                            var a = t[i]
                                , n = a.textContent.trim().split("")
                                , r = a.classList.contains("is-visible");
                            for (var o in n) {
                                " " == n[o] && (n[o] = "&nbsp;");
                                var l = e.findAncestor(a, "rotate-2");
                                e.isEmpty(l) || (n[o] = "<em>" + n[o] + "</em>"),
                                    n[o] = r ? '<i class="in">' + n[o] + "</i>" : "<i>" + n[o] + "</i>"
                            }
                            var s = n.join("");
                            a.innerHTML = s,
                                a.style.setProperty("opacity", 1)
                        }
                    }(document.querySelectorAll(".letters b")),
                    t.classList.contains("loading-bar"))
                    d = i,
                        e.runTimeout(function () {
                            r.classList.add("is-loading")
                        }, a);
                else if (t.classList.contains("clip")) {
                    var p = r.clientWidth + 5;
                    r.style.setProperty("width", p + "px")
                }
                e.runTimeout(function () {
                    _(t.getElementsByClassName("is-visible")[0])
                }, d)
            }
        }
    }
}, h = document.getElementsByClassName("ladipage-animated-headline"), v = 0; v < h.length; v++)
f(h[v])
}(),