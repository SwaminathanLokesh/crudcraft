var selectedRow = null;

function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["ProductCode"] = document.getElementById("ProductCode").value;
    formData["ProductName"] = document.getElementById("ProductName").value;
    formData["Quantity"] = document.getElementById("Quantity").value;
    formData["ProductPrice"] = document.getElementById("ProductPrice").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ProductCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ProductName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Quantity;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ProductPrice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('ProductCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('ProductName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Quantity').value = selectedRow.cells[2].innerHTML;
    document.getElementById('ProductPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ProductCode;
    selectedRow.cells[1].innerHTML = formData.ProductName;
    selectedRow.cells[2].innerHTML = formData.Quantity;
    selectedRow.cells[3].innerHTML = formData.ProductPrice;
}

function onDelete(td) {
    if (confirm('Do You Want To Delete This Record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    document.getElementById('ProductCode').value = '';
    document.getElementById('ProductName').value = '';
    document.getElementById('Quantity').value = '';
    document.getElementById('ProductPrice').value = '';
}
