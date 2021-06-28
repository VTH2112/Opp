import Account from "./Account.js"
import normalAccount from "./normalAccount.js";
import Staff from "./Staff.js";


class adminAccount extends Account {
    constructor(id, name, dob, addr, gender, avatar, email, password, permission, staffList) {
        super(id, name, dob, addr, gender, avatar, email, password)
        this.permission = permission
        this.staffList = staffList
    }
    getPermission() {
        return this.permission;
    }
    setPermission(permission) {
        this.permission = permission;
    }
    getStaffArray() {
        return this.staffArray;
    }
    setStaffArray(staffList) {
        this.staffList = staffList;
    }
    resetPassword(staff) {
        staff.password = ''
    }
    addStaff(staff) {
        this.staffArray.push(staff, 1)
    }
    changeStaff(oldStaff, newStaff) {
        this.staffArray[this.staffArray.indexOf(oldStaff)] = newStaff
    }
    removeStaff(staff) {
        this.staffArray.splice(this.staffArray.indexOf(staff), 1)
    }
}

export default adminAccount;