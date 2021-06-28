class Staff {
    // DOB : date of birth 
    constructor(id, name, dob, addr, gender) {
        this.id = id
        this.name = name
        this.dob = dob
        this.addr = addr
        this.gender = gender
    }
    getId() {
        return this.id;
    }
    setCode(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getDob() {
        return this.dob;
    }
    setBorn(dob) {
        this.dob = dob;
    }
    getAddr() {
        return this.addr;
    }
    setHomeTown(addr) {
        this.addr = addr;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
}
export default Staff;