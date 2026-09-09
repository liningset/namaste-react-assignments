const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar">
      <img src={src} alt={alt} />
    </div>
  );
};

export const withPro = (Avatar) => {
  return (props) => {
    return (
      <div className="promoted relative self-center border-pink-500 border-2 rounded-full -mt-10">
        <Avatar {...props} />
        <span className="bg-pink-500 text-white absolute text-xs -bottom-1/8 p-2 block left-1/2 -translate-x-1/2 rounded-md z-10">
          Pro
        </span>
      </div>
    );
  };
};
export default Avatar;
