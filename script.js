const getSum = () => {

    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    // Remove previous total row if it exists
    const oldAns = document.getElementById("ans");
    if (oldAns) {
        oldAns.parentElement.remove();
    }

    const row = document.createElement("tr");

    const cell = document.createElement("td");
    cell.id = "ans";          // IMPORTANT
    cell.colSpan = 2;
    cell.textContent = total;

    row.appendChild(cell);

    document.querySelector("table").appendChild(row);
};