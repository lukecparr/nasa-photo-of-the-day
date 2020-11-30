import React, {useState} from "react";
import "./PhotoContainer.css";
import Description from "./Description";
import styled from 'styled-components';

const Image = styled.img`
	width: 50rem;
	border-radius: 15px;
	box-shadow: 3px 3px 5px lightgrey;
`;


function PhotoContainer(props) {
	const {photoData} = props;

	return (
		<div>
			<h1>{photoData.title}</h1>
			{/* <img src={photoData.url} alt={photoData.title}/> */}
			<Image src={photoData.url} alt={photoData.title}/>
			<Description data={photoData}/>
		</div>
	)
};

export default PhotoContainer;