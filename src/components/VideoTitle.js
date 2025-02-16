const VideoTitle = ({ title, overview }) => {
    return (
      <div className="w-screen aspect-video pt-[8%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className=" bg-white text-black py-3 px-8 text-xl font-semibold rounded-lg hover:bg-opacity-60 ">
            ▶️ Play
          </button>
          <button className="mx-2 bg-gray-800 text-white py-3 px-12 text-xl hover:bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;