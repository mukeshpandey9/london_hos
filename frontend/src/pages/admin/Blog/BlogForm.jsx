import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../../utils/API";

const BlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await API.post(
        "/api/v1/blog/create",
        {
          title: data.title,
          description: data.description,
          image: data.image[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <h2 className="text-center text-5xl font-extrabold text-gray-900">
          Create Blog Post
        </h2>

        <form
          className="flex items-center py-10 justify-center flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full border rounded flex flex-col gap-5 max-w-md p-8 bg-white">
            <div>
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                {...register("title", { required: true })}
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-lg"
                placeholder="Title"
              />
              {errors.title && (
                <span className="text-red-500">Title is required</span>
              )}
            </div>

            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                {...register("description", { required: true })}
                className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-lg"
                placeholder="Description"
                rows={5}
              />
              {errors.description && (
                <span className="text-red-500">Description is required</span>
              )}
            </div>
            <div>
              <label htmlFor="image" className="sr-only">
                Blog Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
                className="appearance-none rounded relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-lg"
              />
              {errors.image && (
                <span className="text-red-500">Image is required</span>
              )}
            </div>
            <div>
              <button
                disabled={loading}
                type="submit"
                className="disabled:opacity-60 group w-fit relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-end"
              >
                {loading ? "Submitting.." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
