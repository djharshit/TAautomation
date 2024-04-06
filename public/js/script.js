document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.getElementById("yourFormId");

  // Listen for form submission
  form.addEventListener("submit", function (e) {
    // Prevent the default form submit action
    e.preventDefault();

    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(form);

    // Optional: Convert FormData into a plain object
    const formObject = {};
    formData.forEach((value, key) => (formObject[key] = value));

    // Send the form data to your backend API
    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Process success response, maybe show a message or redirect
      })
      .catch((error) => {
        console.error("Error:", error);
        // Process error response, maybe show an error message
      });
  });
});

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
}

function myDeleteFunctionConvenience() {
  var table = document.getElementById("myTableConvenience");
  var totalRowsInput = document.getElementById("totalRowsConvenience");
  var totalRows = parseInt(totalRowsInput.value);

  if (totalRows > 1) {
    table.deleteRow(-1);
    totalRowsInput.value = totalRows - 1;
  }
}
