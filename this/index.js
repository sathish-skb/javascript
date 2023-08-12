const student = {
    name: "Luke Skywalker",
    age: 12,
    setGreeting: function () {
        return `Welcome ${this.name}`
    }
}

console.log(student.setGreeting());

/** Arrow */

const agent = {
    name: "James Bond",
    age: 36,
    setGreeting: () => `Welcome ${agent.name}`
}

console.log(agent.setGreeting());


const Doctor = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = Doctor.getX.bind(Doctor);
console.log(unboundGetX());