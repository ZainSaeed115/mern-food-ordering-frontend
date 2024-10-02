
import landingImage from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div  className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
         <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
            Tuck into a takeway today
         </h1>
         <span className='text-xl font-semibold'>Food is just a click away!</span>
           
        
         <input
          type="text"
          placeholder="search by city or town"
           className=" border rounded-lg py-5 mx-20 px-6"
         />
      
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage}/>
       <div className="flex flex-col justify-center items-center gap-4 text-center">
        <span className="text-3xl font-bold tracking-tighter">
          Order takeway even faster!
        </span>
        <span className="font-semibold">
          Download the MernEats App for faster ordering and personlized recomendations
        </span>
       <img src={appDownload}/>
       </div>
      </div>
    </div>
  )
}

export default HomePage