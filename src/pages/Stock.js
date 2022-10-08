import React from "react";

function Stock(props) {
    const stock = props.allStocks.filter( d => d.symbol === props.match.params.symbol)[0]
  return (
    <div>
      <h2>Name: {stock.name}</h2>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  )
}

export default Stock;