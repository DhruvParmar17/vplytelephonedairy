let entries = [];

function addEntry() {
  const entry = {
    name: document.getElementById("name").value,
    company: document.getElementById("company").value,
    phone: document.getElementById("phone").value,
    salesman: document.getElementById("salesman").value,
    address: document.getElementById("address").value,
    rate: document.getElementById("rate").value,
    products: document.getElementById("products").value
  };

  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));
  displayEntries();
  clearForm();
}

function displayEntries(filtered = null) {
  const list = document.getElementById("entry-list");
  list.innerHTML = "";
  const show = filtered || entries;

  show.forEach((entry, index) => {
    list.innerHTML += `
      <div class="entry">
        <strong>Name:</strong> ${entry.name} <br>
        <strong>Company:</strong> ${entry.company} <br>
        <strong>Phone:</strong> ${entry.phone} <br>
        <strong>Salesman:</strong> ${entry.salesman} <br>
        <strong>Address:</strong> ${entry.address} <br>
        <strong>Rate:</strong> ${entry.rate} <br>
        <strong>Products:</strong> ${entry.products} <br>
      </div>
    `;
  });
}

function clearForm() {
  document.querySelectorAll(".form-container input").forEach(input => input.value = "");
}

function searchEntries() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = entries.filter(entry =>
    Object.values(entry).some(value =>
      value.toLowerCase().includes(query)
    )
  );
  displayEntries(filtered);
}

window.onload = function() {
  const saved = localStorage.getItem("entries");
  if (saved) entries = JSON.parse(saved);
  displayEntries();
};
