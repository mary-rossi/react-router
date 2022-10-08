import React from "react";
import stocks from "../components/StockData";
import { Link } from "react-router-dom";

function Dashboard(props) {
    return (
        <div>
            {stocks.map((stock, index) => {
                const {name, symbol} = stock;
                return (
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })
        }
        </div>
    );
}

export default Dashboard;

