import React, { useState } from 'react';
import visiTwo from "../assets/visi2.png";



const ResetPassword = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleChange = (field) => (e) => {
    setPasswords({ ...passwords, [field]: e.target.value });
  };

  const toggleShow = (field) => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your validation and API call here
    alert('Password reset submitted');
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h2 className="text-xl font-semibold mb-6">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={show.current ? 'text' : 'password'}
              value={passwords.current}
              onChange={handleChange('current')}
              className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <span
              onClick={() => toggleShow('current')}
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
            >
              {show.current ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <div className="relative">
            <input
              type={show.new ? 'text' : 'password'}
              value={passwords.new}
              onChange={handleChange('new')}
              className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <span
              onClick={() => toggleShow('new')}
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
            >
              {show.new ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Confirm New Password</label>
          <div className="relative">
            <input
              type={show.confirm ? 'text' : 'password'}
              value={passwords.confirm}
              onChange={handleChange('confirm')}
              className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <span
              onClick={() => toggleShow('confirm')}
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
            >
              {show.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        {/* Reset Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
