/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Blogs() {
  return (
    <div className="p-6 md:p-8 lg:px-24 lg:pb-12 pt-12 lg:pt-12 bg-[#e7f0ff]">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Articles, Story and more.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 lg:px-0">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-t-xl"
          />
          <div className="p-6 bg-white rounded-b-xl">
            <h2 className="mb-3 font-medium">20 Teal Bed Ideas</h2>
            <p className="text-gray-600">
              want to add some colors that looks beautiful your bed?
            </p>
            <p className="text-blue-600 mt-4 text-sm">Read More..</p>
          </div>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-t-xl"
          />
          <div className="p-6 bg-white rounded-b-xl">
            <h2 className="mb-3 font-medium">20 Teal Bed Ideas</h2>
            <p className="text-gray-600">
              want to add some colors that looks beautiful your bed?
            </p>
            <p className="text-blue-600 mt-4 text-sm">Read More..</p>
          </div>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-t-xl"
          />
          <div className="p-6 bg-white rounded-b-xl">
            <h2 className="mb-3 font-medium">20 Teal Bed Ideas</h2>
            <p className="text-gray-600">
              want to add some colors that looks beautiful your bed?
            </p>
            <p className="text-blue-600 mt-4 text-sm">Read More..</p>
          </div>
        </div>
      </div>
    </div>
  );
}
