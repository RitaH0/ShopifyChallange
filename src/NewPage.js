import React, {useEffect, useState} from "react";
import Post from "./Post";

const NewPage = () => {
    const [posts, setPosts] = useState([{}]);

    useEffect(()=>{
        try{
            fetch ('https://api.nasa.gov/planetary/apod?api_key=az5igQ5tQdFOl9MdFLkyR8wzZAiyEMAAsSZfRxd4&count=20&')
            .then(response => response.json())
            .then(json => {
                console.log(json)

                const receivedData = json;
                setPosts(receivedData);
                document.getElementById("loader").style.visibility = "hidden";


            })
            }catch(error){
                console.log(error);
        }

},[]);



    let elements = [];

    const showPosts = () => {
        console.log('showPosts');



        for (let i = 0; i < posts.length; i++){
                if(posts[i].media_type == "image"){
                    console.log('image');
                    elements.push(
                        <Post 
                        title = {posts[i].title}
                        date = {posts[i].date}
                        explanation = { posts[i].explanation}
                        copyright = { posts[i].copyright}
                        url = { posts[i].hdurl}
                        mediaType = "image"
                        number = {i}
                        />);
                }
                else{
                    console.log('video');
                    elements.push(
                        <Post 
                        title = {posts[i].title}
                        date = {posts[i].date}
                        explanation = { posts[i].explanation}
                        copyright = { posts[i].copyright}
                        url = { posts[i].url}
                        mediaType = "video"
                        number = {i}
                        />);
                };
                // setLoaded(true);
                
                
        }
        console.log(elements);

    };

    
    return(
        <div>
            <div id = "loader" className = "loader">
                    <div></div>

            </div>


                
                <div className = "content">
                    <p className = "name">Spacestagram</p>
                    <p className = "subName">Brought to you by NASA's Astronomy Photo of the Dat (APOD) API</p>
                    
                    {showPosts()}

                    {elements}
                </div>


        </div>

    );
}

export default NewPage;