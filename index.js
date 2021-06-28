
import normalAccount from "./module/normalAccount.js";
import adminAccount from "./module/adminAccount.js";

const staff = new normalAccount(
    1,"VTH", "01/01/1900","103 lang ha ","Female",".././login/bg.img","123@outlook.com","123"
);
console.log(staff);
const admin = new adminAccount(
    2,"ABC", "01/30/1900","13 lang ha ","Male",".././login/bg.img","ABC@outlook.com","123"
);
console.log(admin);