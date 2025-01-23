import React, { useState } from "react";
import "./App.css";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Firestore imports

function App() {
  const [login, setLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");

  // Initialize Firestore
  const db = getFirestore();

  // Handle Google Sign-In
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setLogin(true);
      setUserEmail(user.email); // Automatically set the email from Google account
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };

  // Handle Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter your name!");
      return;
    }

    try {
      // Save data to Firestore
      await addDoc(collection(db, "account"), {
        name,
        email: userEmail,
        message: "Form submitted successfully!",
        timestamp: new Date(),
      });
      alert("Data saved to the database successfully!");
      setName(""); 
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  return (
    <div>
      <p>Sign In with Google</p>
      {!login ? (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <p>Email: {userEmail}</p>

          <h3>Fill in Your Details</h3>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
