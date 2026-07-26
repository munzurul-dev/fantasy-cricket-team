import bannerImg from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";
const Banner = () => {
  return (
    <div
      className="max-w-6xl bg-no-repeat mx-auto  rounded-xl text-center bg-black text-white py-10 space-y-4"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <img className="mx-auto max-w-62 h-full" src={bannerImg} alt="" />
      <h2 className="font-bold text-2xl lg:text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h2>
      <p className="font-medium text-md">Beyond Boundaries Beyond Limits</p>
      <button className="btn btn-active text-black bg-[#E7FE29] border-0 rounded-2xl">Claim Free Credit</button>
    </div>
  );
};

export default Banner;
