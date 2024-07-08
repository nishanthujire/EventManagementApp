// apiConfig.js

// Base URL for the API
//export const baseUrl = 'https://825d-103-141-112-26.ngrok-free.app'; //production url
export const baseUrl = 'https://1232-103-141-112-27.ngrok-free.app'; //test server url


// API Endpoints
export const urlEndPoints = {
  login: '/api/authenticate/login',
  register:'/api/authenticate/register',
  listVehicleDocuments:'/api/user/list_documents'
//   post: id => `/posts/${id}`,
//   createPost: '/posts',
//   updatePost: id => `/posts/${id}`,
//   deletePost: id => `/posts/${id}`,
};