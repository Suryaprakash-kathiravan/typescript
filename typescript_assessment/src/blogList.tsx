import React from 'react';
import { Blogs } from './Interfaces'; 
import BlogPost from './blogPost'; 


interface BlogListProps {
  blogs: Blogs;
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.blogs.map(blog => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
