import Staff from "./Staff.js";

class Account extends Staff {
    constructor(id, name, dob, addr, gender, avatar, email, password) {
        super(id, name, dob, addr, gender)
        this.avatar = avatar
        this.email = email
        this.password = password
    }
    getAvatar() {
        return this.avatar;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getAvatar() {
        return this.avatar;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    login(email, password) {
        if (this.email == email && this.password == password) {
            console.log('Success...');
        } else {
            console.log('Error...');
        }
    }
}
export default Account;