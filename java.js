const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];

const freelancerList = document.getElementById("freelancer-list");
const averagePriceElement = document.getElementById("average");
const addedFreelancers = [];

function addFreelancer() {
  if (freelancers.length === 0) {
    alert("No more freelancers to add!");
    return;
  }
  const randomNum = Math.floor(Math.random() * freelancers.length);
  const freelancer = freelancers.splice(randomNum, 1)[0];
  addedFreelancers.push(freelancer);
  const li = document.createElement("li");
  li.innerHTML = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
  freelancerList.appendChild(li);
  updateAveragePrice();
}
function updateAveragePrice() {
  if (addedFreelancers.length === 0) {
    averagePriceElement.textContent = "No Freelancers Available";
    return;
  }
  const total = addedFreelancers.reduce((sum, f) => sum + f.price, 0);
  const average = total / addedFreelancers.length;
  document.getElementById(
    "average"
  ).textContent = `The average starting price is $${average.toFixed(2)}`;
}
