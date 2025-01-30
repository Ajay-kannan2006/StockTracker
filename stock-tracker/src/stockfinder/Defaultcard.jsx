import { topGainers } from "../mock";
import { useNavigate } from "react-router-dom";

const Defaultcard = ({ ticker, price, change_amount, change_percentage, volume }) => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/dashboard');
    }
    return (
        <>
            <div className="default-card" onClick={redirect}>
                <h2>{ticker}</h2>
                <hr />
                <br />
                <p>Price <span> {price}</span></p>
                <p>Change Amount <span style={{ color: parseFloat(change_amount) < 0 ? "red" : "green" }}>{change_amount}</span></p>
                <p >Change Percentage  <span style={{ color: parseFloat(change_percentage) < 0 ? "red" : "green" }}>{change_percentage}</span></p>
                <p>Volume  <span>{volume}</span></p>
            </div>
        </>
    );
}

export default Defaultcard;