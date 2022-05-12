/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215UHViU3ViU2FtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz9jNjliIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pubSubClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSubClass */ \"./src/pubSubClass.ts\");\n\r\n//let form = document.querySelector($('#form1')[0])!;\r\nconst pubSub = new _pubSubClass__WEBPACK_IMPORTED_MODULE_0__.PubSub();\r\nconst btnSubscribe = $('#subscribe')[0];\r\nconst btnUnSubscribe = $('#unsubscribe')[0];\r\nbtnSubscribe === null || btnSubscribe === void 0 ? void 0 : btnSubscribe.addEventListener('click', function handleSubClick(event) {\r\n    // const data = formData(form);\r\n    var inputName = document.getElementById(\"name\").value;\r\n    var inputChannel = document.getElementById(\"channel\").value;\r\n    let id = pubSub.subscribe(inputName, inputChannel, callback);\r\n    //console.log(\"====> id is \" + id + \" of \", data.name);\r\n    pubSub.publish();\r\n});\r\nbtnUnSubscribe === null || btnUnSubscribe === void 0 ? void 0 : btnUnSubscribe.addEventListener('click', function handleUnSubClick(event) {\r\n    //  const data = formData(form);\r\n    // pubSub.unsubscribe(data.name, data.channel);\r\n    var inputId = document.getElementById(\"id\").value;\r\n    var inputChannel = document.getElementById(\"unsubchannel\").value;\r\n    pubSub.unsubscribe(inputId, inputChannel);\r\n    pubSub.publish();\r\n});\r\nlet callback = (paramId) => {\r\n    console.log(paramId);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUM7QUFFdkMscURBQXFEO0FBRXJELE1BQU0sTUFBTSxHQUFJLElBQUksZ0RBQU0sRUFBRSxDQUFDO0FBQzdCLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFNUMsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLGNBQWMsQ0FBQyxLQUFLO0lBQ2xFLCtCQUErQjtJQUM5QixJQUFJLFNBQVMsR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLENBQUM7SUFDMUUsSUFBSSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFFLENBQUMsS0FBSyxDQUFDO0lBRWhGLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCx1REFBdUQ7SUFFdkQsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRXJCLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUFnQixDQUFDLEtBQUs7SUFDdkUsZ0NBQWdDO0lBQy9CLCtDQUErQztJQUMvQyxJQUFJLE9BQU8sR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxLQUFLLENBQUM7SUFDdEUsSUFBSSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFFLENBQUMsS0FBSyxDQUFDO0lBRXJGLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUdILElBQUksUUFBUSxHQUFHLENBQUMsT0FBYyxFQUFFLEVBQUU7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215UHViU3ViU2FtcGxlLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHViU3ViIH0gZnJvbSBcIi4vcHViU3ViQ2xhc3NcIjtcclxuXHJcbi8vbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCQoJyNmb3JtMScpWzBdKSE7XHJcblxyXG5jb25zdCBwdWJTdWIgID0gbmV3IFB1YlN1YigpO1xyXG5jb25zdCBidG5TdWJzY3JpYmUgPSAkKCcjc3Vic2NyaWJlJylbMF07XHJcbmNvbnN0IGJ0blVuU3Vic2NyaWJlID0gJCgnI3Vuc3Vic2NyaWJlJylbMF07XHJcblxyXG5idG5TdWJzY3JpYmU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gaGFuZGxlU3ViQ2xpY2soZXZlbnQpIHtcclxuICAgLy8gY29uc3QgZGF0YSA9IGZvcm1EYXRhKGZvcm0pO1xyXG4gICAgdmFyIGlucHV0TmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikpLnZhbHVlO1xyXG4gICAgdmFyIGlucHV0Q2hhbm5lbCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5uZWxcIikpLnZhbHVlO1xyXG5cclxuICAgIGxldCBpZCA9IHB1YlN1Yi5zdWJzY3JpYmUoaW5wdXROYW1lLCBpbnB1dENoYW5uZWwsIGNhbGxiYWNrKTtcclxuICAgIC8vY29uc29sZS5sb2coXCI9PT09PiBpZCBpcyBcIiArIGlkICsgXCIgb2YgXCIsIGRhdGEubmFtZSk7XHJcblxyXG4gICAgcHViU3ViLnB1Ymxpc2goKTtcclxuXHJcbn0pO1xyXG5cclxuYnRuVW5TdWJzY3JpYmU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gaGFuZGxlVW5TdWJDbGljayhldmVudCkge1xyXG4gIC8vICBjb25zdCBkYXRhID0gZm9ybURhdGEoZm9ybSk7XHJcbiAgIC8vIHB1YlN1Yi51bnN1YnNjcmliZShkYXRhLm5hbWUsIGRhdGEuY2hhbm5lbCk7XHJcbiAgIHZhciBpbnB1dElkID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRcIikpLnZhbHVlO1xyXG4gICB2YXIgaW5wdXRDaGFubmVsID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5zdWJjaGFubmVsXCIpKS52YWx1ZTtcclxuXHJcbiAgIHB1YlN1Yi51bnN1YnNjcmliZShpbnB1dElkLCBpbnB1dENoYW5uZWwpO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goKTtcclxufSk7IFxyXG5cclxuXHJcbmxldCBjYWxsYmFjayA9IChwYXJhbUlkOnN0cmluZykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocGFyYW1JZClcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/pubSubClass.ts":
/*!****************************!*\
  !*** ./src/pubSubClass.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\nclass PubSub {\r\n    constructor() {\r\n        this.channels = new Map();\r\n    }\r\n    subscribe(paramName, paramChannel, paramFunction) {\r\n        if (!this.channels.has(paramChannel)) {\r\n            //  subscriber.set(paramFunction)\r\n            this.channels.set(paramChannel, new Map());\r\n        }\r\n        // this.subscribers[paramChannel].push(callback)\r\n        let hashId = this.createHash();\r\n        this.channels.get(paramChannel).set(hashId, { name: paramName, fn: paramFunction });\r\n        return hashId;\r\n    }\r\n    unsubscribe(paramId, paramChannel) {\r\n        if (this.channels.has(paramChannel)) {\r\n            //  subscriber.set(paramFunction)\r\n            if (this.channels.get(paramChannel).has(paramId)) {\r\n                this.channels.get(paramChannel).delete(paramId);\r\n            }\r\n            else {\r\n                alert(\"cant find \" + paramId + \" (ID) in \" + paramChannel + \" channel!\");\r\n            }\r\n        }\r\n        else {\r\n            alert(\"cant find \" + paramChannel + \" channel!\");\r\n        }\r\n    }\r\n    publish() {\r\n        //  this.channels.forEach((param) => param()\r\n        for (let [key, value] of this.channels) {\r\n            console.log(\"CHANNEL : \", key);\r\n            for (let [hashId, dataObj] of value) {\r\n                console.log(\"data : id = \", hashId + \", name = \", dataObj.name);\r\n            }\r\n        }\r\n    }\r\n    createHash() {\r\n        let result = '';\r\n        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\r\n        const hasLength = 12;\r\n        for (let i = 0; i < hasLength; i++) {\r\n            result += characters.charAt(Math.floor(Math.random() * characters.length));\r\n        }\r\n        return result;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHViU3ViQ2xhc3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sTUFBTTtJQUdmO1FBRlEsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7SUFFM0IsQ0FBQztJQUVoQixTQUFTLENBQUMsU0FBZ0IsRUFBRSxZQUFtQixFQUFFLGFBQXVCO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUV0QyxpQ0FBaUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM1QztRQUNGLGdEQUFnRDtRQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBQyxDQUFFLENBQUM7UUFDbkYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUFjLEVBQUUsWUFBbUI7UUFDN0MsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUVuQyxpQ0FBaUM7WUFDL0IsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUM7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDaEQ7aUJBQUk7Z0JBQ0gsS0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLEdBQUcsV0FBVyxHQUFHLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQzthQUMxRTtTQUNGO2FBQUk7WUFDSCxLQUFLLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQztTQUNsRDtJQUVMLENBQUM7SUFFRCxPQUFPO1FBQ1AsNENBQTRDO1FBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sR0FBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixNQUFNLFVBQVUsR0FBRyxnRUFBZ0UsQ0FBQztRQUNwRixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRztZQUNwQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM1RTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215UHViU3ViU2FtcGxlLy4vc3JjL3B1YlN1YkNsYXNzLnRzP2Y5NDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFB1YlN1YiB7XHJcbiAgICBwcml2YXRlIGNoYW5uZWxzID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgXHJcbiAgICBzdWJzY3JpYmUocGFyYW1OYW1lOnN0cmluZywgcGFyYW1DaGFubmVsOnN0cmluZywgcGFyYW1GdW5jdGlvbjogRnVuY3Rpb24pOiBzdHJpbmcge1xyXG4gICAgICBpZiAoIXRoaXMuY2hhbm5lbHMuaGFzKHBhcmFtQ2hhbm5lbCkpIHtcclxuXHJcbiAgICAgIC8vICBzdWJzY3JpYmVyLnNldChwYXJhbUZ1bmN0aW9uKVxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMuc2V0KHBhcmFtQ2hhbm5lbCwgbmV3IE1hcCgpKTtcclxuICAgICAgfVxyXG4gICAgIC8vIHRoaXMuc3Vic2NyaWJlcnNbcGFyYW1DaGFubmVsXS5wdXNoKGNhbGxiYWNrKVxyXG4gICAgICBsZXQgaGFzaElkID0gdGhpcy5jcmVhdGVIYXNoKCk7XHJcbiAgICAgIHRoaXMuY2hhbm5lbHMuZ2V0KHBhcmFtQ2hhbm5lbCkuc2V0KGhhc2hJZCwge25hbWU6IHBhcmFtTmFtZSwgZm46IHBhcmFtRnVuY3Rpb259ICk7XHJcbiAgICAgIHJldHVybiBoYXNoSWQ7XHJcbiAgICB9XHJcbiAgICB1bnN1YnNjcmliZShwYXJhbUlkOnN0cmluZywgcGFyYW1DaGFubmVsOnN0cmluZyk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5jaGFubmVscy5oYXMocGFyYW1DaGFubmVsKSkge1xyXG5cclxuICAgICAgICAvLyAgc3Vic2NyaWJlci5zZXQocGFyYW1GdW5jdGlvbilcclxuICAgICAgICAgIGlmKHRoaXMuY2hhbm5lbHMuZ2V0KHBhcmFtQ2hhbm5lbCkuaGFzKHBhcmFtSWQpKXtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVscy5nZXQocGFyYW1DaGFubmVsKS5kZWxldGUocGFyYW1JZClcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGVydChcImNhbnQgZmluZCBcIiArIHBhcmFtSWQgKyBcIiAoSUQpIGluIFwiICsgcGFyYW1DaGFubmVsICsgXCIgY2hhbm5lbCFcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBhbGVydChcImNhbnQgZmluZCBcIiArIHBhcmFtQ2hhbm5lbCArIFwiIGNoYW5uZWwhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaXNoKCk6IHZvaWQge1xyXG4gICAgLy8gIHRoaXMuY2hhbm5lbHMuZm9yRWFjaCgocGFyYW0pID0+IHBhcmFtKClcclxuICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHRoaXMuY2hhbm5lbHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNIQU5ORUwgOiBcIiwga2V5KTtcclxuICAgICAgICBmb3IgKGxldCBbaGFzaElkLCBkYXRhT2JqXSBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIDogaWQgPSBcIiwgaGFzaElkKyBcIiwgbmFtZSA9IFwiLCBkYXRhT2JqLm5hbWUpO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUhhc2ggKCkgOiBzdHJpbmd7XHJcbiAgICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG4gICAgICBjb25zdCBoYXNMZW5ndGggPSAxMjtcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaGFzTGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnMubGVuZ3RoKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pubSubClass.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/style.scss");
/******/ 	
/******/ })()
;