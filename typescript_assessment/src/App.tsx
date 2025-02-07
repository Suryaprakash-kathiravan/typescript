import './App.css'
// import BlogList from './blogList'
import BlogPost from './blogPost'
import { Blog } from './Interfaces';

function App() {
  const sampleData: Blog = {
        id: '1',
        title: 'First Blog Post',
        author: 'Alice',
        content: 'This is the content of the first blog post.',
        comments: [
          {
            id: '1',
            author: 'Bob',
            content: 'Great post!',
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      }
    
    


  return (
    <>
      <BlogPost blog={sampleData}/>
    </>
  )

}
export default App
