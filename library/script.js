const myLibrary = [];

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 1937, "No"));
myLibrary.push(new Book("Matilda", "Roald Dahl", 1988, "No"));

const openModalButton = document.querySelector("#add-book");
const dialogWindow = document.querySelector("#library-modal")
const cancelModalSubmissionButton = document.querySelector("#cancel-modal")
const confirmModalSubmissionButton = document.querySelector("#confirm-modal");

openModalButton.addEventListener("click", () => {
    dialogWindow.showModal();
    const bookInformationInputs = document.querySelectorAll("input");
    bookInformationInputs.forEach((input) => {input.value = ""});
})

cancelModalSubmissionButton.addEventListener("click", () => {
    dialogWindow.close();
})

confirmModalSubmissionButton.addEventListener("click", () => {
    let userInfo = [];
    let bookArray = []; //I need to add the to an array because I used a "for (const ... of ...)" loop.

    const bookInformationInputs = document.querySelectorAll("input");
    const readStatus = document.querySelector("select");
    bookInformationInputs.forEach((input) => {
        if (input.value == "") userInfo.push(' ');
        else userInfo.push(input.value);
    });
    userInfo.push(readStatus.value);

    const newBook = new Book(userInfo[0], userInfo[1], userInfo[2], userInfo[3]);
    bookArray.push(newBook);
    addBooktoLibrary(bookArray);

    bookInformationInputs.forEach((input) => {input.value = ""});
    dialogWindow.close();
})

addBooktoLibrary(myLibrary);

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

function addBooktoLibrary(books) {
    const tableBody = document.querySelector("tbody");

    for (const book of books) {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const yearCell = document.createElement("td");
        yearCell.textContent = book.year;
        row.appendChild(yearCell);

        const readCell = document.createElement("td");
        readCell.textContent = book.read;
        row.appendChild(readCell);

        const removeButtonCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("remove-button");

        removeButton.addEventListener("click", (event) => {
            const buttonClicked = event.target;
            console.log(buttonClicked);
            const row = buttonClicked.closest("tr");
            row.remove();
        })

        removeButtonCell.appendChild(removeButton);
        row.appendChild(removeButtonCell);

        tableBody.appendChild(row);
    }
}