import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "../shared/FileUploader";
import { Input } from "../ui/input";
import { useFormik } from "formik";
import { CreatePostValidations } from "@/lib/validations";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { CreateSinglePost } from "@/lib/api-functions/api";

const PostForm = () => {
  const { toast } = useToast();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (formData) => CreateSinglePost(formData),

    onSuccess: () => {
      toast({ title: "Create Post successfully!" });
      navigate("/");
    },
    onError: () => {
      toast({ title: "Could not create! Please try again" });
    },
  });

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("caption", values.caption);
      formData.append("location", values.location);
      formData.append("file", values.file);
      if (values.tags.length > 0) {
        values.tags.forEach((tag) => {
          formData.append("tags[]", tag.trim()); // Append each tag with square brackets
        });
      }
      mutate(formData);
      console.log("formData---------------------", formData);
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  const initialValues = {
    caption: "",
    location: "",
    tags: [],
    file: null,
  };

  const handleFileChange = (file) => {
    formik.setFieldValue("file", file);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: CreatePostValidations,
    onSubmit: handleSubmit,
  });
  console.log(formik);
  return (
    <div className="grid w-full gap-2">
      <form onSubmit={formik.handleSubmit}>
        <p>Caption</p>
        <Textarea
          className="shad-textarea custom-scrollbar"
          placeholder="Enter Caption"
          value={formik.values.caption}
          onChange={formik.handleChange}
          name="caption"
        />
        <div className="validation_messages">{formik.errors.caption}</div>
        <p>Add Photos</p>
        <FileUploader name="file" type="file" onFileChange={handleFileChange} />
        <div className="validation_messages">{formik.errors.file}</div>
        <p>Add Location</p>
        <Input
          type="text"
          className="shad-input"
          placeholder="Enter Location"
          value={formik.values.location}
          onChange={formik.handleChange}
          name="location"
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

        <div className="flex justify-end gap-3 mt-4">
          <Button type="button" className="shad-button_dark_4">
            Cancel
          </Button>
          <Button type="submit" className="shad-button_primary p-[23.5px]">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
