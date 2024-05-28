import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { editProfileValidations } from "@/lib/validations";

const UpdateProfile = ({ userInfo }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDialogOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      profilePic: null,
    },
    validationSchema: editProfileValidations,
    onSubmit: handleSubmit,
  });

  const handleProfilePicChange = (e) => {
    console.log(e.target.files[0].type);
    const allowedtypes = ["image/png", "image/jpeg", "image/jpg"];
    if (allowedtypes.includes(e.target.files[0].type)) {
      formik.setFieldValue("profilePic", e.target.files[0]);
    } else {
      alert("File type not supported");
    }
  };

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
    console.log("hiddenFileInput-----------", hiddenFileInput);
  };
  return (
    <>
      <div>
        <Dialog isOpen={isDialogOpen}>
          <DialogTrigger>
            <Button
              className="max-md:ml-[8rem] flex ml-[20rem] bg-dark-2 text-white gap-5 relative top-10"
              onClick={() => setIsDialogOpen(true)}
            >
              <img
                src="/assets/icons/penedit.svg"
                alt="edit"
                width={20}
                height={20}
              />
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={formik.handleSubmit}>
              <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleClick}>Upload a file</button>
                    <Input
                      type="file"
                      name="profilePic"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleProfilePicChange}
                      ref={hiddenFileInput}
                      className="hidden"
                    />
                    {formik.values.profilePic && (
                      <img
                        src={URL.createObjectURL(formik.values.profilePic)}
                        alt="Profile Picture"
                        className="rounded-full size-24"
                      />
                    )}
                    {!formik.values.profilePic && (
                      <img
                        src={
                          userInfo?.imageId
                            ? `http://localhost:3000/images/${userInfo.imageId}`
                            : "/assets/icons/dummy.png"
                        }
                        alt="profile picture"
                        className="rounded-full size-28"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Name</p>
                    <Input
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      name="name"
                      type="text"
                      placeholder="Update your Name"
                      className="shad-input"
                    />
                  </div>
                  <div className="validation_messages">
                    {formik.touched.name && formik.errors.name && (
                      <div className="error_message">{formik.errors.name}</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Email</p>
                    <Input
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="Update your Email"
                      className="shad-input"
                    />
                  </div>
                  <div className="validation_messages">
                    {formik.touched.email && formik.errors.email && (
                      <div className="error_message">{formik.errors.email}</div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Username</p>
                    <Input
                      name="username"
                      type="text"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      placeholder="Update your Username"
                      className="shad-input"
                    />
                  </div>
                  <div className="validation_messages">
                    {formik.touched.username && formik.errors.username && (
                      <div className="error_message">
                        {formik.errors.username}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Bio (Optional)</p>
                    <textarea
                      name="bio"
                      value={formik.values.bio}
                      // onChange={handleChange}
                      placeholder="Update your Bio"
                      className="shad-textarea shad-input p-3"
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center mt-4">
                <Button type="submit" className="shad-button_primary">
                  Update
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default UpdateProfile;
