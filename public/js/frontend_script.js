import { Client, Storage } from "appwrite";
import { v4 as uuidv4 } from "uuid";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64dcc02f3d1750e6d155");

const storage = new Storage(client);

function myCreateFunctionTravelling() {
  var table = document.getElementById("myTableTravelling");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var totalRowsInput = document.getElementById("totalRowsTravelling");
  var totalRows = parseInt(totalRowsInput.value);

  totalRowsInput.value = totalRows + 1;

  cell1.innerHTML = totalRows + 1;
  cell2.innerHTML =
    '<input name="Date' + (totalRows + 1) + '" maxlength="30"></input>';
  cell3.innerHTML =
    '<input name="From' + (totalRows + 1) + '" maxlength="30"></input>';
  cell4.innerHTML =
    '<input name="To' + (totalRows + 1) + '" maxlength="30"></input>';
  cell5.innerHTML =
    '<input name="Mode' + (totalRows + 1) + '"maxlength="30"></input>';
  cell6.innerHTML =
    '<input name="Class' + (totalRows + 1) + '" maxlength="30"></input>';
  cell7.innerHTML =
    '<input name="Fare' + (totalRows + 1) + '" maxlength="30"></input>';
  cell8.innerHTML =
    '<input name="Convenience' + (totalRows + 1) + '" maxlength="30"></input>';
  cell9.innerHTML =
    '<input name="Food_Loddging' +
    (totalRows + 1) +
    '" maxlength="30"></input>';
  cell10.innerHTML =
    '<input name="Incidental' + (totalRows + 1) + '" maxlength="30"></input>';
  cell11.innerHTML =
    '<input name="Total' + (totalRows + 1) + '" maxlength="30"></input>';
}

function myCreateFunctionConvenience() {
  var table = document.getElementById("myTableConvenience");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var totalRowsInput = document.getElementById("totalRowsConvenience");
  var totalRows = parseInt(totalRowsInput.value);

  totalRowsInput.value = totalRows + 1;
  cell1.innerHTML = totalRows + 1;
  cell2.innerHTML =
    '<input type="text" name="Convenience_Date' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell3.innerHTML =
    '<input type="text" name="Convenience_From' +
    (totalRows + 1) +
    '" maxlength="30" /></input>';
  cell4.innerHTML =
    '<input type="text" name="Convenience_To' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell5.innerHTML =
    '<input type="text" name="Convenience_Mode' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell6.innerHTML =
    '<input type="text" name="Convenience_Purpose' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell7.innerHTML =
    '<input type="text" name="Convenience_Amount' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell8.innerHTML =
    '<input type="file" name="Convenience_Bill' +
    (totalRows + 1) +
    '" maxlength="30" />';

  var fileInput = document.getElementById(
    "convenienceFileInput" + (totalRows + 1)
  );

  fileInput.addEventListener("change", async function (event) {
    var file = event.target.files[0];

    try {
      // Upload file to Appwrite storage
      const response = await storage.createFile(
        "6603d7829d049f9fb11b",
        uuidv4(),
        file
      );
      console.log(response); // Success

      // Extract the file ID from the response
      var fileId = response["$id"];

      // Update the input field with the file ID
      document.getElementById("convenienceFileId" + (totalRows + 1)).value =
        fileId;
    } catch (error) {
      console.log(error); // Failure
    }
  });
}
function myCreateFunctionFoodAndLodging() {
  var table = document.getElementById("myTableFoodAndLodging");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var totalRowsInput = document.getElementById("totalRowsFoodAndLodging");
  var totalRows = parseInt(totalRowsInput.value);

  totalRowsInput.value = totalRows + 1;

  cell1.innerHTML = totalRows + 1;
  cell2.innerHTML =
    '<input type="text" name="foodLodging_Date' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell3.innerHTML =
    '<input type="text" name="foodLodging_BillNo' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell4.innerHTML =
    '<input type="text" name="foodLodging_Hotel' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell5.innerHTML =
    '<input type="text" name="foodLodging_Occupancy' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell6.innerHTML =
    '<input type="text" name="foodLodging_Amount' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell7.innerHTML =
    '<input type="file" name="foodLodging_Bill' +
    (totalRows + 1) +
    '" maxlength="30" />';

  var fileInput = document.getElementById(
    "foodLodgingFileInput" + (totalRows + 1)
  );

  fileInput.addEventListener("change", async function (event) {
    var file = event.target.files[0];

    try {
      // Upload file to Appwrite storage
      const response = await storage.createFile(
        "6603d7829d049f9fb11b",
        uuidv4(),
        file
      );
      console.log(response); // Success

      // Extract the file ID from the response
      var fileId = response["$id"];

      // Update the input field with the file ID
      document.getElementById("foodLodgingFileId" + (totalRows + 1)).value =
        fileId;
    } catch (error) {
      console.log(error); // Failure
    }
  });
}

