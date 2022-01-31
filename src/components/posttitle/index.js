
import articles from "../../libs/articles";
import css from "../posttitle/posttitle.module.css"

function PostTitle({postnumber}){
        return (
            <div className={css.title} key={articles[postnumber].id}>
                 <h3>{articles[postnumber].title}</h3>
            </div>
           
        )}

    

export default PostTitle;