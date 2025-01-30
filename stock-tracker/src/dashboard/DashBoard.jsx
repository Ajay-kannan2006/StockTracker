import './Dashboard.css'
import Details from './Details';
import Overview from './Overview';
import LineChart from './LineChart';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { mockCompanyDetails } from '../mock';
const DashBoard = () => {
    // const location = useLocation();
    // var symbol = location.state;
    var [companyDetails, setCompanyDetails] = useState(mockCompanyDetails);
    // useEffect(() => {
    //     axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=ANGQBTJWAZERYPLD`)
    //         .then((res) => {
    //             setCompanyDetails(res.data);
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])
    return (
        <div className="dashboard">
            <div className="header-part">
                <h2 className='header-content' style={{ display: "inline-block" }}>{companyDetails.Name}({companyDetails.Symbol}) </h2>
            </div>

            <div className="chart-part part">
                <LineChart symbol="IBM" />
            </div>

            <div className="overview-part part">
                <Overview symbol={symbol} price={300} currency={companyDetails.Currency} change={-30} changePercentage={10} />
            </div>
            <div className="details-part part">
                <Details name={companyDetails.Name} country={companyDetails.Country} currency={companyDetails.Currency} exchange={companyDetails.Exchange} oficialSite={companyDetails.OfficialSite} Industry={companyDetails.Industry} />
            </div>
        </div>
    );
}
export default DashBoard;

