import './App.css'
import { Blog, Comment } from './Interfaces'

interface BlogPostProps{
  blog:Blog;
}

const BlogPost: React.FC<BlogPostProps>=({blog})=>{

  return (
    
    <div className="blog-post">
      <h2>{blog.title}</h2>
      <p>By {blog.author} on {blog.createdAt.toDateString()}</p>
      <p>{blog.content}</p>
      <h3>Comments:</h3>
      {blog.comments.map((comment: Comment) => (
        <div key={comment.id} className="comment">
          <p><strong>{comment.author}</strong> said:</p>
          <p>{comment.content}</p>
          <p>{comment.createdAt.toDateString()}</p>
        </div>
      ))}
    </div>
  )

}

export default BlogPost;