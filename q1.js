const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];

//   1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
const ans1 = factories.map(factory => ({
    name: factory.name,
    count: factory.employees.length
}));
console.log(ans1);

//   2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
const factoriesCountByEmployee = {};
factories.forEach(factory => {
    factory.employees.forEach(employee => {
        if (factoriesCountByEmployee[employee]) {
            factoriesCountByEmployee[employee]++;
        } else {
            factoriesCountByEmployee[employee] = 1;
        }
    });
});
const ans2 = Object.entries(factoriesCountByEmployee).map(([employee, count]) => ({
    employee,
    count
}));
console.log(ans2);

//   3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
const ans3 = factories.map(factory => ({
    name: factory.name,
    employees: factory.employees.sort()
})).sort((a, b) => a.name.localeCompare(b.name));
console.log(ans3);