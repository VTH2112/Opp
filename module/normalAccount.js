import Account from "./Account.js"
import Staff from "./Staff.js";


class normalAccount extends Account {

    constructor(id, name, dob, addr, gender, avatar, email, password) {
        super(id, name, dob, addr, gender, avatar, email, password)
    }
    checkTimeKeeping() {
        const hour = new Date().getHours();
        if (hour >= 8 && hour <= 18) {
            console.log("work-points checked");
        } else {
            console.log("Time out");
        }
    }
    quitJob() {}

    takeOff() {}
}
export default normalAccount;