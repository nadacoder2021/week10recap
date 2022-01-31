import PostTitle from "../components/posttitle"
import Heading from "../components/header";
import Post from "../components/post";
import Comment from "../components/comments"
import {InputComment} from "../components/Input";




function Blog() {



  return (

    <main className="App">
    
      <Heading text="WikiPigeon"> </Heading>
      <PostTitle postnumber="0" ></PostTitle>
      <Post postid="0" ></Post>
      <Comment postid="0"/>
      <InputComment />
      <br/ >
      <br />
      <br/ >
      <br />
     


      <PostTitle postnumber="1" ></PostTitle>
      <Post postid="1" ></Post>
     <Comment postid="1"/>
     <InputComment />
      <br/ >
      <br />
      <br/ >
      <br />
    

    </main>
  );
}

export default Blog;
