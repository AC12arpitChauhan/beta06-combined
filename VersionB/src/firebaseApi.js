// // src/firebaseApi.js

// import { doc, getDoc, collection, addDoc, updateDoc, setDoc, getDocs } from "firebase/firestore";
// import { db } from "./firebaseConfig.js";
// import firebase from 'firebase/compat/app';

// // Function to add a user
// export const addUser = async (userId, profilePhoto) => {
//   try {
//     const userRef = doc(db, "Users", userId);
//     await setDoc(userRef, {
//       profilePhoto,
//       followersCount: 0,
//       followingCount: 0,
//       postsCount: 0,
//       occupation: 'Writer' // Set default occupation or pass it as a parameter if needed
//     });
//     console.log("User added successfully");
//   } catch (error) {
//     console.error("Error adding user: ", error);
//   }
// };

// // Function to create or update a user
// export const createUser = async (userId, profilePhoto) => {
//   const userRef = doc(db, "Users", userId);
//   await setDoc(userRef, {
//     profilePhoto,
//     followersCount: 0,
//     followingCount: 0,
//     postsCount: 0
//   });
// };

// // Function to create a new post
// export const createPost = async (userId, image, text) => {
//   const postRef = await addDoc(collection(db, "Posts"), {
//     userId,
//     image,
//     text,
//     likes: 0
//   });
//   return postRef.id;
// };

// // Function to update likes on a post
// export const updateLikes = async (postId, likes) => {
//   const postRef = doc(db, "Posts", postId);
//   await updateDoc(postRef, { likes });
// };

// // Fetch user data by userId
// export const getUserData = async (userId) => {
//   if (!userId) {
//     console.error("userId is undefined or null");
//     return null;
//   }
//   const userRef = doc(db, "Users", userId);
//   const userDoc = await getDoc(userRef);
//   return userDoc.exists() ? userDoc.data() : null;
// };

// // Fetch all posts
// export const getPosts = async () => {
//   const postsRef = collection(db, "Posts");
//   const snapshot = await getDocs(postsRef);
//   const postsList = snapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data()
//   }));
//   return postsList;
// };

// export const getAllUsers = async () => {
//     try {
//       const usersCollection = collection(db, "Users");
//       const snapshot = await getDocs(usersCollection);
//       const usersList = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       return usersList;
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       return [];
//     }
//   };
