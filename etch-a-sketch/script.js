function main()
{
    const SQUARE_SIDE = 16;
    const containerDiv = createGrid(SQUARE_SIDE);
    const gridSquares = containerDiv.querySelectorAll(".grid-square");

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover", () => div.classList.add("paint"));
    });
}

function createGrid(size)
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

main();