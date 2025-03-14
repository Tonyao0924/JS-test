const employeeType = [
    { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
    { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
    { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
    { id: 1, name: "Alice", type: 2 },
    { id: 2, name: "Bob", type: 3 },
    { id: 3, name: "John", type: 2 },
    { id: 4, name: "Karen", type: 1 },
    { id: 5, name: "Miles", type: 3 },
    { id: 6, name: "Henry", type: 1 }
];

const tasks = [
    { id: 1, title: "task01", duration: 60 },//min
    { id: 2, title: "task02", duration: 120 },
    { id: 3, title: "task03", duration: 180 },
    { id: 4, title: "task04", duration: 360 },
    { id: 5, title: "task05", duration: 30 },
    { id: 6, title: "task06", duration: 220 },
    { id: 7, title: "task07", duration: 640 },
    { id: 8, title: "task08", duration: 250 },
    { id: 9, title: "task09", duration: 119 },
    { id: 10, title: "task10", duration: 560 },
    { id: 11, title: "task11", duration: 340 },
    { id: 12, title: "task12", duration: 45 },
    { id: 13, title: "task13", duration: 86 },
    { id: 14, title: "task14", duration: 480 },
    { id: 15, title: "task15", duration: 900 }
];

// 4. Count total hours worked in 1 day ? // => 39 計算 1 天的總工作時數？
function countTotalHours(employeeType, employees) {
    let totalHours = 0;
    employees.forEach((employee) => {
        const employeeTypeObj = employeeType.find((type) => type.id === employee.type);
        const workBegin = new Date(`2023-05-15T${employeeTypeObj.work_begin}`);
        const workEnd = new Date(`2023-05-15T${employeeTypeObj.work_end}`);
        const workDuration = workEnd < workBegin ? workEnd.getTime() + (24 * 60 * 60 * 1000) - workBegin.getTime() : workEnd.getTime() - workBegin.getTime();
        totalHours += workDuration / (60 * 60 * 1000);
    });
    return totalHours;
}

// 5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
function howManyEmployeeByTime(time) {
    const currentTime = new Date(`2023-05-15T${time}`);
    const employeesWorking = employees.filter((employee) => {
        const empType = employeeType.find(type => type.id === employee.type);
        const workBegin = new Date(`2023-05-15T${empType.work_begin}`);
        const workEnd = new Date(`2023-05-15T${empType.work_end}`);
        return (workBegin <= workEnd) ? currentTime >= workBegin && currentTime <= workEnd : currentTime >= workBegin || currentTime <= workEnd;
    });
    return employeesWorking.length;
}

// 6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
function calculateWorkDays(employeeType, employees, tasks) {
    let oneTimeSpendTime = countTotalHours(employeeType, employees);
    let taskSpendTimes = 0;
    tasks.forEach((task) => {
        taskSpendTimes += task.duration / 60;
    })
    let taskSpendDays = taskSpendTimes / oneTimeSpendTime;
    return Math.ceil(taskSpendDays);
}