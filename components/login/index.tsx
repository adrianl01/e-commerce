import { SignUp, SignUpCode } from "./forms";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retrieveToken } from "@/lib";

export function LogIn() {
  const [data, setData] = useState(null);
  const token = retrieveToken();
  useEffect(() => {
    console.log("useEffect SignIn", data);
  }, [data]);
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <AnimatePresence mode="wait">
        {token && (
          <motion.div
            key="signup"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <div className="text-green-500">
              You are already logged in. Please log out to sign in again.
            </div>
          </motion.div>
        )}
        {data === null && !token && (
          <motion.div
            key="signup"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <SignUp setter={setData} />
          </motion.div>
        )}
        {data === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <SignUpCode />
          </motion.div>
        )}
        {data === "error" && !token && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <div className="text-red-500">
              An error occurred. Please try again reloading the page.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
