function Tb2(d, t, p, c) {
        for (var i = 1; i <= t; i++) {
            $_2(p + '_t_' + i).className = c + '_2';
            Dh(p + '_c_' + i);
            if (d == i) {
                $_2(p + '_t_' + i).className = c + '_1';
                Ds(p + '_c_' + i);
            }
        }
    }
    function SetHome(obj) {
        var url = window.location.href;
        try { obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(url); }
        catch (e) {
            if (window.netscape) {
                try { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); }
                catch (e) { alert("此操作被浏览器拒绝！您可以换成IE浏览器再设置为首页"); }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage', url);
            }
        }
    }
    //search setting
    function selecttab(obj, moudleid) {
        for (var i = 1; i <= 5; i++)
            $_2("select_" + i).className = "";
        if (obj != null)
            obj.className = "select_a";
        $_2("destoon_moduleid").value = moudleid;
        searchid = moudleid;
        setKW();
    }
    //search model
    function setSearchType(obj, moudleid) {
        Dh("other");
        for (var i = 1; i < 5; i++)
            $_2("select_" + i).className = "";//其他tab
        $_2("select_5").innerHTML = obj.innerHTML;
        $_2("select_5").className = "more_select_ceren";//当前tag
        $_2("destoon_moduleid").value = moudleid;
        var aother = document.getElementsByName("aother");
        for (var i = 0; i < aother.length; i++)
            aother[i].className = "";
        obj.className = "more_ceren";//当前栏目
        searchid = moudleid;
        setKW();
    }
    //tese
    $(function () {
        $('#slides').slides({
            preload: true,
            preloadImage: 'images/loading.gif',
            play: 100000000,
            pause: 500,
            hoverPause: true,
            animationStart: function () {
                $('.caption').animate({
                    bottom: -35
                }, 100);
            },
            animationComplete: function (current) { }
        });
    });
    var tese_old;
    function Tb3(tab) {
        if (tab == 2 && tese_old != 2) {
            $('.next').click()
            $("ts_2").style.color = "red";
            $("ts_1").style.color = "black";
            tese_old = 2
        } else if (tab == 1 && tese_old != 1) {
            $('.prev').click();
            $("ts_1").style.color = "red";
            $("ts_2").style.color = "black";
            tese_old = 1
        }
    }
    function startTS() {
        $('.next').click()
    }
    function tsOver() {
        clearTimeout(ts_timer);
    }
    function tsOut() {
        ts_timer = setInterval("startTS()", 8000);
    }
    tsOut();
