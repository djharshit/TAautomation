document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.getElementById("yourFormId");

    // Listen for form submission
    form.addEventListener("submit", function (e) {
        // Prevent the default form submit action
        e.preventDefault();

        document.getElementById("loadingIndicator").style.display = "flex"; // Changed to 'flex' to apply CSS flexbox styling

        // Create a FormData object, passing the form as a parameter
        var formData = new FormData(form);

        // Optional: Convert FormData into a plain object
        // const formObject = {};
        // formData.forEach((value, key) => (formObject[key] = value));

        var formObject = {
            name: formData.get("Name"),
            empId: formData.get("empID"),
            location: formData.get("location"),
            designation: formData.get("designation"),
            department: formData.get("department"),
            purposeOfVisit: formData.get("Purpose_of_Visit"),
            travels: [],
        };

        var totalRowsT = parseInt(formData.get("totalRowsTravelling"));
        var travel = {
            travelId: randomAlpha(),
            travelDate: formData.get("Date1"),
            travelFrom: formData.get("From1"),
            travelTo: formData.get("To1"),
            travelMode: formData.get("Mode1"),
            travelClass: formData.get("Class1"),
            travelFare: formData.get("Fare1"),
            travelConveyance: formData.get("Convenience1"),
            travelFoodLodging: formData.get("Food_Lodging1"),
            travelIncidental: formData.get("Incidental1"),
            travelTotal: formData.get("Total1"),
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

        formObject.travels.push(travel);

        // Print the form data to the console
        console.log(formObject);

        // Send the form data to your backend API
        fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer 186ca51480a74b829cd593cb3e560d82410bdfc8cfcfd39fff7b0ad9f7015814",
            },
            body: JSON.stringify(formObject),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);

                // Form reset after successful submission
                document.getElementById("yourFormId").reset();

                // Clear the table rows after successful submission
                let tableIds = ['myTableIncidental', 'myTableFoodAndLodging', 'myTableConvenience'];
                for (let i = 0; i < tableIds.length; i++) {
                    let table = document.getElementById(tableIds[i]);
                    while (table.rows.length > 3) {
                        table.deleteRow(3);
                    }
                }
                // Process success response, maybe show a message or redirect
            })
            .catch((error) => {
                console.error("Error:", error);
                // Process error response, maybe show an error message
            })
            .finally(() => {
                // Hide the loading message regardless of success or failure
                document.getElementById("loadingIndicator").style.display = "none";
            });
    });
});

function myDeleteFunctionConvenience() {
    var table = document.getElementById("myTableConvenience");
    var totalRowsInput = document.getElementById("totalRowsConvenience");
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
        '<input type="date" name="Convenience_Date' +
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
        '<input type="number" name="Convenience_Amount' +
        (totalRows + 1) +
        '" maxlength="30" />';
    cell8.innerHTML =
        '<input type="file" name="Convenience_Bill' +
        (totalRows + 1) +
        '" maxlength="30" />';
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
        '<input type="date" name="foodLodging_Date' +
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
        '<input type="number" name="foodLodging_Amount' +
        (totalRows + 1) +
        '" maxlength="30" />';
    cell7.innerHTML =
        '<input type="file" name="foodLodging_Bill' +
        (totalRows + 1) +
        '" maxlength="30" />';
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
        '<input type="date" name="incidentals_Date' +
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
        '<input type="number" name="incidentals_Amount' +
        (totalRows + 1) +
        '" maxlength="30" />';
    cell6.innerHTML =
        '<input type="file" name="incidentals_Bill' +
        (totalRows + 1) +
        '" maxlength="30" />';
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

// Event listener for submit button
document.getElementById("submitButton").addEventListener("click", function () {
    const client = new Appwrite.Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("64dcc02f3d1750e6d155");

    const storage = new Appwrite.Storage(client);

    const promise = storage.createFile(
        "6603d7829d049f9fb11b",
        Appwrite.ID.unique(),
        document.getElementById("convenienceFileInput1").files[0]
    );

    promise.then(
        function (response) {
            console.log("Success", response); // Success
        },
        function (error) {
            console.log("Error", error); // Failure
        }
    );
});

