/**
 * PELLE AESTHETIC & COSMETIC — Google Apps Script
 * ================================================
 * Paste this entire file into Google Apps Script (Extensions → Apps Script).
 * Then deploy as a Web App:
 *   - Execute as: Me
 *   - Who has access: Anyone
 * Copy the Web App URL → paste into src/lib/submitToSheet.ts (SHEET_ENDPOINT)
 *
 * The script will auto-create headers in Row 1 on first run.
 */

const SHEET_NAME = "Appointments"; // Change if your tab name is different

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Auto-create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "WhatsApp Number",
        "Treatment Category",
        "Preferred Date",
        "Message / Notes",
        "Source",
      ]);
      // Style the header row
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1a1108");
      headerRange.setFontColor("#c9a96e");
    }

    // Parse incoming JSON body
    var data = JSON.parse(e.postData.contents);

    // Append the new row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-PK"),
      data.name || "",
      data.phone || "",
      data.category || "",
      data.preferred_date || "Flexible",
      data.message || "",
      data.source || "Website Form",
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 7);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight — Apps Script handles OPTIONS automatically
function doGet(e) {
  return ContentService.createTextOutput("Pelle Aesthetic Form Endpoint — OK");
}
