import React from 'react'
import axios from 'axios'

export const ADD = 'Add'

const API = 'https://jsonplaceholder.typicode.com/'
const DEFAULT = 'posts/1'

export function fetchData (){
/*  fetch(API+DEFAULT)
  .then(response => response.json())
  .then(parsedJSON => parsedJSON.results.map(user =>
  {
    user : `${user.userID}` ,
    id : `${user.postID}`,
    title : `${user.title}`,
    body : `${user.body}`
  }))
  .then(addAction(user))
*/

    const data = axios.get(API+DEFAULT);

    return{
            type : ADD,
            data : data
      }
    }
