import { useState } from "react";
import "./App.css";

function Card() {


	return (
		<div className="h-screen bg-blue-300">
			<div className="flex flex-col w-full h-full justify-center items-center gap-1 text-slate-100">
				<div className="bg-gray-900">
					<div className="flex flex-col">
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-lg min-h-[50px]">{formula}</div>
						<div className="text-end pt-1 pb-1 pr-2 pl-2 text-2xl" id="display">{outputScreen}</div>
					</div>
					<div className="grid grid-rows-[auto] grid-template-area gap-1 p-2 bg-gray-900">
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-red-600 ac" id="clear" onClick={clearScreen}>AC</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 divide" id="divide" onClick={operator}>/</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 multiply" id="multiply" onClick={operator}>*</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 seven" id="seven" onClick={number}>7</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 eight " id="eight" onClick={number}>8</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 nine " id="nine" onClick={number}>9</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 minus " id="subtract" onClick={operator}>-</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 four " id="four" onClick={number}>4</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 five " id="five" onClick={number}>5</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 six " id="six" onClick={number}>6</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-500 plus " id="add" onClick={operator}>+</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 one" id="one" onClick={number}>1</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 two" id="two" onClick={number}>2</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 three" id="three" onClick={number}>3</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-blue-600 equal" id="equals" onClick={equal}>=</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 zero" id="zero" onClick={number}>0</button>
						<button className="text-center pl-8 pr-8 pt-4 pb-4 bg-gray-400 point" id="decimal" onClick={point}>.</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
