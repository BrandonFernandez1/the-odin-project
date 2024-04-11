function main()
{
    const SQUARE_SIDE = 16;
    const containerDiv = createPage(SQUARE_SIDE);
    const gridSquares = containerDiv.querySelectorAll(".grid-square");

    
    
    //Color changing
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover", () => gridSquare.classList.add("colour"));
    });

    
    
    //Button pressing
    const button = document.querySelector("button");
    button.textContent = "Choose board size: ";
    button.addEventListener("click", removeAllChildNodes(containerDiv))
    console.log(containerDiv);

}

function createPage(size)
{    
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    for (let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-square");
            containerDiv.appendChild(gridDiv);
        }
    }
    document.body.appendChild(containerDiv);
    return containerDiv;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

main();







/*
function main()
{
    const SQUARE_SIDE = 16;
    let size = SQUARE_SIDE;

    createPage(size);

    

    function createPage(size) {

        const button = document.querySelector("button");
        button.addEventListener("click", changeGrid());
        
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("container");

        for (let i = 0; i < size; i++)
        {
            for (let j = 0; j < size; j++)
            {
                const gridDiv = document.createElement("div");
                gridDiv.classList.add("grid-square");
                containerDiv.appendChild(gridDiv);
            }
        }
        document.body.appendChild(containerDiv);
    }

    function changeGrid() {
        let newSize = prompt("Change number of pixels: ");
        createPage(newSize);
    }
}

main()
*/