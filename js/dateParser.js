
class DateParser {
    constructor(dateString) {
        this.date = new Date(dateString);
        this.month = this.getMonthSpelled();
    }

    getMonthSpelled() {
        const months = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        };
        return months[this.date.getMonth()];
    }

    getDateString() {
        return `${this.month} ${this.date.getDate()}, ${this.date.getFullYear()}`;
    }
}

export default DateParser;
