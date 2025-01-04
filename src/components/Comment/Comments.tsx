'use client';
import styles from './Comments.module.css'

import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [comments, setComments] = useState<{username: string; comment: string}[]>([]);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments){
        setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0){
        localStorage.setItem('comments', JSON.stringify(comments))
    }
  }, [comments])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username && comment){
        const newComment = { username, comment}
        setComments([newComment, ...comments])
        setUsername('')
        setComment('')
    }
  }

  return (
    <div className={styles.comment_container}>
      <h2>Leave a Comment!</h2>
      <form onSubmit={handleSubmit} className={styles.comment_form}>
      <div className={styles.input_box}>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        </div>
        <div className={styles.btn}>
        <button className={styles.post}>Post Comment</button>
        </div>
      </form>

    {/* Display Comments */}
      <div className={styles.display_div}>
        {
            comments.map((item, index) => (
                <div key={index} className={styles.display_comment}>
                    <h4>{item.username}</h4>
                    <p className={styles.comment}>{item.comment}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Comments;
