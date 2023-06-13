import clsx from "clsx";
import classes from './PostList.module.scss'

export function PostList({ postList }) {
  return (
    <div>
      <h3>Post List</h3>
      <ul className={clsx(classes.listStyle)}>
        {postList.filter(x => x.id <=20).map((post) => (
          <li key={post.id}>{post.id}-{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
