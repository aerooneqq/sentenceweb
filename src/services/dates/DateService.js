import axios from "axios";

export default class DateService{ 
    constructor(date){ 
        this.date = date;
    }

    getYear(){ 
        return Number(this.date.substr(0, 4));
    }

    getMonth(){ 
        let month = this.date.substr(5, 2);
        while (month.charAt(0) === "0"){ 
            month = month.substr(1)
        }

        return Number(month);
    }

    getDay(){ 
        let day = this.date.substr(8, 2)
        while (day.charAt(0) === "0"){ 
            day = day.substr(1);
        }

        return Number(day);
    }
}