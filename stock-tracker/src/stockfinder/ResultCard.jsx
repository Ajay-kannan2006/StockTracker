import { mockResults } from "../mock";
import { useNavigate } from "react-router-dom";
const ResultCard = ({ name, symbol, type, region, marketOpen, marketClose, currency }) => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/dashboard')
    }
    return (
        <div className="result-card" onClick={redirect}>
            <h2>{name}</h2>
            <hr />
            <br />
            <p><b>Symbol</b><span>{symbol}</span></p>
            <p><b>Type</b><span>{type}</span></p>
            <p><b>Region</b><span>{region}</span></p>
            <p><b>Market Open</b><span>{marketOpen}</span></p>
            <p><b>Market Close</b><span>{marketClose}</span></p>
            <p><b>Currency</b><span>{currency}</span></p>
            <p></p>
        </div>
    );
}
export default ResultCard;