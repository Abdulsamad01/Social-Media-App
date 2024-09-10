import React, { useState, useEffect } from "react";
import axios from "axios";

const SocialMediaAppJSONPlaceholder = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: { _page: page, _limit: 1000 },
        });

        setPosts((prevPosts) => [...prevPosts, ...response.data]);
        if (response.data.length === 0) setHasMore(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="social-media-app">
      <h1>Social Media App (JSONPlaceholder)</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      {loading && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts to show.</p>}
    </div>
  );
};

export default SocialMediaAppJSONPlaceholder;
