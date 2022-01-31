import articles from "../../libs/articles"
import css from "../post/post.module.css"

function Post({postid}){
    return(articles[postid].paragraphs.map((paragraph) => {
        return (<div className={css.text} key={paragraph.id}>
            <p>{paragraph.text}
            </p> 
        
        </div>
       
    )}))}

    export default Post;
