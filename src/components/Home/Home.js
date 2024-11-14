import axios from "axios";
import { useEffect, useState } from "react";  
import Card from "../Card/Card";
import "./Home.css";
import Error from "../Error/Error";
const Home = () => {

    const [news,setNews] = useState([]);
    let [loading, setLoading] = useState(true);
    const [error, setError]= useState(null);
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-10-14&sortBy=publishedAt&apiKey=56500b46b329476f87fb809ba3374370`
        ).then(data=>{
            setNews(data.data.articles); 
            setLoading(false);
            setError(null);
        }).catch(err=>{
            setNews([]);
            setError(err);
            setLoading(false);
        }); 

    
    },[]) 
 

    return ( 
        <main> 
          {!error && <h1>TOP NEWS</h1>}
          {error && <Error/>}
          <section className="main-news-section">
          
            
            {loading && <p>Loading...</p>}
            {news && news.map((newsArticle,index)=>(
                <Card newsArticle = {newsArticle} index={index}/> 
              ))
            } 
          </section>
           
        </main>
    );
}
 
export default Home;