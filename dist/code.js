function doGet(e) {}

function FormSubmit(formData) {}

function setScriptProp() {}

 /******/ (() => {
    // webpackBootstrap
    /******/ "use strict";
    /******/ // The require scope
    /******/    var __webpack_require__ = {};
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/global */
    /******/    
    /******/ __webpack_require__.g = function() {
        /******/ if ("object" == typeof globalThis) return globalThis;
        /******/        try {
            /******/ return this || new Function("return this")();
            /******/        } catch (e) {
            /******/ if ("object" == typeof window) return window;
            /******/        }
        /******/    }();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    __webpack_require__.g.doGet = function(e) {
        return HtmlService.createHtmlOutputFromFile("dist/index.html").setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag("viewport", "width=device-width, initial-scale=1").setTitle("GCPReactTemplate");
    }, __webpack_require__.g.FormSubmit = function(formData) {
        var scriptProps = PropertiesService.getScriptProperties(), sheetId = String(scriptProps.getProperty("MAIN_SHEET_ID"));
        SpreadsheetApp.openById(sheetId).getSheets()[0].getRange(1, 1).setValue(formData.newValue);
    }, __webpack_require__.g.setScriptProp = function() {
        return PropertiesService.getScriptProperties().setProperty("MAIN_SHEET_ID", "<prod_deployment_id>"), 
        !0;
    };
    for (var i in __webpack_exports__) this[i] = __webpack_exports__[i];
    __webpack_exports__.__esModule && Object.defineProperty(this, "__esModule", {
        value: !0
    })
    /******/;
})();