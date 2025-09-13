import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Centered Auth Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Subscription Management
        </h2>
        <p className="text-gray-500 mb-8 align-center">
          Please sign in to manage your subscriptions.
        </p>

        {/* Signed Out */}
        <SignedOut>
          <SignInButton>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        {/* Signed In */}
        <SignedIn>
          <div className="flex flex-col items-center gap-6">
            <span className="text-lg font-medium text-gray-700">
              Welcome back 🎉
            </span>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-20 h-20 rounded-full ring-4 ring-purple-400 hover:ring-indigo-500 transition-all duration-300",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
