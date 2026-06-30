const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";

document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".prices");
	let total= 0;
	prices.forEach(function(price){
total+= Number(price.textContent);
});

	const oldAns = document.getElementById("ans");
    if (oldAns) {
        oldAns.parentElement.remove();
    }


	const row = document.createElement("tr");
	const cell = document.createElement("td");
	cell.id="ans";
	cell.colSpan=2;
	cell.textContent = total;
	row.appendChild(cell);
	
  document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

