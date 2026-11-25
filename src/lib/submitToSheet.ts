/**
 * Google Sheets Form Submission Utility
 * Sends form data to a Google Apps Script Web App endpoint.
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1TnUzQYrsGved4Eqq5P-Dx7Kp76mhPwFs2gL-uWBFeVE/
 * 2. Click Extensions → Apps Script
 * 3. Paste the code from /scripts/google-apps-script.js
 * 4. Click Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL and paste it below as SHEET_ENDPOINT
 */

// ⚠️  REPLACE THIS with your deployed Google Apps Script Web App URL:
export const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyM4dY9B6DEw55n4MRvZlzjxin-I1KUk7IN862wLqLOqSRjNmeexCaz8z7zVxuYB7Dz/exec";

export type FormPayload = {
  name: string;
  phone: string;
  category: string;
  date?: string;
  message?: string;
  source?: string; // "Main Form" | "Popup" | "WhatsApp"
};

/**
 * Submits form data to the Google Sheet via Apps Script Web App.
 * Uses no-cors mode so it always "succeeds" from the browser's perspective —
 * the data still lands in the sheet correctly.
 */
export async function submitToSheet(data: FormPayload): Promise<void> {
  const payload = {
    timestamp: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
    name: data.name,
    phone: data.phone,
    category: data.category,
    preferred_date: data.date || "Flexible",
    message: data.message || "",
    source: data.source || "Website Form",
  };

  // Google Apps Script requires no-cors for browser submissions
  await fetch(SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  // no-cors responses are opaque — we can't check ok status,
  // but data still arrives. We assume success.
}
