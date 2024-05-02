import React, { useState } from "react";
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

const UpdateProfile = ({ userInfo }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    bio: "",
    location: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePic: URL.createObjectURL(file), // Convert file to URL
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    setIsDialogOpen(false);
  };
  const fileInputRef = React.useRef(null);
  return (
    <>
      <div>
        <Dialog className="bg-black" isOpen={isDialogOpen}>
          <DialogTrigger>
            <Button
              className="hidden md:flex ml-[20rem] bg-dark-2 text-white gap-5 relative top-10"
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
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        id="profilePic"
                        name="profilePic"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                        className="hidden"
                        ref={fileInputRef}
                      />
                      {formData.profilePic && (
                        <img
                          src={formData.profilePic}
                          alt="Profile Picture"
                          className="rounded-full size-24"
                        />
                      )}
                      {!formData.profilePic && (
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
                      <button
                        onClick={() => fileInputRef.current.click()}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      >
                        Change Your Profile
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Name</p>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Update your Name"
                      className="shad-input"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Email</p>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Update your Email"
                      className="shad-input"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Username</p>
                    <Input
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Update your Username"
                      className="shad-input"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="mt-1">Bio</p>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Update your Bio"
                      className="shad-textarea shad-input p-3"
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center mt-4">
                <Button type="submit" className="shad-button_primary">
                  Save
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
