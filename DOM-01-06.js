let employees = [
  { id: 1, name: `Nguyen Van A`, age: 18, address: `District` },
  {
    id: 2,
    name: `Nguyen Van B`,
    age: 19,
    address: `Ha Noi`,
  },
  {
    id: 3,
    name: `Nguyen Van C`,
    age: 20,
    address: `USA`,
  },
];

let table = document.querySelector("#container TBody");
console.log(table);
employees.forEach((element, index) => {
  // let row = table.
  let row = document.createElement("tr");
  let sttCell = document.createElement("td");
  let nameCell = document.createElement("td");
  let ageCell = document.createElement("td");
  let addressCell = document.createElement("td");
  sttCell.textContent = index + 1;
  nameCell.textContent = element.name;
  ageCell.textContent = element.age;
  addressCell.textContent = element.address;

  row.appendChild(sttCell);
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(addressCell);
  table.appendChild(row);
});
