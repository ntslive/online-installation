(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-6061419-3', 'auto');

function handleVideos() {
    let video1 =  document.getElementById('video1');
    let video2 =  document.getElementById('video2');
    let video3 =  document.getElementById('video3');
}

$(document).ready(function() {
    let $overlay = $("#overlay");
    ga('send', 'pageview', window.location.pathname);

    $('#text-handler').click(function() {
        $overlay.removeClass('desktop-hidden');
    });

    $('#hide-handler').click(function() {
        $overlay.addClass('desktop-hidden');
    });


});

