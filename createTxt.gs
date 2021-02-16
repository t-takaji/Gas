function createTxt() {
  var txtData = loadData();
  createFile("test.txt",txtData);
}

function loadData() {
  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  var txt = '';
  for(var i = 0; i < data.length; i++) {
    txt += data[i].join('　') + "\r\n";
  }
  return txt;
}

function createFile(filename, contents) {
  var folder = DriveApp.getFolderById('19evMj2wraJjuTawHyxs-Ks2MtlUr6LjK');
  var contentType = 'text/plain';
  var charset = 'utf-8';

  var blob = Utilities.newBlob('', contentType, filename).setDataFromString(contents, charset);

  // ファイルに保存
  folder.createFile(blob);
}
