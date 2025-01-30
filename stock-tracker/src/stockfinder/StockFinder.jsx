import { useState, useEffect } from "react";
import './stockFinder.css';
import axios from "axios";
import { topGainers, mockResults } from "../mock";
import Defaultcards from "./DefaultCards";
import ResultCards from "./ResultCards";
const StockFinder = () => {
    var [search, setSearch] = useState("");
    var [results, setResults] = useState([]);
    var [topgains, setTopGains] = useState(topGainers);
    var [buttonClick, setButtonClick] = useState(false);
    // useEffect(() => {
    //     if (search != "") {
    //         axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=ANGQBTJWAZERYPLD`)
    //             .then((res) => {
    //                 setResults(res.data.bestMatches);
    //                 console.log(res.data);
    //             })
    //             .catch((err) => { console.log(err); })
    //     }
    //     else {
    //         setResults([]);
    //     }
    // }, [buttonClick]);

    var handleSearch = (e) => {
        setSearch(e.target.value);
    }

    var handleButtonClick = () => {
        setButtonClick(!buttonClick);
        setResults(mockResults.bestMatches);
        if (search == "") {
            setResults([]);
        }
    }



    // console.log(results)
    return (
        <div className="stock-finder" >
            <div className="search-div">
                <h1 style={{ fontSize: "3rem" }}>STOCK TRACKER</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="search-box" type="text" value={search} placeholder="Search" onChange={handleSearch} />
                <button onClick={handleButtonClick}>Search</button>
            </div>

            {
                results.length === 0 ?

                    <Defaultcards topGainers={topgains} />
                    :
                    <ResultCards bestResults={results} />

            }
        </div>
    );

}
export default StockFinder;



