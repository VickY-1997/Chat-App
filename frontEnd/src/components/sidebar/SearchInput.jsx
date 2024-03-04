import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from '../../hooks/useGetConversation'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return;
    if(search.length < 3) {
      return toast.error('இரண்டு எழுத்துகளுக்கு மேல் தட்டச்சு செய்யவும்')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('')
    }else toast.error('அப்படி ஒரு நபர் இந்த கடலிலேயே கிடையாது!')
  }


  return (
    <form onSubmit={handleSubmit} className="flex item-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-green-900 text-white ">
            <IoSearchSharp className="w-6 h-6 outline-none "/>
        </button>
    </form>
  )
}

export default SearchInput;








// old code
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex item-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle bg-green-900 text-white ">
//             <IoSearchSharp className="w-6 h-6 outline-none "/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput;