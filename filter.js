// Define your table data
const tableData = [
    { id: 1, name: 'John', age: 43, city: 'New York' },
    { id: 2, name: 'Alice', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob', age: 54, city: 'Chicago' },
    { id: 4, name: 'Sophia', age: 42, city: 'San Antonio' },
    { id: 5, name: 'Daniel', age: 23, city: 'Philadelphia' }
];

// Function to filter data based on multiple conditions
function filterData(filters, data) {
    return data.filter(item => {
        let passesAllFilters = true;
        filters.forEach(filter => {
            switch (filter.type) {
                case 'includes':
                    if (!filter.values.includes(item[filter.key])) {
                        passesAllFilters = false;
                    }
                    break;
                case 'contains':
                    if (item[filter.key].indexOf(filter.value) === -1) {
                        passesAllFilters = false;
                    }
                    break;
                case 'startsWith':
                    if (!item[filter.key].startsWith(filter.value)) {
                        passesAllFilters = false;
                    }
                    break;
                default:
                    console.error('Unsupported filter type:', filter.type);
                    break;
            }
        });

        // Return true if the item passes all filters, otherwise false
        return passesAllFilters;
    });
}

// Example usage:
const filters = [
    { type: 'includes', key: 'city', values: ['New York', 'Chicago'] }
];

const filters2 = [
    { type: 'includes', key: 'city', values: ['Chicago'] }
];

const filteredData = filterData(filters, tableData);
const filteredData2 = filterData(filters2, tableData);
console.log(filteredData2.concat(filteredData));
