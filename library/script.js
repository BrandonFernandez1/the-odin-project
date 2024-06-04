const myLibrary = [];

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 1937, "No"));
myLibrary.push(new Book("Matilda", "Roald Dahl", 1988, "No"));

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

function addBooktoLibrary(books) {
    const tableBody = document.querySelector("table");

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
        const removeButton = document.createElement("buttton");
        removeButton.textContent = "X";
        removeButtonCell.appendChild(removeButton);
        row.appendChild(removeButtonCell);

        tableBody.appendChild(row);
    }
    document.body.appendChild(tableBody);
}


const openModalButton = document.querySelector("#add-book");
const dialogWindow = document.querySelector("#library-modal")
const cancelModalSubmissionButton = document.querySelector("#cancel-modal")
const confirmModalSubmissionButton = document.querySelector("#confirm-modal");

openModalButton.addEventListener("click", () => {
    //Function that opens the modal
    dialogWindow.showModal();
})

cancelModalSubmissionButton.addEventListener("click", () => {
    dialogWindow.close();
})

confirmModalSubmissionButton.addEventListener("click", () => {
    let userInfo = [];

    const bookInformationInputs = document.querySelectorAll("input");
    const readStatus = document.querySelector("select");
    bookInformationInputs.forEach((input) => {userInfo.push(input.value)});
    userInfo.push(readStatus.value);

    console.log(userInfo);

    // const newBook = new Book(userInfo[0], userInfo[1], userInfo[2], userInfo[3]);
    // addBooktoLibrary(newBook);
    // Why ain't it iterable tho it's literally one thing just iterate yourself????/
})

addBooktoLibrary(myLibrary);
