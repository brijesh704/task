import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


export const CreateAppointment = () => {

    const [dateSelected, setDateSelected] = useState(null);
    const [startHour, setStartHour] = useState('');
    const [startMinute, setStartMinute] = useState('');
    const [endHour, setEndHour] = useState('');
    const [endMinute, setEndMinute] = useState('');
    const [capacity, setCapacity] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        const startDate = new Date(dateSelected)
        startDate.setHours(startHour, startMinute)

        const endDate = new Date(dateSelected)
        endDate.setHours(endHour, endHour);

        console.log((endDate - startDate));
    }

    const handleDate = (e) => {
        const currentDate = e.target.value
        // console.log(currentDate);
        setDateSelected(currentDate);
    }

    // console.log(`Date = ${dateSelected} ${typeof (dateSelected)} Starthour = ${typeof (startHour)} startMinute = ${startMinute} endhour = ${endHour} endMinute = ${endMinute} capacity = ${capacity}`)
    return (
        <>
            <div className="date-container">
                <h3>Select date of appointment</h3>
                <p>Please select date that you would like to open up slots</p>

                <form action="">
                    <input type="date" placeholder="Date and Time" onChange={handleDate} />
                    {/* <DatePicker selected={dateSelected} onChange={handleDate} /> */}
                    {/* <input type="date" value={dateSelected} onChange={e => setDateSelected(e.target.value)} /> */}

                    <input type="number" placeholder="stratHour" onChange={(event) => setStartHour(event.target.value)} min="0" max="23" />
                    <input type="number" placeholder="startMinute" onChange={(event) => setStartMinute(event.target.value)} min="0" max="59" />
                    <span>:</span>
                    <input type="number" placeholder="endHour" onChange={(event) => setEndHour(event.target.value)} min="0" max="23" />
                    <input type="number" placeholder="endMinute" onChange={(event) => setEndMinute(event.target.value)} min="0" max="59" />
                    <input type="number" placeholder="capacity" onChange={(event) => setCapacity(event.target.value)} min="1" />
                    <button onClick={handleSubmit} >Create Slots</button>



                    {/* <button>Cancel</button> */}

                </form>


            </div>
        </>
    )
}
