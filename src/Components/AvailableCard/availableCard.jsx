import userPng from "../../assets/user.png";
import flagPnf from "../../assets/report .png";
import { toast } from "react-toastify";

const AvailableCard = ({player , selectedId ,setSelectedId , setBalance , AvailableBalance , SinningPlayers , SetSiningPlayers}) => {
 const handleClick =(playerData)=>{

  const price = parseInt(player.price.split(",").join(""))

  if(AvailableBalance < price){
    toast("Insufficient Balance")
    return
  }

  if(SinningPlayers.length=== 6){
      toast("Maximum 6 Players Allowed!")
      return
    }
  
 setSelectedId([...selectedId, playerData.id])
 setBalance(AvailableBalance - price)

 SetSiningPlayers([...SinningPlayers,playerData])
 }
 
  return (
   <div className="  rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
  <img
    src={player.playerImg}
    className="h-56 w-full rounded-xl object-cover"
  />

  <div className="mt-4 flex items-center gap-2">
    <img className="w-5" src={userPng} alt="" />
    <h2 className="text-lg font-bold text-gray-800">{player.playerName}</h2>
  </div>

  <div className="mt-3 flex items-center justify-between">
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <img className="w-4" src={flagPnf} alt="" />
      <span>{player.country}</span>
    </div>

    <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700">
      {player.category}
    </span>
  </div>

  <div className="my-4 border-t"></div>

  
 <div className="flex justify-between items-center ">
  <h3 className="mb-3 font-semibold text-gray-800">Rating</h3>
  <span className="btn">{player.rating}</span>
 </div>
  <div className="flex justify-between text-sm mt-4 text-gray-700">
    <span>{player.battingStyle}</span>
    <span>{player.bowlingStyle}</span>
  </div>

  <div className="mt-5 flex items-center justify-between">
    <p className="font-bold">
      Price: <span className="text-green-600"><span>$</span>{player.price}</span>
    </p>

    <button disabled={selectedId.includes(player.id)} onClick={()=> handleClick(player)} className={`
      rounded-lg border border-black btn text-black px-4 py-2 text-sm transition  hover:bg-gray-900 hover:text-white ${selectedId.includes(player.id)?"bg-black text-white":""}
      `}>
      {
        selectedId.includes(player.id)
    ? "Selected"
    : "Choose Player"
      }
    </button>
  </div>
</div>
  );
};

export default AvailableCard;
