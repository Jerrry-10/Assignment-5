const addRow = document.querySelector(".add-row")
const getRow = document.querySelector(".rows")
addRow.addEventListener("click", () =>{
    const newRow = document.createElement("div")
    newRow.classList.add("row")
    NumofCols = document.querySelector(".row").querySelectorAll(".box")
    for (let i = 0; i < NumofCols.length; i++) { // This is to check to see some many cols are needed
        const col = document.createElement("div");
        col.classList.add("col-sm", "border", "border-dark", "box", "white");
        newRow.appendChild(col); // Adds cols to the row
      }
    getRow.appendChild(newRow) // adds the new row
})
const addCol = document.querySelector(".add-col")
addCol.addEventListener("click", () =>{
    
    for(let i = 0; i < getRow.children.length; i++){ // Loops thorught the amount of rows
    col = document.createElement("div");
    col.classList.add("col-sm", "border", "border-dark", "box", "white");
    getRow.children[i].appendChild(col) // adds a child to each div
    }
})
