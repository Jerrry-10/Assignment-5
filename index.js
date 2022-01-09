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
    ChangeColor() // So that the new row can change colors
})
const addCol = document.querySelector(".add-col")
addCol.addEventListener("click", () =>{
    
    for(let i = 0; i < getRow.children.length; i++){ // Loops thorught the amount of rows
    col = document.createElement("div");
    col.classList.add("col-sm", "border", "border-dark", "box", "white");
    getRow.children[i].appendChild(col) // adds a child to each div
    }
    ChangeColor() // so that new col can change colors
})
const delRow = document.querySelector(".del-row")
delRow.addEventListener("click", () =>{
    let lastRow = getRow.children.length - 1 
    getRow.removeChild(getRow.children[lastRow]) // This deletes the last row

})
const delCol = document.querySelector(".del-col")
delCol.addEventListener("click", () =>{
    NumofChild = getRow.children.length
    for(let i = 0; NumofChild; i++){
        let lastCol = getRow.children[NumofChild - 1].children.length - 1
        let column = getRow.children[i]
        column.removeChild(column.children[lastCol])
    }
})
function ChangeColor(){
    Boxselecter = document.querySelectorAll(".box")
    for(let i = 0; i < Boxselecter.length; i++){  
        Boxselecter[i].addEventListener("click", () =>{
            Boxselecter = document.querySelectorAll(".box")
            selected = document.querySelector("#Colorpick").value
            Boxselecter[i].style.backgroundColor = selected
            console.log(selected)
        })
    }
}
ChangeColor()
colorall = document.querySelector(".coloringallbutton")
colorall.addEventListener("click", ()=>{
    selected = document.querySelector("#coloringall").value
    boxselect = document.querySelectorAll(".box")
    for(let i = 0; i <boxselect.length;i++){
        boxselect[i].style.backgroundColor = selected
        
    }
})