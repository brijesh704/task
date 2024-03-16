import { useState } from "react";
import { ListComponent } from "./ListComponent";
import DatePicker from "react-datepicker"


export const ShowListComponent = () => {

    const [date, setDate] = useState(null);
    const handleDate = (date) => {
        // const currentDate = e.target.value
        // console.log(currentDate);
        setDate(date)
    }

    return (
        <div className="show-list-Container">

            {/* <input type="date" placeholder="Date and Time" onChange={handleDate} /> */}
            <DatePicker selected={date} onChange={handleDate} />

            <button>search</button>

            <ListComponent />

        </div>
    )
}