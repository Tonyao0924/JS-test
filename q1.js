const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];

//   1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
function getEmployeesCountByFactory(factories) {
    return factories.map(factory => {
        return {
            name: factory.name,
            count: factory.employees.length,
        }
    })
}

//   2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
function getFactoriesCountByEmployee(factories) {
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
    return ans2;
}
//   3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
function orderEmployeesByAlphabeticalOrder(factories) {
    return factories.map(factory => ({
        name: factory.name,
        employees: factory.employees.sort()
    })).sort((a, b) => a.name.localeCompare(b.name));
}