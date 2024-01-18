
// @ts-ignore
global.doGet = (e) => {
    return HtmlService.createHtmlOutputFromFile('dist/index.html').setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1').setTitle("GCPReactTemplate");
};

// @ts-ignore
global.FormSubmit = (formData) => {
    const scriptProps = PropertiesService.getScriptProperties();

    const sheetId = String(scriptProps.getProperty('MAIN_SHEET_ID'));
    const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];
    
    sheet.getRange(1, 1).setValue(formData.newValue);
}

// @ts-ignore
global.setScriptProp = () => {
    const scriptProps = PropertiesService.getScriptProperties();

    scriptProps.setProperty('MAIN_SHEET_ID', '<prod_deployment_id>');

    return true;
}