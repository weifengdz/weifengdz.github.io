jQuery(document).ready(function () {
    ad_switc.Init(".ads");
});
var ad_switc = {
    s:10000,
    Init: function (sls) {
        var ads = jQuery(sls);
        if (ads) {
            for (var i = 0; i < ads.length; i++) {
                var adli = ads[i].children; childcount = adli.length, num = ad_switc.GetRandom(i, childcount), currObj = jQuery(adli[num]);
                currObj.show();
                ad_switc.Switching(adli, childcount);
            }
        }
    },
    Switching: function ($obj, len) {
        var c = 0;
        if (len > 0) {
            setInterval(function () {
                if (len == c)
                    c = 1;
                else
                    c += 1;
                jQuery($obj).hide().eq(c-1).show();
            }, ad_switc.s);
        }
    },
    GetRandom: function (n, l) {
        var random = 0;
        var lastrandom = get_cookie("random" + n);
        if (lastrandom) {
            random = parseInt(lastrandom);
            if (random < (l || n) - 1)
                random = random + 1;
            else
                random = 0;
        }
        else {
            random = Math.floor(Math.random() * n);
        }
        set_cookie("random" + n, random, 1);
        return random;
    }
};
