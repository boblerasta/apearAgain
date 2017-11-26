// ==UserScript==
// @name appearAgain();
// @namespace liens-telechargement appearAgain();
// @include *://www.liens-telechargement.com/*
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_getMetadata
// @run-at document-start
// @connect *
// ==/UserScript==

setTimeout(function(){document.getElementsByTagName("form")[0].style.display="block"}, 3000);
