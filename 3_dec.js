class Library {
    constructor(lname, laddress, OpenYear, lphone, lmanager) {
        this.lname = lname;
        this.laddress = laddress;
        this.OpenYear = OpenYear;
        this.lphone = lphone;
        this.lmanager = lmanager;
        this.books = [];
        this.UserCount = 0;
        this.BorrowListOfUser = [];
        this.BorrowedBooks = [];
        this.ListOfUser = [];
    }

    AddBook(BookName, Author, Price, Bqty, BtypeOfBook) {
        this.books.push(new BookStock(BookName, Author, Price, Bqty, BtypeOfBook));
    }
    DeleteBook(){
        this.books.pop();
    }

    AddUser(name, phone, email, address) {
        const userId = ++this.UserCount;
        this.ListOfUser.push(new UserDetails(name, phone, email, address, userId));
    }
}

class UserDetails {
    constructor(name, phone, email, address, UserId) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.userId = UserId;
    }
}

class BookStock {
    constructor(BookName, Author, Price, Bqty, BtypeOfBook) {
        this.BookName = BookName;
        this.Author = Author;
        this.Price = Price;
        this.Bqty = Bqty;
        this.BtypeOfBook = BtypeOfBook;
    }
}


let IndiaLibrary = new Library(`IndiaLibrary`, `Azadpur`, 1999, 9011463823, `Dev`);


for (let i = 1; i <= 4; i++) {
    IndiaLibrary.AddBook(
        `Book${i}`, // Book name
        `Author${i}`, // Author name
        Math.floor(Math.random() * 500) + 100, // Price (random between 100-600)
        Math.floor(Math.random() * 50) + 1, // Quantity (random between 1-50)
        `Type${(i % 10) + 1}` // Book type (Type1, Type2, ..., Type10)
    );
}

// Add 500 users
for (let i = 1; i <= 5; i++) {
    IndiaLibrary.AddUser(
        `User${i}`, // User name
        `900000000${i % 10}`, // Phone number (randomized last digit)
        `user${i}@gmail.com`, // Email
        `Address${i}` // Address
    );
}
IndiaLibrary.DeleteBook();

// Display library details
console.log(IndiaLibrary);
