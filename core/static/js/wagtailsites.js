!function t(e,n,o){function a(r,l){if(!n[r]){if(!e[r]){var u="function"==typeof require&&require;if(!l&&u)return u(r,!0);if(i)return i(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[r]={exports:{}};e[r][0].call(s.exports,function(t){var n=e[r][1][t];return a(n?n:t)},s,s.exports,t,e,n,o)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r]);return a}({1:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=t("springload-analytics.js"),r=o(i);"ontouchstart"in window?document.documentElement.className=document.documentElement.className+" touch":document.documentElement.className=document.documentElement.className+" no-touch";var l="\n[ SPRINGLOAD ]\nWant to ship things that matter, at scale? Springloaders work on sites and apps with more than 54 million sessions/year.\nYou could join our cross-functional dev team and work on challenging projects in Python, Node and ReactJS.\nSend your CV to apply@springload.co.nz, or better yet, send us a pull request: https://github.com/springload\n",u=function c(){a(this,c),r["default"].init(),"info"in console&&console.info(l)};window.site=new u({})},{"springload-analytics.js":2}],2:[function(t,e,n){(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,o){"function"==typeof define&&define.amd?define([],function(){return t.GA=o()}):"object"===("undefined"==typeof e?"undefined":n(e))&&e.exports?e.exports=t.GA=o():t.GA=o()}("undefined"!=typeof t?t:(void 0).window||(void 0).global,function(){var t={options:{default_category:"/"+document.location.pathname.substr(1),default_action:"Click",default_trackable_attribute:"analytics",default_trackable_event:"click",default_trackable_element:"a",default_label_attribute:"href",default_label_is_text_content:!1,default_separator:"|",categories:{footer:"Footer",nav:"Navigation",ui_element:"UI element"},actions:{interaction:"Interaction"}},event:function(t,e,o,a){var i=this;t=t||i.options.default_category,e=e||i.options.default_action,"object"===n(window._gaq)?window._gaq.push(["_trackEvent",t,e,o,a]):"function"==typeof window.ga&&window.ga("send","event",t,e,o,a)},init:function(t){var e=this;e.options=e.extend(e.options,t),e.setupTrackables(e.options.default_trackable_attribute,e.options.default_trackable_event,e.options.default_trackable_element,e.options.default_label_attribute,e.options.default_label_is_text_content)},extend:function(t){t=t||{};for(var e=1;e<arguments.length;e++){var o=arguments[e];if(o)for(var a in o)o.hasOwnProperty(a)&&("object"===n(o[a])?this.extend(t[a],o[a]):t[a]=o[a])}return t},on:function(t,e,n){"addEventListener"in window?t.addEventListener(e,n,!1):"attachEvent"in window?t.attachEvent("on"+e,function(){n.call(t)}):t["on"+e]=function(){n.call(t)}},selectElements:function(t,e){return document.querySelectorAll("[data-"+t+"] "+e+", "+e+"[data-"+t+"]")},getParentElementTrackingData:function(t,e){for(var n,o=t.parentNode,a="";null!==o;){var i=o;i.hasAttribute("data-"+e)?(n=i.getAttribute("data-"+e),null!==n&&(a=n),o=null):o=i.parentNode}return a},setupTrackables:function(t,e,n,o,a){if(document.querySelectorAll){var i=this,r=i.selectElements(t,n),l=0;for(l;l<r.length;l++)!function(n){var r=n.getAttribute("data-"+t),l=null,u=null,c=a?n.textContent:n.getAttribute(o),s=null;null===r&&(r=i.getParentElementTrackingData(n,t)),r=r.split(i.options.default_separator),l=void 0!==r[0]&&""!==r[0]?r[0]:void 0,u=void 0!==r[1]&&""!==r[1]?r[1]:void 0,c=void 0!==r[2]&&""!==r[2]?r[2]:c,s=void 0!==r[3]&&""!==r[3]?r[3]:void 0,i.on(n,e,function(){i.event(l,u,c,s)})}(r[l])}}};return{track:function(e,n,o,a){t.event(n,o,e,a)},init:function(e){t.init(e)},setupTrackables:function(e,n,o,a,i){t.setupTrackables(e,n,o,a,i)},cat:t.options.categories,act:t.options.actions}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);