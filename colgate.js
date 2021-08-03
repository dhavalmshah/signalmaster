function _mybot(d, w, c) {
    if (!d.getElementById("spd-busns-spt")) {
        var n = d.getElementsByTagName('script')[0], s = d.createElement('script');
        var loaded = false; s.id = "spd-busns-spt"; s.async = "async"; s.setAttribute("data-self-init", "false"); s.setAttribute("data-init-type", "opt");
        s.src = 'https://cdn.in-freshbots.ai/assets/share/js/freshbots.min.js'; s.setAttribute("data-client", "b4fcd850f578cd74c6c01eeb875eaefd1b7b2c83");
        s.setAttribute("data-bot-hash", "ee9b0270bd3fc684d4b28d42304fcd40f599d1e0"); s.setAttribute("data-env", "prod"); s.setAttribute("data-region", "in");
        if (c) { s.onreadystatechange = s.onload = function () { if (!loaded) { c(); } loaded = true; }; } n.parentNode.insertBefore(s, n);
    }
}

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        console.log(document.readyState);
        _mybot(document, window, function () { Freshbots.initiateWidget({ autoInitChat: false, getClientParams: function () { return { "sn::cstmr::id": "" }; } }, function (successResponse) { }, function (errorResponse) { }); });
    }
}, 100);
