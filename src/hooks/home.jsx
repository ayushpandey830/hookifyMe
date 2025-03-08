import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Home = () => {
    const navigate = useNavigate(); // ✅ Create navigate function

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                textAlign: "center",
                padding: "40px",
                fontFamily: "Arial, sans-serif",
                minHeight: "100vh",
            }}
        >
            <motion.h1
                style={{ color: "red", fontSize: "2.5rem" }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                Welcome to React Hooks Examples
            </motion.h1>

            <motion.p
                style={{ color: "green", fontSize: "1.2rem", maxWidth: "600px", margin: "auto" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Discover and learn about various React hooks with interactive examples and explanations.
            </motion.p>

            <motion.div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <button
                    style={{
                        padding: "10px 20px",
                        fontSize: "1rem",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate("/use-state")} // ✅ Correct way to navigate in React Router
                >
                    Get Started
                </button>
            </motion.div>
        </motion.div>
    );
};

export default Home;
