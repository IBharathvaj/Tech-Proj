// src/components/HomePage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import Post from '../components/Post';
import Mentorship from '../components/Mentorship';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  

  const handlePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-content">
        <div className="suggestions">
          {/* Display suggested profiles */}
          <h3>Suggested Users</h3>
          <div className="profile-list">
            {/* Use data from users */}
            <div className="profile-item">
              <img src="user.jpg" alt="user" />
              <p>Skilled User</p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <Chatbot />
          <div className="post-section">
            <Post onPost={handlePost} />
            {posts.map((post, index) => (
              <div key={index} className="post">
                {post.content && <p>{post.content}</p>}
                {post.image && <img src={post.image} alt="Post" />}
                {/* Add buttons for like, share, comment */}
                <button>Like</button>
                <button>Share</button>
                <button>Comment</button>
              </div>
            ))}
          </div>
        </div>
        <Mentorship />
      </div>
    </div>
  );
};

export default HomePage;
