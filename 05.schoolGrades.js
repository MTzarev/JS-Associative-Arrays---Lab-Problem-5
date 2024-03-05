function schoolGrades(input) {
    let map = new Map();

    for (const list of input) {
        let nameGrades = list.split(' ');
        let name = nameGrades[0];
        let grades = nameGrades.slice(1).map(Number);

        if (!map.has(name)) {
            map.set(name, { grades: grades, count: grades.length });
        } else {
            let studentData = map.get(name);
            studentData.grades = studentData.grades.concat(grades);
            studentData.count += grades.length;
            map.set(name, studentData);
        }
    }


    let sortedResults = Array.from(map).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    for (let [name, { grades, count }] of sortedResults) {
        let sum = grades.reduce((a, b) => a + b, 0);
        let avg = sum / count;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
// schoolGrades(['Steven 3 5 6 4',
// 'George 4 6',
// 'Tammy 2 5 3',
// 'Steven 6 3']);