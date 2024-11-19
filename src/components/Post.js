// src/components/Post.js
import React, { useState } from 'react';

const Post = ({ onPost }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handlePost = () => {
    if (content.trim() || image) {
      const newPost = {
        content: content.trim(),
        image: image ? URL.createObjectURL(image) : null,
      };
      onPost(newPost);
      setContent('');
      setImage(null);
    }
  };

  return (
    <div className="post-create">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        accept="image/*"
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default Post;
