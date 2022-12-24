import { saveAs } from "file-saver";
import ExcelJS from 'exceljs';

export default async function skapaExcelArk(excelInfo: any[]) {
    const workbook = new ExcelJS.Workbook();

    workbook.creator = 'Lukas Mörtman';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet(new Date().getFullYear().toString());
    const skapaKolumnerOchHuvudraderna = () => {
        sheet.columns = [
            { header: 'Datum', key: 'datum' },
            { header: 'Namn', key: 'namn' },
            { header: 'Ver', key: 'ver' },
            { header: 'Kassa', key: 'kassaDebit' },
            { header: '', key: 'kassaKredit' },
            { header: 'Bank', key: 'bankDebit' },
            { header: '', key: 'bankKredit' },
            { header: 'Medlemsavgifter', key: 'medlemsavgifterDebit' },
            { header: '', key: 'medlemsavgifterKredit' },
            { header: 'Bidrag', key: 'bidragDebit' },
            { header: '', key: 'bidragKredit' },
            { header: 'Laborationer', key: 'laborationerDebit' },
            { header: '', key: 'laborationerKredit' },
            { header: 'Kök & fester', key: 'kökDebit' },
            { header: '', key: 'kökKredit' },
            { header: 'Försäljning', key: 'försäljningDebit' },
            { header: '', key: 'försäljningKredit' },
            { header: 'NF-artiklar', key: 'artiklarDebit' },
            { header: '', key: 'artiklarKredit' },
            { header: 'Skuld', key: 'skuldDebit' },
            { header: '', key: 'skuldKredit' },
            { header: 'Övrigt', key: 'övrigtDebit' },
            { header: '', key: 'övrigtKredit' },
            { header: 'Diverse konton', key: 'diverseDebit' },
            { header: '', key: 'diverseKredit' },
        ];
        sheet.addRow({
            ver: "nr",
            kassaDebit: "Debit",
            kassaKredit: "Kredit",
            bankDebit: "Debit",
            bankKredit: "Kredit",
            medlemsavgifterDebit: "Debit",
            medlemsavgifterKredit: "Kredit",
            bidragDebit: "Debit",
            bidragKredit: "Kredit",
            laborationerDebit: "Debit",
            laborationerKredit: "Kredit",
            kökDebit: "Debit",
            kökKredit: "Kredit",
            försäljningDebit: "Debit",
            försäljningKredit: "Kredit",
            artiklarDebit: "Debit",
            artiklarKredit: "Kredit",
            skuldDebit: "Debit",
            skuldKredit: "Kredit",
            övrigtDebit: "Debit",
            övrigtKredit: "Kredit",
            diverseDebit: "Debit",
            diverseKredit: "Kredit"
        })
    };
    const fixadatavisare = () => {
        //turn all the columns from the 4 one and to the end and format them as currency kr with 0 decimals
        for (let i = 3; i < sheet.columns.length; i++) {
            sheet.getColumn(i + 1).numFmt = '0 kr';
        }
        //gör om datumet på första kolumnen
        sheet.getColumn(1).numFmt = "DDDD D MMMM"
        //gör om andra kolumnen till text
        sheet.getColumn(2).numFmt = "@"
    }
    const läggaTillData = () => {
        excelInfo.reverse();
        excelInfo.forEach((item, i) => {
            let datums = new Date((item.datum).slice(0,10));
            let priset = Number(item.pris)
            if (item.typavkop === "Avgift") {
                if (item.kategori === "Kök&fester") {
                    sheet.addRow({ kassaKredit: priset, ver: i + 1, datum: datums, kökDebit: priset });
                } else if (item.kategori === "Laborationer") {
                    sheet.addRow({ kassaKredit: priset, ver: i + 1, datum: datums, laborationerDebit: priset });
                } else if (item.kategori === "Övrigt") {
                    sheet.addRow({ kassaKredit: priset, ver: i + 1, datum: datums, övrigtDebit: priset });
                } else if (item.kategori === "Medlemsavgifter") {
                    sheet.addRow({ kassaKredit: priset, ver: i + 1, datum: datums, medlemsavgifterDebit: priset });
                } else if (item.kategori === "Försäljning") {
                    sheet.addRow({ kassaKredit: priset, ver: i + 1, datum: datums, försäljningDebit: priset });
                } else if (item.kategori === "NF-artiklar") {
                    sheet.addRow({ kassaKredit: priset, ver: i + 1, datum: datums, artiklarDebit: priset });
                }
                sheet.getCell(`B${i + 3}`).value = {
                    hyperlink: `https://nfkvitto.se/api/files/kvitton/${item.id}/${item.bild}`,
                    text: item.vara
                }
            } else if (item.typavkop === "Intäkt") {
                if (item.kategori === "Kök&fester") {
                    sheet.addRow({ kassaDebit: priset, ver: i + 1, datum: datums, kökKredit: priset });
                } else if (item.kategori === "Laborationer") {
                    sheet.addRow({ kassaDebit: priset, ver: i + 1, datum: datums, laborationerKredit: priset });
                } else if (item.kategori === "Övrigt") {
                    sheet.addRow({ kassaDebit: priset, ver: i + 1, datum: datums, övrigtKredit: priset });
                } else if (item.kategori === "Medlemsavgifter") {
                    sheet.addRow({ kassaDebit: priset, ver: i + 1, datum: datums, medlemsavgifterKredit: priset });
                } else if (item.kategori === "Försäljning") {
                    sheet.addRow({ kassaDebit: priset, ver: i + 1, datum: datums, försäljningKredit: priset });
                } else if (item.kategori === "NF-artiklar") {
                    sheet.addRow({ kassaDebit: priset, ver: i + 1, datum: datums, artiklarKredit: priset });
                }
                sheet.getCell(`B${i + 3}`).value = {
                    hyperlink: `https://nfkvitto.se/api/files/kvitton/${item.id}/${item.bild}`,
                    text: item.vara
                }
            }

        });
    }
    const skapaBorderrs = () => {
        //add border to the right of every cell in the column if the column key contains Kredit and also for the first two columns and for the third one add thick border to right and left
        for (let i = 0; i < sheet.columns.length; i++) {
            if (sheet.columns[i].key?.includes("Kredit") || i === 0 || i === 1) {
                sheet.getColumn(i + 1).eachCell((cell) => {
                    cell.border = {
                        right: { style: 'thin' }
                    }
                })
            }
        }
        //add thick border to the right of the third column
        sheet.getColumn(3).eachCell((cell) => {
            cell.border = {
                left: { style: 'medium' },
                right: { style: 'medium' }
            }
        })
        //for each cell in the second row, if column key contains Kredit add border to the right and bottom, if column header contains Ver add medium border to right and left and bottom, if column header contains Datum add border to right and left and bottom, if column header contains Vara add border to bottom
        sheet.getRow(2).eachCell((cell, colNumber) => {
            if (sheet.columns[colNumber - 1].key?.includes("Kredit")) {
                cell.border = {
                    right: { style: 'thin' },
                    bottom: { style: 'thin' }
                }
                //add red fill to the cell
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFC7CE' }
                }
            } else if (sheet.columns[colNumber - 1].key?.includes("Debit")) {
                cell.border = {
                    bottom: { style: 'thin' }
                }
                //add green fill to the cell
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'C6EFCE' }
                }
            } else if (cell.value === "Ver") {
                cell.border = {
                    right: { style: 'medium' },
                    left: { style: 'medium' },
                    bottom: { style: 'thin' }
                }
            } else if (cell.value === "Datum") {
                cell.border = {
                    right: { style: 'medium' },
                    left: { style: 'medium' },
                    bottom: { style: 'thin' }
                }
            } else if (cell.value === "Vara") {
                cell.border = {
                    bottom: { style: 'thin' }
                }
            }
        }
        )
        //add light blue color filling to the first two rows where the column key is ver
        sheet.getColumn(3).eachCell((cell, rowNumber) => {
            if (rowNumber === 1 || rowNumber === 2) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'DDEBF7' }
                }
            }
        })
        sheet.getCell("A2").border = {
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        }
        sheet.getCell("B2").border = {
            bottom: { style: 'thin' }
        }
        sheet.getCell("C2").border = {
            bottom: { style: 'thin' },
            right : { style: 'medium' },
            left : { style: 'medium' }

        }
    }
    const textHanterare = () => {
        //center align the text in the 3rd column
        sheet.getColumn(3).eachCell((cell) => {
            cell.alignment = { horizontal: 'center' }
        })
        //align the text in the first column to the left
        sheet.getColumn(1).eachCell((cell) => {
            cell.alignment = { horizontal: 'left' }
        })
    }
    const bredastEllerHur = () => {
        sheet.getColumnKey("datum").width = 20
        sheet.getColumnKey("ver").width = 5
        sheet.getColumnKey("namn").width = 25
    }
    const autoWidth = () => {
        sheet.columns.forEach((column) => {
            let maxColumnLength = 0;
            column.eachCell!({ includeEmpty: false }, (cell,i) => {
                if (i !== 1){
                maxColumnLength = Math.max(
                    maxColumnLength,
                    2,
                    cell.value ? cell.value.toString().length !== 0 ? cell.value.toString().length+2 : 0 : 0
                );
            }});
            maxColumnLength >= 20 ? column.width = 20 : column.width = maxColumnLength;
        });
    }

    skapaKolumnerOchHuvudraderna()
    fixadatavisare()
    läggaTillData()
    textHanterare()
    bredastEllerHur()
    skapaBorderrs()
    autoWidth()

    workbook.xlsx.writeBuffer().then(function (buffer) {
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `Bokföring NF ${new Date().toLocaleDateString()}.xlsx`
        );
    });
}