import React from 'react';

const CreateForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 w-full max-w-lg rounded-lg shadow-lg">
        <form action="">
          <div className="flex flex-col mb-4">
            <label className="text-lg mb-2">Title</label>
            <input type="text" placeholder="Enter Title" className="border border-gray-300 p-2 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-lg mb-2">Image URL</label>
            <input type="text" placeholder="Paste Image URL" className="border border-gray-300 p-2 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-lg mb-2">Content</label>
            <textarea name="" id="" placeholder="Enter Content" className="min-h-[100px] border border-gray-300 p-2 rounded"></textarea>
          </div>
          <button className="w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white p-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
