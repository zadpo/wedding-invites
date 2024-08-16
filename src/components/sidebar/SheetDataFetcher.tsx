// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { RiUser3Fill } from "@remixicon/react";

// // Define types for the response data
// interface SheetResponse {
//   range: string;
//   majorDimension: string;
//   values: (string | null)[][];
// }

// const API_KEY = "AIzaSyDyMRxB5vSInnsnx5_rDEeRa5a4qOO8wOs";
// const SPREADSHEET_ID = "19CiXuT15Q0M2vN1KcpzIR-MlVVMnb2BRgz23PJRbWe8";
// const RANGE = "Form Responses 1!A1:E10";

// const SheetDataFetcher: React.FC = () => {
//   const [names, setNames] = useState<string[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get<SheetResponse>(
//           `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
//         );

//         // Convert null values to empty strings
//         const processedData: string[][] = response.data.values.map((row) => row.map((cell) => cell ?? ""));

//         // Get index of the "Full Name" column
//         const headers = processedData[0];
//         const fullNameIndex = headers.indexOf("Full Name");

//         // Extract names from the "Full Name" column
//         if (fullNameIndex > -1) {
//           const namesList = processedData.slice(1).map((row) => row[fullNameIndex]);
//           setNames(namesList);
//         } else {
//           setError("Full Name column not found");
//         }
//       } catch (error) {
//         console.error("Detailed error:", axios.isAxiosError(error) ? error.response?.data : error.message);
//         setError("Error fetching data from Google Sheets");
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="bg-[#FBFBFE] rounded-md px-2 py-2">
//       {error && <p>{error}</p>}
//       {names.length > 0 ? (
//         <ul>
//           <h1 className="font-bold">New Registered</h1>
//           {names.map((name, index) => (
//             <li key={index} className="flex items-end gap-2 text-sm">
//               <span>{index + 1}.</span>
//               <span className="flex items-end">{name || "Unknown"}</span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No names available</p>
//       )}
//     </div>
//   );
// };

// export default SheetDataFetcher;
