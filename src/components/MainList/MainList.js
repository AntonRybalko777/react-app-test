import { useSelector } from 'react-redux';
import { selectPosts } from 'redux/selectors';

export const MainList = () => {
  const posts = useSelector(selectPosts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
