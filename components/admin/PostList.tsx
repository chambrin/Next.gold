"use client"

import { AllPostsQuery } from '../../graphql/query/AllPostsQuery';
import { useQuery } from '@apollo/client';

interface Author {
 email: string;
}

interface Post {
 title: string;
 content: string;
 published: boolean;
 author: Author;
}

interface PostsResponse {
 posts: Post[];
}

export default function PostList() {
 const { loading, error, data } = useQuery<PostsResponse>(AllPostsQuery);
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error :(</p>;


 return (
  <div>
   {data?.posts.map((post) => (
    <div key={post.title}>
     <p>Title: {post.title}</p>
     <p>Content: {post.content}</p>
     <p>Published: {post.published}</p>
     <p>Author: {post.author.email}</p>
    </div>
     ))}
  </div>
 )
}