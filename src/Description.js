import React, {useState} from "react";
import "./Description.css";

function Description(props) {
	const {data} = props;

	return (
		<div id="description-container">
			<div id="details">
				<p>Copyright</p>
				<h2>{data.copyright}</h2>
				<p>Date</p>
				<h2>{data.date}</h2>
				<p>Source</p>
				<a href={data.hdurl}><p>{data.hdurl}</p></a>
			</div>
			<div id="expl">
				<p>{data.explanation}</p>
			</div>
		</div>

	);
};

export default Description;