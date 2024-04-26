import React, { useEffect, useState } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  // AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "@/components/shared/FileUploader";
import { Input } from "@/components/ui/input";
import { updatePostValidations } from "@/lib/validations";
import { useFormik } from "formik";
import {
  useGetRecentPosts,
  useUpdatePostDetails,
} from "@/lib/react-query/queries";
const EditPost = ({ setPostData, post }) => {
  const { isPending, data, isError } = useGetRecentPosts();

  const mutation = useUpdatePostDetails();
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("caption", values.caption);
      formData.append("location", values.location);
      formData.append("tags", ["a", "b"]);

      // console.log(values.tags);
      // if (values.tags.length > 0) {
      //   values.tags.forEach((tag) => {
      //     formData.append("tags", tag.trim());
      //   });
      // }
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(
        `http://localhost:3000/post/update/${post._id}`,
        {
          method: "PUT",
          body: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Add the access token as a bearer token in the authorization header
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPostData(data?.data?.data);
  }, [data]);

  const handleFileChange = (file) => {
    formik.setFieldValue("file", file);
  };
  const initialValues = {
    caption: post.caption,
    location: post.location,
    tags: [...post.tags],
    file: `http://localhost:3000/images/${post.imageId}`,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: updatePostValidations,
    onSubmit: handleSubmit,
  });
  return (
    <AlertDialogContent className="h-[80%] bg-black overflow-y-auto">
      <AlertDialogHeader>
        <AlertDialogTitle>Edit Post</AlertDialogTitle>
        <form className="pb-3 pt-3" onSubmit={formik.handleSubmit}>
          <p>Caption</p>
          <Textarea
            name="caption"
            className="shad-textarea custom-scrollbar"
            placeholder="Enter Caption"
            value={formik.values.caption}
            onChange={formik.handleChange}
          />
          <div className="validation_messages">{formik.errors.caption}</div>
          <p>Add Photos</p>
          <FileUploader
            name="file"
            type="file"
            onFileChange={handleFileChange}
            imgUrl={`http://localhost:3000/images/${post.imageId}`}
          />
          <div className="validation_messages">{formik.errors.file}</div>

          <p>Add Location</p>
          <Input
            name="location"
            type="text"
            className="shad-input"
            placeholder="Enter Location"
            value={formik.values.location}
            onChange={formik.handleChange}
          />
          <div className="validation_messages">{formik.errors.location}</div>

          <p>Add Tags (Sepearted by comma " , ")</p>
          <Input
            type="text"
            className="shad-input"
            placeholder="Art, Expression, Learning"
            value={formik.values.tags.join(",")}
            onChange={(e) => {
              const tags = e.target.value.split(",").map((tag) => tag.trim());
              formik.setFieldValue("tags", tags);
            }}
            name="tags"
          />
          <div className="validation_messages">{formik.errors.tags}</div>

          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction type="submit">Update Post</AlertDialogAction>
        </form>
      </AlertDialogHeader>
    </AlertDialogContent>
  );
};

export default EditPost;
