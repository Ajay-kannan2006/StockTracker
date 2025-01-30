import Defaultcard from "./Defaultcard";
// import { topGainers } from "./mock";

const Defaultcards = ({ topGainers }) => {

    return (
        <div className="top-gainers-stocks" ><br />
            <h1>TopGainers</h1>
            <hr />
            <br />
            <div className="default-stocks">
                {topGainers.top_gainers.map((gain) => (
                    <Defaultcard key={gain.ticker} ticker={gain.ticker} price={gain.price} change_amount={gain.change_amount} change_percentage={gain.change_percentage} volume={gain.volume} />
                ))}
            </div>
            <br />
            <br />
            <br />
            <h1>Top Losers</h1><hr /><br />
            <div className="default-stocks">
                {
                    topGainers.top_losers.map((loser) => (
                        <Defaultcard key={loser.ticker} ticker={loser.ticker} price={loser.price} change_amount={loser.change_amount} change_percentage={loser.change_percentage} volume={loser.volume} />
                    ))
                }
            </div>
            <br />
            <br /><br />
            <h1>Most Actively Traded</h1><hr /><br />
            <div className="default-stocks">
                {
                    topGainers.most_actively_traded.map((active) => (
                        <Defaultcard key={active.ticker} ticker={active.ticker} price={active.price} change_amount={active.change_amount} change_percentage={active.change_percentage} volume={active.volume} />
                    ))
                }
            </div>

        </div>
    );

}

export default Defaultcards;