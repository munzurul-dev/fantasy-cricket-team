import bannerBg2 from "../../assets/bg-shadow.png";
import btnBg from "../../assets/Frame.png"
const Subscribe = () => {
  return (
    <div
      className="max-w-4xl mx-auto relative z-20 mt-20 -mb-20 py-10 px-10 bg-white rounded-2xl text-center bg-no-repeat bg-center bg-cover "
      style={{
        backgroundImage: `url(${bannerBg2})`,
      }}
    >
      <div className="space-y-2 ">
        <h1 className="font-bold text-2xl">Subscribe to our Newsletter</h1>
        <p>Get the latest updates and news right in your inbox!</p>
        <input
          className="py-2 px-10 border-2 border-gray-400 rounded-2xl outline-0"
          type="text "
          placeholder="Enter Your Email"
        />{" "}
        <button className="py-6 px-15 rounded-2xl btn bg-no-repeat bg-center bg-cover "
        style={{
        backgroundImage: `url(${btnBg})`,
      }}></button>
      </div>
    </div>
  );
};

export default Subscribe;
