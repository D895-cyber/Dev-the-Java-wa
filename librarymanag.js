class LibraryManagmentSystem {
    constructor(lname, laddress, owner, estyear) {
        this.lname = lname;
        this.laddress = laddress;
        this.owner = owner;
        this.listofbooks = [];
        this.estyear = estyear;
        this.listofuser = [];
        this.borroowerdetails = [];
        this.UserCount = 0;
    }
    addbook(bookname, author, price, Year, btype, bqty) {
        this.listofbooks.push(new Bookstock(bookname, author, price, Year, btype, bqty));
    }
    adduser(name, email, phoneNumber, address, userId) {
        userId = ++this.UserCount
        this.listofuser.push(name, email, phoneNumber, address, userId);
    }
    borrowbook(bookname, username) {
        let bookindex = -1;
        let userindex = -1;
        for (let i = 0; i < this.listofbooks.length; i++) {
            if (this.listofbooks[i].bookname == bookname) {
                bookindex = i;
                break;
            }
        }
    }
    returnbook(userId) {
        let borroowerdetails =  this.borroowerdetails.find((user)=>{
            return user.userId == userId
        })
        if(!borroowerdetails){
            console.log("No book borrowed by this user")
        }
        let brrorw = this.listofbooks.find((book)=>{
            return book.bookname == borroowerdetails.bookname
        })
        if(!brrorw){
            
        }
    }
    issuebook(userId, bookname) {
        let UserDetails = this.listofuser.find(user => user.userId === userId);
        
        if (!UserDetails) {
            throw new Error("Please register first for taking book");
        }

        let BookDetails = this.listofbooks.find(book => book.bookname === bookname);
        
        if (!BookDetails) {
            throw new Error("Book not available");
        }

        if (BookDetails.bqty === 0) {
            throw new Error("Book is not available");
        }

        BookDetails.bqty -= 1;
        this.borroowerdetails.push({
            userId: userId,
            bookname: bookname,
            submitTime: new Date(Date.now()+10000000000)
        });
    }
    addStock(bookname, author, price, Year, btype, bqty){
        this.listofbooks.push(new Bookstock(bookname, author, price, Year, btype, bqty))
    }
}


    

class Bookstock {
    constructor(bookname, author, price, Year, btype, bqty) {
        this.bookname = bookname;
        this.author = author;
        this.price = price;
        this.Year = Year;
        this.btype = btype;
        this.bqty = bqty;
    }
}

class UserDetials {
    constructor(name, email, phoneNumber, address, userId) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}
let IndiaLibrary = new LibraryManagmentSystem(`IndiaLibrary`, `tilak nagar`, `dev`, 2024)
console.log(IndiaLibrary);
IndiaLibrary.addStock(`harrypotter`, `dev`, 700, 2024, `coding`, 1)
IndiaLibrary.addStock(`history`, `dev`, 700, 2024, `past`, 100)
IndiaLibrary.adduser(`aarav`, `aarav434@gmail.com`, 9364735476, `Dwarka-21`)
IndiaLibrary.adduser(`dev`, `cdfjkds@gmail.com`, 947837476, `Dwarka-2441`)
IndiaLibrary.issuebook(1,`history`)
console.log(IndiaLibrary);