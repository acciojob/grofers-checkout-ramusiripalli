const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll(".prices");
	let total = 0;

	priceElements.forEach((price) => {
		total += Number(price.textContent);
	});

	const table = document.querySelector("table");

	const existingTotal = document.getElementById("total-row");
	if(existingTotal){
		existingTotal.remove();
	}

	const totalRow = document.createElement("tr");
	totalRow.id = 'total-row';

	const totalCell = document.createElement("td");
	totalCell.colSpan= 2;
	totalCell.style.fontWeight = "bold";
	totalCell.style.textAlign = "center";
	totalCell.textContent = `Total Price = Rs ${total}`;

	totalRow.appendChild(totalCell);
	table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

