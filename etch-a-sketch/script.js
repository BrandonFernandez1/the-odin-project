const SQUARE_SIDE = 16;

const containerDiv = document.createElement("div");
console.log(containerDiv);

for (let i = 0; i < SQUARE_SIDE; i++)
{
    for (let j = 0; j < SQUARE_SIDE; j++)
    {
        const gridDiv = document.createElement("div");
        gridDiv.textContent = "Yo";
        containerDiv.appendChild(gridDiv);
    }
}

document.body.appendChild(containerDiv);






