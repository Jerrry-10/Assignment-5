const addRow = document.querySelector(".add-row")
const getRow = document.querySelector(".rows")
addRow.addEventListener("click", () =>{
    const newRow = document.createElement("div")
    newRow.classList.add("row")
    NumofCols = document.querySelector(".row").querySelectorAll(".box")
    for (let i = 0; i < NumofCols.length; i++) {
        const col = document.createElement("div");
        col.classList.add("col-sm", "border", "border-dark", "box", "white");
        newRow.appendChild(col);
      }
    getRow.appendChild(newRow)
})
