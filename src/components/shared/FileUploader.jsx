import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

const FileUploader = ({ onFileChange }) => {
  const [fileUrl, setFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFileUrl(URL.createObjectURL(file));
      onFileChange(file); // Call the callback function to handle the dropped file
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Accept only image files
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} />
      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img src={fileUrl} alt="Uploaded" className="file_uploader-img" />
          </div>
          <p className="file_uploader-label">Click or Drag photo to replace</p>
        </>
      ) : (
        <div className="file_uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            alt="file-upload"
            width={96}
            height={77}
          />
          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag Photos Here
          </h3>
          <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>
          <Button className="shad-button_dark_4">Select From Computer</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
