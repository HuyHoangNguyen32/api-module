import { PostList } from './PostList';
import { useEffect, useState } from 'react';
import postApi from '../../api/postApi';

function PostFeature() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await postApi.getAll();
      setPostList(postList);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Post Feature</h2>
      <PostList postList={postList} />
    </div>
  );
}

export default PostFeature;