function myCreateFunctionIncidental() {
  var table = document.getElementById("myTableIncidental");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var totalRowsInput = document.getElementById("totalRowsIncidental");
  var totalRows = parseInt(totalRowsInput.value);

  totalRowsInput.value = totalRows + 1;

  cell1.innerHTML = totalRows + 1;
  cell2.innerHTML =
    '<input type="text" name="incidentals_Date' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell3.innerHTML =
    '<input type="text" name="incidentals_Expense' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell4.innerHTML =
    '<input type="text" name="incidentals_Remarks' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell5.innerHTML =
    '<input type="text" name="incidentals_Amount' +
    (totalRows + 1) +
    '" maxlength="30" />';
  cell6.innerHTML =
    '<input type="file" name="incidentals_Bill' +
    (totalRows + 1) +
    '" maxlength="30" />';

  var fileInput = document.getElementById(
    "incidentalsFileInput" + (totalRows + 1)
  );

  fileInput.addEventListener("change", async function (event) {
    var file = event.target.files[0];

    try {
      // Upload file to Appwrite storage
      const response = await storage.createFile(
        "6603d7829d049f9fb11b",
        uuidv4(),
        file
      );
      console.log(response); // Success

      // Extract the file ID from the response
      var fileId = response["$id"];

      // Update the input field with the file ID
      document.getElementById("incidentalsFileId" + (totalRows + 1)).value =
        fileId;
    } catch (error) {
      console.log(error); // Failure
    }
  });
}

function myDeleteFunctionTravelling() {
  var table = document.getElementById("myTableTravelling");
  var totalRowsInput = document.getElementById("totalRowsTravelling");
  var totalRows = parseInt(totalRowsInput.value);

  if (totalRows > 1) {
    table.deleteRow(-1);
    totalRowsInput.value = totalRows - 1;
  }
}

function myDeleteFunctionFoodAndLodging() {
  var table = document.getElementById("myTableFoodAndLodging");
  var totalRowsInput = document.getElementById("totalRowsFoodAndLodging");
  var totalRows = parseInt(totalRowsInput.value);

  if (totalRows > 1) {
    table.deleteRow(-1);
    totalRowsInput.value = totalRows - 1;
  }
}

function myDeleteFunctionIncidental() {
  var table = document.getElementById("myTableIncidental");
  var totalRowsInput = document.getElementById("totalRowsIncidental");
  var totalRows = parseInt(totalRowsInput.value);

  if (totalRows > 1) {
    table.deleteRow(-1);
    totalRowsInput.value = totalRows - 1;
  }
}

function randomAlpha(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// document.addEventListener("DOMContentLoaded", function () {

document
  .getElementById("yourFormId")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    var data = {
      name: formData.get("Name"),
      empId: formData.get("empID"),
      location: formData.get("location"),
      designation: formData.get("designation"),
      department: formData.get("department"),
      purposeOfVisit: formData.get("Purpose_of_Visit"),
      travels: [],
    };

    var totalRowsT = parseInt(formData.get("totalRowsTravelling"));

    for (var i = 1; i <= totalRowsT; i++) {
      var travel = {
        travelId: randomAlpha(),
        travelDate: formData.get("Date" + i),
        travelFrom: formData.get("From" + i),
        travelTo: formData.get("To" + i),
        travelMode: formData.get("Mode" + i),
        travelClass: formData.get("Class" + i),
        travelFare: formData.get("Fare" + i),
        travelConveyance: formData.get("Convenience" + i),
        travelFoodLodging: formData.get("Food_Lodging" + i),
        travelIncidental: formData.get("Incidental" + i),
        travelTotal: formData.get("Total" + i),
        travelDetails: {
          conveyances: [],
          foodLodgings: [],
          incidentals: [],
        },
      };

      var totalRowsC = parseInt(formData.get("totalRowsConvenience"));
      for (var j = 1; j <= totalRowsC; j++) {
        if (formData.has("Convenience_Date" + j)) {
          travel.travelDetails.conveyances.push({
            conveyanceId: randomAlpha(),
            conveyanceDate: formData.get("Convenience_Date" + j),
            conveyanceFrom: formData.get("Convenience_From" + j),
            conveyanceTo: formData.get("Convenience_To" + j),
            conveyanceMode: formData.get("Convenience_Mode" + j),
            conveyancePurpose: formData.get("Convenience_Purpose" + j),
            conveyanceAmount: formData.get("Convenience_Amount" + j),
            conveyanceBill: formData.get("Convenience_BillId" + j),
          });
        }
      }

      var totalRowsF = parseInt(formData.get("totalRowsFoodAndLodging"));
      for (var k = 1; k <= totalRowsF; k++) {
        if (formData.has("foodLodging_Date" + k)) {
          travel.travelDetails.foodLodgings.push({
            foodLodgingId: randomAlpha(),
            foodLodgingDate: formData.get("foodLodging_Date" + k),
            foodLodgingBillNo: formData.get("foodLodging_BillNo" + k),
            foodLodgingHotel: formData.get("foodLodging_Hotel" + k),
            foodLodgingOccupancy: formData.get("foodLodging_Occupancy" + k),
            foodLodgingAmount: formData.get("foodLodging_Amount" + k),
            foodLodgingBill: formData.get("foodLodging_BillId" + k),
          });
        }
      }

      var totalRowsI = parseInt(formData.get("totalRowsIncidental"));
      for (var l = 1; l <= totalRowsI; l++) {
        if (formData.has("incidentals_Date" + l)) {
          travel.travelDetails.incidentals.push({
            incidentalId: randomAlpha(),
            incidentalDate: formData.get("incidentals_Date" + l),
            incidentalExpense: formData.get("incidentals_Expense" + l),
            incidentalRemarks: formData.get("incidentals_Remarks" + l),
            incidentalAmount: formData.get("incidentals_Amount" + l),
            incidentalBill: formData.get("incidentals_BillId" + l),
          });
        }
      }

      data.travels.push(travel);
    }

    var jsonData = JSON.stringify(data);

    fetch("http://127.0.0.1/upload", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 186ca51480a74b829cd593cb3e560d82410bdfc8cfcfd39fff7b0ad9f7015814",
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        // Handle response data as needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
