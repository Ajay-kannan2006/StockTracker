

const Overview = ({ symbol, price, currency, change, changePercentage }) => {
    return (
        <>
            <p>{symbol}</p>
            <div className="overview-detail">
                <span >${price}<sup style={{ fontSize: "1rem", color: "gray" }}>{currency}</sup></span>
                <span style={{ color: change > 0 ? "green" : "red" }}>{change}({changePercentage})%</span>
            </div>
        </>
    );
}
export default Overview;