/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dateToDayOfYear = (date) => {
        const [month, day] = date.split('-').map(Number);
        let dayOfYear = day;
        for (let i = 0; i < month - 1; i++) {
            dayOfYear += daysInMonth[i];
        }
        return dayOfYear;
    };

    // Convert all dates to day of the year
    const aliceStart = dateToDayOfYear(arriveAlice);
    const aliceEnd = dateToDayOfYear(leaveAlice);
    const bobStart = dateToDayOfYear(arriveBob);
    const bobEnd = dateToDayOfYear(leaveBob);

    // Calculate the overlap range
    const overlapStart = Math.max(aliceStart, bobStart);
    const overlapEnd = Math.min(aliceEnd, bobEnd);

    return overlapStart <= overlapEnd ? overlapEnd - overlapStart + 1 : 0;
};


console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31"));
