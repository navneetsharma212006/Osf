import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const AuthPage = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={() => onClose && onClose()} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl shadow-xl p-8">
          <button
            onClick={() => onClose && onClose()}
            className="absolute -top-3 -right-3 bg-neutral-900 p-1 rounded-full"
            aria-label="Close"
            style={{ transform: 'translate(50%, -50%)' }}
          >
            <X className="text-white" />
          </button>

          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold tracking-wide">
              Welcome to <span className="text-orange-500">OSF</span>
            </h1>
            <p className="text-sm text-neutral-400 mt-2">
              {isSignup
                ? "Create an account to get started"
                : "Sign in to continue or create a new account"}
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {isSignup && (
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-orange-500"
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-orange-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-orange-500"
            />

            {isSignup && (
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-orange-500"
              />
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-medium transition"
            >
              {isSignup ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="grow border-t border-neutral-800" />
            <span className="mx-3 text-xs text-neutral-500">OR</span>
            <div className="grow border-t border-neutral-800" />
          </div>

          <button
            onClick={() => setIsSignup(!isSignup)}
            className="w-full py-3 rounded-xl border border-neutral-700 text-white hover:bg-neutral-900 transition"
          >
            {isSignup ? "Already have an account? Sign In" : "Create an Account"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
