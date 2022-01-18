import React, {Col, Row, Button} from  "react-bootstrap";
const Post = ({
    title, date, explanation, copyright, url, mediaType, number
}) => {
    const changeColor = (btnElement) => {
        console.log("clicked")
        if (btnElement.style.color == "white"){
            // console.log("was white")
            btnElement.style.color = "red";
        }else{
            btnElement.style.color = "white";
        };

    }
    // console.log(number)
    const idName = "btn"+number;
    // console.log(idName)

    if (mediaType == "image"){
        return(
            <Col>
                <img  className = "image" src = {url} width = "800px" height = "auto"></img>
                <p className = "copyright"> {copyright}</p>
                <h className = "title">{title} - {date}</h>
                <button id = {idName} type="button" onClick = {() => {
                    const btnElement = document.getElementById(idName);
                    changeColor(btnElement);
                    }} 
                    className = "likeButton"><i className="fas fa-heart"></i></button>
                <p className = "explanation"> {explanation}</p>
            </Col>

        );
    }
    else{
        return(
            <Col>
                <iframe className = "image" width = "500px" height = "auto" src={url}>
                </iframe >
                <p className = "copyright"> {copyright}</p>
                <h className = "title">{title} - {date}</h>
                <button id = {idName} type="button" onClick = {() => {
                    const btnElement = document.getElementById(idName);
                    changeColor(btnElement);
                    }} 
                    className = "likeButton"><i className="fas fa-heart"></i></button>
                <p className = "explanation"> {explanation}</p>
            </Col>
        );
    }

}

export default Post;