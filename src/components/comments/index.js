import articles from "../../libs/articles";
import css from "../comments/comments.module.css"

function Comment({postid}) {
    console.log(postid)
  return articles[postid].comments.map((comment) => {
    return (
      <div className= {css.comment} key={comment.id} >
        <h4>{comment.name} says:</h4>
   
        <p>{comment.text}</p>
      </div>
    );
  });
}
export default Comment;
