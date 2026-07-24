

const SelectedCard = ({player , removePlayers}) => {
  const handleRemove = ()=>{
    removePlayers(player)
  }
    return (  
      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
  <div className="flex items-center gap-4">
    <img
      src={player.playerImg}
      alt={player.name}
      className="h-16 w-16 rounded-xl object-cover"
    />

    <div>
      <h2 className="text-lg font-bold text-gray-800">
        {player.playerName}
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {player.country} • {player.category}
      </p>

      <p className="mt-1 text-sm font-medium text-green-600">
        Price: ${player.price}
      </p>
    </div>
  </div>

  <button
    className="rounded-lg border border-red-200 p-3 text-red-500 transition cursor-pointer"
  >
    <img onClick={handleRemove} src="https://i.ibb.co.com/24LTR0H/Vector.png" alt="" />
  </button>
</div>

 
    
        

    );
};

export default SelectedCard;