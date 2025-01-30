import { mockResults } from "../mock";
import ResultCard from "./ResultCard";

const ResultCards = ({ bestResults }) => {
    return (
        <>
            <br />
            <br />
            <h2>Best Matches</h2>
            <br />
            <br />
            <div className="result-cards">
                {
                    bestResults.map((result) => {
                        return <ResultCard key={result['1. symbol']}
                            symbol={result["1. symbol"]}
                            name={result["2. name"]}
                            type={result["3. type"]}
                            region={result["4. region"]}
                            marketOpen={result["5. marketOpen"]}
                            marketClose={result["6. marketClose"]}
                            currency={result["8. currency"]}
                        />
                    })
                }
            </div>
        </>
    );
}

export default ResultCards;