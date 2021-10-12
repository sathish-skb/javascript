const index = [{
    country: "India",
    state: {
        "TN": 9,
        "MH": 10,
        "GJ": 20
    }
}, {
    country: "US",
    state: {
        "TN": 9,
        "MH": 10,
        "GJ": 10
    }
}]

let total = 0
let table = {}
for (let nation of index) {
    const { state, country } = nation
    for (let city in state) {
        total += state[city]
    }
    table[country] = total
    total = 0
}

console.log(table)

