import React from "react";
import utils from "./utils";
import GridButton from './GridButton';

const GameBoard = props => {
  const xSize = 21;
  const ySize = 21;

  const generateID = (xNumber, yNumber) => {
    console.log(xNumber.toString() + " " + yNumber.toString())
    return xNumber.toString() + " " + yNumber.toString();
  }

  return (
    <div className="game">
      {utils.range(1, xSize).map(yNumber => 
        (utils.range(1, ySize).map(xNumber => 
          (<GridButton 
            key={[xNumber, yNumber]} 
            id={[xNumber, yNumber]}
            y={yNumber} 
            x={xNumber} 
          />)
        )),
        <br/>
      )}
      
      <br />
    </div>
  );
};

export default GameBoard;
