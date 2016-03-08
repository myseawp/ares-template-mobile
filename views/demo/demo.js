'use strict';

require.config(__FRAMEWORK_CONFIG__);

require.async(['ares-basic','jquery'], function (Ares, $) {
    var _app = {
        init: function () {
            $('.ui-list li,.ui-tiled li').click(function () {
                var href = $(this).data('href');
                if (href) {
                    Ares.Page.load(href);
                }
            });
            $('.ui-header .ui-btn').click(function () {
                Ares.Page.load('index.html');
            });

            //searchbar
            $('.ui-searchbar').click(function(){
                $('.ui-searchbar-wrap').addClass('focus');
                $('.ui-searchbar-input input').focus();
            });
            $('.ui-searchbar-cancel').click(function(){
                $('.ui-searchbar-wrap').removeClass('focus');
            });

            //显示菜单
            $('.ui-actionsheet').addClass('show');

        }
    };

    Ares.ready(function () {
        _app.init();
    });

});

