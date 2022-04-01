import { async } from '@firebase/util';
import React from 'react'
import { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  // takes in 2 parameters, 1 to reference our variable for our database we created in our firebase config file. 2 to reference the name of the collection/table we created in the cloud firestore which is posts
  const postsCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
    });
    navigate('/');
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/Login');
    }
  }, []);

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className='inputGp'>
          <label> Title: </label>
          <input placeholder='Title...' onChange={(event) => {
            setTitle(event.target.value);
          }} />
        </div>
        <div className='inputGp'>
          <label> Post: </label>
          <textarea placeholder='Post...' onChange={(event) => {
            setPostText(event.target.value);
          }}></textarea>
        </div>
        <button onClick={createPost}> Submit Post </button>
      </div>
    </div>
  )
}

export default CreatePost