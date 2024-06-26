import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8080",
  // baseURL :"https://study-buddy-server-q75u.onrender.com"
  baseURL: "https://stack-overflow-backend-gwva.onrender.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${ 
      JSON.parse(localStorage.getItem("Profile")).token
    }`; 
  }
  return req;
});

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

//chatbot backend calls 
export const sendQuery = (query) => API.post('/chatbot/chatInput',query)

export const deleteQuery =()=> API.get('/chatbot/chatDelete')


export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllQuestion = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const fetchAllUsers = () => API.get("/user/getAllUsers");

export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const getAllComplaints = () => API.get('/complaints/AllComplaints');

export const postComplaint = (complaintData)=> API.post('/complaints/postComplaint' , complaintData)