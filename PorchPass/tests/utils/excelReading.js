const xlsx = require('xlsx');
exports.readExcel=async function readExcel(page){

    const workbook=xlsx.readFile("tests/testdata/TestData.xlsx");
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    for (const row of data) {
        const Data = row.Data;
        await page.click("//pre[@role='presentation']");
        await page.type("//div/pre/span[@role='presentation']", Data, { delay: 100 });
       
      }


}


