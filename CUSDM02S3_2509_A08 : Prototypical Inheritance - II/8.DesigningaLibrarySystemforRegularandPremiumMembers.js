function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
}

function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
}

Member.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }

    if (book.isAvailable) {
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}".`);
    } else {
        console.log(`Sorry, "${book.title}" is already borrowed.`);
    }
};

function PremiumMember(name) {
    Member.call(this, name);
    this.specialCollectionAccess = true;
}

PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

PremiumMember.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 5) {
        console.log(`${this.name} cannot borrow more than 5 books.`);
        return;
    }

    Member.prototype.borrowBook.call(this, book);
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");
const book4 = new Book("Moby Dick", "Herman Melville");
const book5 = new Book("War and Peace", "Leo Tolstoy");
const book6 = new Book("Pride and Prejudice", "Jane Austen");

const regularMember = new Member("Alice");
const premiumMember = new PremiumMember("Bob");

regularMember.borrowBook(book1);
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);
regularMember.borrowBook(book4);

premiumMember.borrowBook(book4);
premiumMember.borrowBook(book5);
premiumMember.borrowBook(book6);

const boundBorrow = premiumMember.borrowBook.bind(premiumMember, book1);
boundBorrow();

console.log("Regular Member's Books:", regularMember.borrowedBooks);
console.log("Premium Member's Books:", premiumMember.borrowedBooks);
