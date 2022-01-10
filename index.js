// #1 adds rows to grid
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
    Boxselecter = document.querySelectorAll(".box")
    ChangeColor() // So that the new row can change colors
})
// #2 add columns to the grid
const addCol = document.querySelector(".add-col")
addCol.addEventListener("click", () =>{
    
    for(let i = 0; i < getRow.children.length; i++){ // Loops thorught the amount of rows
    col = document.createElement("div");
    col.classList.add("col-sm", "border", "border-dark", "box", "white");
    getRow.children[i].appendChild(col) // adds a child to each div
    }
    ChangeColor() // so that new col can change colors
})
// #3 remove rows from the grid
const delRow = document.querySelector(".del-row")
delRow.addEventListener("click", () =>{
    let lastRow = getRow.children.length - 1 
    getRow.removeChild(getRow.children[lastRow]) // This deletes the last row

})

// #4 remove columns from the grid
const delCol = document.querySelector(".del-col")
delCol.addEventListener("click", () =>{
    NumofChild = getRow.children.length
    for(let i = 0; NumofChild; i++){
        let lastCol = getRow.children[NumofChild - 1].children.length - 1
        let column = getRow.children[i]
        column.removeChild(column.children[lastCol])
    }
})

// #6 fill all uncolored cells with the currently selected color
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
//#7 fill all uncolored cells with the currently selected color
whitecolor = document.querySelector(".whitecolor")
whitecolor.addEventListener("click", ()=>{
    colors = document.querySelector("#white").value
    console.log("test")
    for(let i = 0; i < Boxselecter.length; i++){
        if(Boxselecter[i].style.backgroundColor == "")
         Boxselecter[i].style.backgroundColor = colors
        
    }
})

// #8 fill all cells with the currently selected color
colorall = document.querySelector(".coloringallbutton")
colorall.addEventListener("click", ()=>{
    selected = document.querySelector("#coloringall").value
    boxselect = document.querySelectorAll(".box")
    for(let i = 0; i <boxselect.length;i++){
        boxselect[i].style.backgroundColor = selected
        
    }
})
//#10 mouseover function click and hold (mouseover) from a single cell (start) to a different cell (end)
function mouseover(){
    let drag = document.querySelector('#drag')
    let isMousepress = false // to determine if a mouse is clicking or dragging
    for(let i = 0; i < Boxselecter.length; i++){
        console.log("test")
    Boxselecter[i].addEventListener("mousedown", () =>{
        Boxselecter[i].style.backgroundColor = drag.value
        isMousepress = true
    })
    Boxselecter[i].addEventListener("mousemove", () =>{
        if(isMousepress == true){
            Boxselecter[i].style.backgroundColor = drag.value
        }
    })
    Boxselecter[i].addEventListener("mouseup", () =>{
        Boxselecter[i].style.backgroundColor = drag.value
        isMousepress = false
    })
}}
mouseover()