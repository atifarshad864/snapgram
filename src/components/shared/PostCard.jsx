import { EditPost } from "@/_root/pages";
import DeletePost from "@/_root/pages/DeletePost";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import PostStats from "./PostStats";
import { useGetuserInfo } from "@/lib/react-query/queries";
const PostCard = ({ post, setPostData }) => {
  const { isPending, data, isError } = useGetuserInfo();
  const userInfo = data?.data?.data;
  return (
    <div className="post-card">
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 justify-between">
          <div className="flex gap-3 items-center">
            <img
              src={`http://localhost:3000/images/${userInfo?.imageId}`}
              alt="profile picture"
              className="rounded-full size-12"
            />
            <div>
              <h3>{userInfo?.name}</h3>
              <p className="text-[#7878A3]">@{userInfo?.username}</p>
            </div>
          </div>

          <div className="flex gap-1">
            <AlertDialog>
              <AlertDialogTrigger>
                <img
                  src="/assets/icons/edit.svg"
                  alt="edit"
                  width={20}
                  height={20}
                />
              </AlertDialogTrigger>
              <EditPost setPostData={setPostData} post={post} />
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger>
                <img
                  src="/assets/icons/delete.svg"
                  alt="delete"
                  width={20}
                  height={20}
                />
              </AlertDialogTrigger>
              <DeletePost _id={post._id} />
            </AlertDialog>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>{post.caption}</p>
          <ul className="flex">
            {post.tags.map((tag, index) => (
              <li key={index} className="text-light-3 small-regular">
                #{tag}&nbsp;
              </li>
            ))}
          </ul>
        </div>
        <img
          src={
            `http://localhost:3000/images/${post.imageId}` ||
            "/assets/icons/profile-placeholder.svg"
          }
          alt="post image"
          className="post-card_img"
        />
        <PostStats post={post} setPostData={setPostData} userInfo={userInfo} />
      </div>
    </div>
  );
};

export default PostCard;
