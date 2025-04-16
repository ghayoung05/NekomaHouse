'use client'

import { Dispatch, SetStateAction } from 'react';
export default function LoginModal({ setShowLoginModal }: { setShowLoginModal: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input type="password" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  type="button" 
                  onClick={() => setShowLoginModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-200"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
  );
}