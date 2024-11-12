 import axios from "axios";
import { useEffect, useState } from "react"; 

function App() {

 
  const [news,setNews] = useState([]);
  let [loading, setLoading] = useState(true);
  const [error, setError]= useState(null);
  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-10-12&sortBy=publishedAt&apiKey=56500b46b329476f87fb809ba3374370`
      ).then(data=>{
        setNews(data.data.articles); 
        setLoading(false);
        setError(null);
      }).catch(err=>{
        setNews([]);
        setError(err);
      }); 

   
  },[]) 
 
  return (
    <div className="App">
        <header>
          <h1>Tesla News</h1>
          <nav>
            <a href="/">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contact us</a>
          </nav>
        </header>

        <main> 
          <h1>TOP NEWS</h1>
          <section className="main-news-section">
          
            {error && <p>404 Couldn't load resources</p>}
            {loading && <p>Loading...</p>}
            {news && news.map((newsArticle,index)=>(
                <div className="news-card" key={index}>
                  <div className="thumbnail-img">
                    <img src={newsArticle.urlToImage} alt="image" />
                  </div>
                  <div className="news-card-body">
                    <a href={newsArticle.url}><h3>{newsArticle.title}</h3></a>
                    <p>{newsArticle.description}</p>
                    <div className="news-card-text">
                      <p>Published:{newsArticle.publishedAt}</p>

                      <p><a href={newsArticle.url}>Read more </a></p>
                    </div>
                  </div>
                </div>
              ))
            }
          
             
             
          </section>
           
        </main>
        <footer>
          <p>Created by <a href="https://www.linkedin.com/in/adem-mulic-289864253/">Adem Mulic</a></p>
        </footer>
    </div>
  );
}

export default App;
