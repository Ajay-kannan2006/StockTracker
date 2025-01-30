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
                <h2 className='header-content' style={{ display: "inline-block" }}>{mockCompanyDetails.Name}({mockCompanyDetails.Symbol}) </h2>
            </div>

            <div className="chart-part part">
                <LineChart symbol="IBM" />
            </div>

            <div className="overview-part part">
                <Overview symbol={mockCompanyDetails.Symbol} price={300} currency={mockCompanyDetails.Currency} change={-30} changePercentage={10} />
            </div>
            <div className="details-part part">
                <Details name={mockCompanyDetails.Name} country={mockCompanyDetails.Country} currency={mockCompanyDetails.Currency} exchange={mockCompanyDetails.Exchange} oficialSite={companyDetails.OfficialSite} Industry={companyDetails.Industry} />
            </div>
        </div>
    );
}
export default DashBoard;

