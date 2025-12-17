
type ProfileComp={
    pfUsername:string;
    pfStatus:boolean;
    pfImage:string;
}
export const ProfileTile = ({pfUsername,pfStatus,pfImage}:ProfileComp) => {
  const now = new Date();
  const currTime = now.toLocaleTimeString();
  let Hours= now.getHours();
  let Mins= now.getMinutes();
  const finalTime = `${Hours}:${Mins.toString().padStart(2, "0")}`;
  console.log(finalTime);
  



  return (
    <>

    {/* [pfp][name&typing][timestamps] */}
    <div className="bg-cyan-950 mt-2 px-3 rounded-4xl h-20 w-80 flex flex-row items-center justify-between hover: ring-2 hover: ring-cyan-600">
        <img src={pfImage} alt="some error" className="rounded-full p-3 object-cover h-20 w-20"/>

        {/* main compartment  */}
        <div className="flex flex-row items-center justify-center gap-7">
          <div className="flex flex-col items-center justify-center">
              <h3>{pfUsername}</h3>
              <h3 className="text-emerald-400 font-medium">{ pfStatus && "typing.."}</h3>
          </div>

          {/* time */}
          <h3>{finalTime}</h3>
        </div>
    </div>
    </>
  )
}
