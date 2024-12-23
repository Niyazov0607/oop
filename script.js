// easy questions

// 1 question

// class car {
//     constructor(name, year, color, engine) {
//         this.name = name;
//         this.year = year;
//         this.color = color;
//         this.engine = engine;
//     };

//     engine() {
//         console.log(`${this.name}, ${this.year}, ${this.color}, ${this.engine}`);
//     };

//     turnonengine() {
//         console.log(`Turn on the  ${this.name}`);
//     }
// };
// const carInfo = new car("Gt 63s Coupe", "2023 year", "White color", "V8 engine");
// carInfo.turnonengine();
// console.log(carInfo);

// 2 question

// class book {
//     constructor(name, published, about) {
//         this.name = name;
//         this.published = published;
//         this.about = about;
//     };

//     bookData () {
//         console.log(`${this.name}, ${this.published}, ${this.about}`);
//     }

//     openPage () {
//         console.log("Open the page 99:");
//     }
// };

// const Info = new book("effortless", "it established 2021 year by Greg McKeown", "the book is about: Make it easier to do what matters most");
// console.log(Info);
// Info.openPage();

// 3 question

// class student {
//     constructor(name, age, major) {
//         this.name = name;
//         this.age = age;
//         this.major = major;
//     };

//     studentData () {
//         console.log(`${this.name}, ${this.age}, ${this.major}`);
//     }

//     lessonTime () {
//         console.log("Lesson starts at 18:30pm");
//     }
// };

// const Info = new student("Shohjahon", "18 years old", "Front-end Dev");
// console.log(Info);
// Info.lessonTime();

// 4 question

// class pet {
//     constructor(name, age, type) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//     };

//     playingwithpet () {
//         console.log(`${this.name}, ${this.age}, ${this.type}`);
//     }

//     eatingschedule () {
//         console.log("Rex eats 3 times a day");
//     }

//     playingwithpet () {
//         console.log("2 times day take a stroll with Rex");
//     }
// };

// const Info = new pet("Rex", "1 years old", "Dog");
// console.log(Info);
// Info.eatingschedule();
// Info.playingwithpet();

// 5 question

// class cart {
//     constructor(name1, name2, name3, name4) {
//         this.name1 = name1;
//         this.name2 = name2;
//         this.name3 = name3;
//         this.name4 = name4;
//     };

//     nameofproduct () {
//         console.log(`${this.name1}, ${this.name2}, ${this.name3}, ${this.name4}`);
//     }

//     addProduct () {
//         console.log(" Added products: banana, apple, cherry");
//     }

//     numberofproduct () {
//         console.log(" there are total 7 products");
//     }
// };

// const Info = new cart("baverage", "potato", "tomato", "greapes");
// console.log(Info);
// Info.addProduct();
// Info.numberofproduct();

//  Medium questions

// 1 question

// class bankAccount {
//     constructor(amount, pincode) {
//         this.amount = parseInt(amount);
//         this.pincode = pincode;
//     }
//     accountInfo() {
//         console.log(`Current balance: ${this.amount}, Pincode: ${this.pincode}`);
//     }
//     addMoney(amount) {
//         this.amount += amount;
//         console.log(`Your new balance: $${this.amount}`);
//     }
//     withdraw(amount) {
//         this.amount -= amount;
//         console.log(`Your new balance: $${this.amount}`);
//     }
//     checkbalance(amount) {
//         console.log(`Your current balance: $${this.amount}`);
//     }
// }
// const data = new bankAccount("1000$", "0607");
// data.accountInfo();
// data.addMoney(500);
// data.withdraw(100);
// data.checkbalance();

//  2 question

// class library {
//     constructor (name1, name2, name3) {
//         this.name1 = name1;
//         this.name2 = name2;
//         this.name3 = name3;
//     };
//     bookInfo () {
//         console.log(`1: ${this.name1}, 2: ${this.name2}, 3: ${this.name3}`);
//     };
//     addBookLibrary () {
//         console.log("4: added Automic Habits");
//     }
//     borrowBook () {
//         console.log(`l borrow the ${this.name2} book for 10 days`);
//     }
// };
// const books = new library("Rich dad or Poor dad", "effortless", "Power");
// books.bookInfo();
// books.addBookLibrary();
// books.borrowBook();

// 3 question

// class schedule {
//     constructor(partyname1, time, day) {
//         this.partyname1 = partyname1;
//         this.time = time;
//         this.day = day;
//     }
//     schedules() {
//         console.log(`${this.partyname1}, Time: ${this.time}, Day: ${this.day}`);
//     }
//     addnewParty(newPartyName, newTime, newDay) {
//         this.newPartyName = newPartyName;
//         this.newTime = newTime;
//         this.newDday = newDay;
//         console.log(`New party added: ${this.newPartyName}, ${this.newTime}, ${this.newDday}`);

