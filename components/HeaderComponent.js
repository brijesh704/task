import { Link } from "react-router-dom"
export const HeaderComponent = () => {
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <h3>CREATE APPOINTMENT SLOTS</h3>
                </div>
                <div className="nav-items">
                    <ul className="list-items">
                        <li>Home</li>
                        <li>Groups</li>
                        <li>Appointment slots</li>
                        <li><Link to="/">Create Appointment slots</Link></li>
                        <li><Link to="/createapp">List Appointment slots</Link></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

