class Employee {

    constructor(id, email, name){
        this.id = id;
        this.email = email;
        this.name = name;
    }

    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return 'Employee';
    }
    
}
module.exports = Employee;