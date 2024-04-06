const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Functions
// function randomAlpha(length = 10) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.post("/", (req, res) => {
//   var Name = req.body.Name;
//   var EmpId = req.body.empID;
//   var Location = req.body.location;
//   var Designation = req.body.designation;
//   var Department = req.body.department;
//   var PurposeOfVisit = req.body.Purpose_of_Visit;

//   // Conveyance
//   var Convenience = [];
//   var totalRowsC = parseInt(req.body.totalRowsConvenience);

//   for (var i = 1; i <= totalRowsC ; i++) {
//     var conveyance_Date = req.body['Convenience_Date' + i];
//     var conveyance_From = req.body['Convenience_From' + i];
//     var conveyance_To = req.body['Convenience_To' + i];
//     var conveyance_Mode = req.body['Convenience_Mode' + i];
//     var conveyance_Purpose = req.body['Convenience_Purpose' + i];
//     var conveyance_Amount = req.body['Convenience_Amount' + i];
//     var conveyance_Bill = req.body['Convenience_BillId' + i];

//     console.log(conveyance_Bill);

//     Convenience.push({
//       conveyanceId: randomAlpha(),
//       conveyanceDate: conveyance_Date,
//       conveyanceFrom: conveyance_From,
//       conveyanceTo: conveyance_To,
//       conveyanceMode: conveyance_Mode,
//       conveyancePurpose: conveyance_Purpose,
//       conveyanceAmount: conveyance_Amount,
//       conveyanceBill: conveyance_Bill,
//     });
//   }
//   // foodAndLodging
//   var foodLodgings = [];
//   var totalRowsF = parseInt(req.body.totalRowsFoodAndLodging);

//   for (var i = 1; i <= totalRowsF; i++) {
//     var foodLodging_Date = req.body["foodLodging_Date" + i];
//     var foodLodging_BillNo = req.body["foodLodging_BillNo" + i];
//     var foodLodging_Hotel = req.body["foodLodging_Hotel" + i];
//     var foodLodging_Occupancy = req.body["foodLodging_Occupancy" + i];
//     var foodLodging_Amount = req.body["foodLodging_Amount" + i];
//     var foodLodging_Bill = req.body["foodLodging_BillId" + i];

//     foodLodgings.push({
//       foodLodgingId: randomAlpha(),
//       foodLodgingDate: foodLodging_Date,
//       foodLodgingBillNo: foodLodging_BillNo,
//       foodLodgingHotel: foodLodging_Hotel,
//       foodLodgingOccupancy: foodLodging_Occupancy,
//       foodLodgingAmount: foodLodging_Amount,
//       foodLodgingBill: foodLodging_Bill,
//     });
//   }
//   // Incidental
//   var incidentals = [];
//   var totalRowsI = parseInt(req.body.totalRowsIncidental);

//   for (var i = 1; i <= totalRowsI; i++) {
//     var incidental_Date = req.body["incidentals_Date" + i];
//     var incidental_Expense = req.body["incidentals_Expense" + i];
//     var incidental_Remarks = req.body["incidentals_Remarks" + i];
//     var incidental_Amount = req.body["incidentals_Amount" + i];
//     var incidental_Bill = req.body["incidentals_BillId" + i];

//     incidentals.push({
//       incidentalId: randomAlpha(),
//       incidentalDate: incidental_Date,
//       incidentalExpense: incidental_Expense,
//       incidentalRemarks: incidental_Remarks,
//       incidentalAmount: incidental_Amount,
//       incidentalBill: incidental_Bill,
//     });
//   }
//   // Travelling
//   var travels = [];
//   var totalRowsT = parseInt(req.body.totalRowsTravelling);

//   for (var i = 1; i <= totalRowsT; i++) {
//     var travel_Date = req.body["Date" + i];
//     var travel_From = req.body["From" + i];
//     var travel_To = req.body["To" + i];
//     var travel_Mode = req.body["Mode" + i];
//     var travel_Class = req.body["Class" + i];
//     var travel_Fare = req.body["Fare" + i];
//     var travel_Conveyance = req.body["Convenience" + i];
//     var travel_FoodAndLodging = req.body["Food_Lodging" + i];
//     var travel_Incidental = req.body["Incidental" + i];
//     var travel_Total = req.body["Total" + i];

//     travels.push({
//       travelId: randomAlpha(),
//       travelDate: travel_Date,
//       travelFrom: travel_From,
//       travelTo: travel_To,
//       travelMode: travel_Mode,
//       travelClass: travel_Class,
//       travelFare: travel_Fare,
//       travelConveyance: travel_Conveyance,
//       travelFoodLodging: travel_FoodAndLodging,
//       travelIncidental: travel_Incidental,
//       travelTotal: travel_Total,
//       travelDetails: {
//         conveyances: Convenience,
//         foodLodgings: foodLodgings,
//         incidentals: incidentals,
//       },
//     });
//   }

//   var data = {
//     name: Name,
//     empId: EmpId,
//     location: Location,
//     designation: Designation,
//     department: Department,
//     purposeOfVisit: PurposeOfVisit,
//     travels: travels,
//   };

//   var jsonData = JSON.stringify(data);

//   var options = {
//     url: "https://user-be-6dvcrnuzba-uc.a.run.app/upload",
//     method: "POST",
//     body: jsonData,
//     headers: {
//       Authorization:
//         "Bearer 186ca51480a74b829cd593cb3e560d82410bdfc8cfcfd39fff7b0ad9f7015814",
//       "Content-Type": "application/json",
//     },
//   };
//   console.log(jsonData);
//   request(options, (error, response, body) => {
//     if (error) {
//       console.log(response.statusCode);
//       // console.log(response.body);
//     } else {
//       console.log(response.statusCode);
//       console.log(response.body);
//     }
//   });
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
