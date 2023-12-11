import React from 'react';

const ListComponent = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    const updatedData = result.map((post) => ({ ...post, likes: 0 }));
    setData(updatedData);
  };

  const handleLike = (id) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (id) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.id === id && post.likes > 0 ? { ...post, likes: post.likes - 1 } : post
      )
    );
  };

  return (
    <div>
      <h1>Post List</h1>
      <ul style={{listtype:'none'}}>
        {data.map((post) => (
          <li key={post.id}>
            <strong>ID:</strong> {post.id}, <strong>Title:</strong> {post.title},{' '}
            <strong>Likes:</strong> {post.likes}
            <button onClick={() => handleLike(post.id)}>Like</button>
            <button onClick={() => handleDislike(post.id)}>Dislike</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
