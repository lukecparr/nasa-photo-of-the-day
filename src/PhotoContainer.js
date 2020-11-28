import React, {useState} from "react";
import "./PhotoContainer.css";
import Description from "./Description"

function PhotoContainer(props) {
	const {photoData} = props;

	return (
		<div>
			<h1>{photoData.title}</h1>
			<img src={photoData.url} alt={photoData.title}/>
			<Description data={photoData}/>
		</div>
	)
};

export default PhotoContainer;