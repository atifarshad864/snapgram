import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "../ui/form";
import FileUploader from "../shared/FileUploader";
import { Input } from "../ui/input";
// import { useFormik } from "formik";

const PostForm = () => {
  return (
    <div className="grid w-full gap-2">
      <Form>
        <p>Caption</p>
        <Textarea
          className="shad-textarea custom-scrollbar"
          placeholder="Enter Caption"
        />
        <p>Add Photos</p>
        <FileUploader />
        <p>Add Location</p>
        <Input
          type="text"
          className="shad-input"
          placeholder="Enter Location"
        />
        <p>Add Tags (Sepearted by comma " , ")</p>
        <Input
          type="text"
          className="shad-input"
          placeholder="Art, Expression, Learning"
        />
        <div className="flex justify-end gap-3">
          <Button type="button" className="shad-button_dark_4">
            Cancel
          </Button>
          <Button type="submit" className="shad-button_primary ">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
