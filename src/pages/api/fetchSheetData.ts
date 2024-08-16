// // fetchSheetData.ts
// import axios from "axios";

// const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
// const SPREADSHEET_ID = "19CiXuT15Q0M2vN1KcpzIR-MlVVMnb2BRgz23PJRbWe8"; // Your spreadsheet ID
// const RANGE = "Sheet1!A:D"; // Adjust the range according to your sheet

// export async function getSheetData() {
//   try {
//     const response = await axios.get(
//       `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
//     );
//     return response.data.values; // This will contain the rows from the specified range
//   } catch (error) {
//     console.error("Error fetching data from Google Sheets:", error);
//   }
// }
