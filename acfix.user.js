// ==UserScript==
// @name        AcFix
// @namespace   www
// @description 基於AcFun Fix, 0.0.0.1版修改,個人學習用
// @description 原版:http://www.talkshowcn.com/js/acfunfix.html
// @include     *://www.acfun.tv/v/*
// @include     http://acfun.tv/v/*
// @include     http://hengyang.acfun.tv/v/*
// @include     http://wenzhou.acfun.tv/v/*
// @include     *://acfun.tudou.com/v/*
// @version     0.0.0.0.1
// @author      bj
// @grant       none
// @run-at      document-end
// ==/UserScript==
(function ($) {
    window._doFix = function () {
        var f = document.createElement('script');
        f.type = 'text/javascript';
        f.src = 'https://rawgit.com/bjjjj/acfix/master/acfix.js?ran=' + new Date().getTime();
        document.body.appendChild(f);
        //直接加载远程脚本，防止本地脚本失效。
    };
    window._waitPlayer = function () {
        if (document.getElementById('ACFlashPlayer-re') && window.$) {
            clearInterval(_waitInt);
            _doFix();
        }
    };
    _waitInt = setInterval('_waitPlayer()', 500);
}) (function ($) {
    return document.querySelector($);
});
