import React from "react"

function BreakLength(props) {

	function decreaseCounter() {
		if(props.breakLength === 1) {
			return
		}
		props.decreaseBreak()
	}
	
	function increaseCounter() {
		if(props.breakLength === 60) {
			return
		}
		props.increaseBreak()
	}

	return (
		<section>
			<h4>Break Length</h4>
			<section className="interval-container">
				<button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>
					Down
				</button>
				<p className="interval-length">{props.breakLength}</p>
				<button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>
					Up
				</button>
			</section>
		</section>
	)
}

export default BreakLength
