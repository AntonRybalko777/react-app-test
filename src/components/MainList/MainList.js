import { useSelector } from 'react-redux';
import { selectPosts } from 'redux/selectors';
import { StyledHeader, StyledLi } from './MainList.styled';

export const MainList = () => {
  const posts = useSelector(selectPosts);
  return (
    <div>
      <StyledHeader>Main page</StyledHeader>
      <ul>
        {posts.map(post => (
          <StyledLi key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};
