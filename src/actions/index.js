import React from 'react'

export const ADD = 'Add'

const API = 'https://jsonplaceholder.typicode.com/'
const DEFAULT = 'posts/1'

export function fetchData (){
  fetch(API+DEFAULT)
  .then(response => response.json())
  .then(parsedJSON => parsedJSON.results.map(user =>
  {
    user : `${user.userID}` ,
    id : `${user.postID}`,
    title : `${user.title}`,
    body : `${user.body}`
  }))
  .then(addAction(user))

export function addAction(data){
return{
        type : ADD,
        data : data
  }
}
