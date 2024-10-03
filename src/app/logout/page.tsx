// /app/logout/page.tsx

"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use this import for routing

const Logout = () => {
  const router = useRouter(); // Create a router instance

  useEffect(() => {
    // Handle the logout logic here (e.g., clearing tokens, etc.)
    // Simulating logout process with a timeout
    setTimeout(() => {
      // Redirect to the login page after logging out
      router.push("/"); // Redirect to the login page
    }, 1000); // Adjust the timeout as necessary (e.g., for loading animation)
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Logging out...</h1>
    </div>
  );
};

export default Logout;
