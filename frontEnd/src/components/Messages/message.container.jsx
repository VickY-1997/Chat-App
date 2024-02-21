/* eslint-disable react-refresh/only-export-components */
import Messages from '../Messages/Messages'
import MessageInput from '../Messages/MessageInput'
import { TiMessages } from 'react-icons/ti'


const messageContainer = () => {
    const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
     {noChatSelected ? (
        <NoChatSelect /> 
     ) : (
        <>
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To :</span>{" "}
                <span className='text-gray-900 font-bold'>Vignesh Kumar</span>
            </div>
            <Messages /> 
            <MessageInput />
        </>
     )}
    </div>
  )
}

export default messageContainer;

const NoChatSelect = () => {
    return (
        <div className='flex item-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col item-center gap-2 mt-[160px]'>
                <p>Welcome 👋🏻 Vignesh Kumar</p>
                <p>Select a chat to start messaging</p>
                <TiMessages  className='text-3xl md:text-6xl text-center ml-[100px]'/>
            </div>
        </div>
    )
}








// old code
// import Messages from '../Messages/Messages'
// import MessageInput from '../Messages/MessageInput'

// const messageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//             {/* Header */}
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className="label-text" >To : </span>
//                 <span className="text-gray-900 font-bold">Vignesh Kumar</span>
//             </div>

//             <Messages />
//             <MessageInput />
//         </>
//     </div>
//   )
// }

// export default messageContainer;