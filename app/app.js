let gridButton = document.getElementById("grid-btn");
let columnButton = document.getElementById("column-btn");


/**Add event listener to gridButton */
gridButton.addEventListener('click', function () {
    let grid = document.getElementById("glayout");
    let column = document.getElementById("clayout");

    if (grid.classList.contains("hidden")) {
        grid.classList.remove("hidden");
        grid.classList.add("visible");
        column.classList.remove("visible");
        column.classList.add("hidden");
    }
});

/**Add event listener to columnButton */
columnButton.addEventListener('click', function () {
    let grid = document.getElementById("glayout");
    let column = document.getElementById("clayout");

    if (column.classList.contains("hidden")) {
        column.classList.remove("hidden");
        column.classList.add("visible");
        grid.classList.remove("visible");
        grid.classList.add("hidden");}

});

