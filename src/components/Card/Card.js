import "./Card.css";

const Card = ({newsArticle},index) => {
    return ( 
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
     );
}
 
export default Card;