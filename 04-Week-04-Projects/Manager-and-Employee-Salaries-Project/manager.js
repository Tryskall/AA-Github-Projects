// Manager class


const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, salary, title, manager) {
        super(employeeName, salary, title, manager);
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    _totalSubSalary() {                                             // declare variable to equal total salary of manager + employees under manager
    let sum = 0;                                                    // declare sum variable to equal 0
    for (const employee of this.employees) {                        // iterate through employees array for each employee
        if (employee instanceof Manager) {                          // check if employee is under an instance of Manager
            sum += employee.salary + employee._totalSubSalary();    // if true, add employees salary to sum,
        } else {                                                    // if false,
            sum += employee.salary;                                 // add the emplyees salary to the sum
        }
    }
    return sum;                                                     // return the sum of the employees array of the manager
}
    calculateBonus(multiplier) {
        return  (this.salary + this._totalSubSalary()) * multiplier;
    }
}

module.exports = Manager;


// head manager Splinter 100000 * 0.05 = 5000   (S, L, R, M, D)
// asst manager Leo       90000 * 0.05 = 4500   (L, R, M, D)
// 2nd asst mngr Raph     90000 * 0.05 = 4500   (R, M, D)
// employee Mikey         85000 * 0.05 = 4250   (M)
// employee Donnie        85000 * 0.05 = 4250   (D)
// splinter totals       450000         22500
// Leo totals            350000         17500
// Raph totals           260000         13000
