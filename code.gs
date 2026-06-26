function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Elbrus Ward Mini – Shopee Mall')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
}