//     }
//     checkAllSchedule() {
//         console.log(
//             `Check all timetable: ${this.partyname1}, Time:${this.time}, Day:${this.day}, ${this.newPartyName}, ${this.newTime}, ${this.newDday}`
//         );
//     }
// }
// const data = new schedule(
//     "First party name: Cosmic Odyssey Space Party",
//     "13:00",
//     " Monday"
// );
// data.schedules();
// data.addnewParty("  Second Party: Harvest Moon Autumn Festival", "Time: 15:30", "Day: Tuesday");
// data.checkAllSchedule();

// 4 question

// class deliverSystem {
//     constructor (devices) {
//         this.devices = devices;
//     };
//     system () {
//         console.log(`${this.devices}`);
//     }
//     createanorder (watchs) {
//         this.watchs = watchs;
//         console.log(`${watchs}`);
//     }
//     checkcondition (orderId) {
//         this.orderId = orderId;
//         console.log(`${orderId}`);
//     }
//     deliver () {
//         console.log("We deliver your product at least 7 days: Thanks for choosing us;");
//     }
// }
// const data = new deliverSystem("headphones, phones, chargers ....");
// data.system();
// data.createanorder("Your order watch: Type is Rolex, Price: 10.000$");
// data.checkcondition("Your Id: 898541545");
// data.deliver();

// 5 question

// class heroOfGame {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     };
//     info () {
//         console.log(`${this.name} ${this.age}`);
//     }
//     goCenterOfStadium () {
//         console.log("Cristiano Go to the center of Stadium");
//     }
//     attact () {
//         console.log("and attack (l mean touch the ball) the ball and score the goll");
//     }
// }
// const data = new heroOfGame("Hero of Efootball game is Cristiano Ronaldo", "39 years old");
// data.info();
// data.goCenterOfStadium();
// data.attact();

// difficult questions

// 1 question

// class smartHouse {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class controls extends smartHouse {
//     constructor(name, condition, control) {
//         super(name);
//         this.condition = condition;
//         this.control = control;
//         console.log(`${this.name} ${this.condition} ${this.control}`);
//     }
//     newDevice (name2, condition2) {
//         this.name2 = name2;
//         this.condition2 = condition2;
//         console.log(`${this.name2} ${this.condition2}`);
//     }
// }
// const smth = new controls("Name: Alice", "Control: Turn off the lights", "Condition: good, It produced - 2023 year");
// smth.newDevice("Second smarthouse name: ByteHome, it also likes previous one:", "Condition: but its new 2024 year")

// 2 question

// class onlineClass {
//     constructor(name1, age1, name2, age2) {
//         this.name1 = name1;
//         this.age1 = age1;
//         this.name2 = name2;
//         this.age2 = age2;
//     }
// }

// class newStudent extends onlineClass {
//     constructor(name1, age1, name2, age2, name3, age3) {
//         super(name1, age1, name2, age2);
//         this.name3 = name3;
//         this.age3 = age3;
//         console.log(`Name: ${this.name1} Age: ${this.age1} Name: ${this.name2} Age: ${this.age2} Its new student: Name: ${this.name3} Age: ${this.age3}`);
//     }
//     classEnded() {
//         console.log("Lessons-schedule: Mr " + this.name2 + " your class is over for today");
//     };
// }

// const lesson = new newStudent("Abduvohid", "18", "Shohjahon", "18", "Siddiq", "19");
// lesson.classEnded();

// 3 question

// class incomePortfeli {
//     constructor() {
//         this.incomes = [];
//     }

//     addincome(type, amount) {
//         this.incomes.push({ type, amount });
//     }

//     calcincome() {
//         return this.incomes.reduce(
//             (total, income) => total + income.amount, 
//             0
//         );
//     }
// }

// const portfel = new incomePortfeli();
// portfel.addincome("Aktsiya", 5000);
// portfel.addincome("Obligation", 3000);
// portfel.addincome("Cryto", 2000);

// console.log("Total income:", portfel.calcincome());


// 4

// class XabarTizimi {
//     constructor() {
//         this.xabarlar = []; 
//     }

//     xabarYubor(foydalanuvchi, xabar) {
//         this.xabarlar.push({ foydalanuvchi, xabar });
//     }

//     kelganXabarlarniKorish() {
//         return this.xabarlar;
//     }
// }

// const tizim = new XabarTizimi();
// tizim.xabarYubor("Ali", "Salom, qalaysiz?");
// tizim.xabarYubor("Vali", "Bugun uchrashamizmi?");
// tizim.xabarYubor("Olim", "Dars qachon boshlanadi?");

// console.log("Kelgan xabarlar:", tizim.kelganXabarlarniKorish());
