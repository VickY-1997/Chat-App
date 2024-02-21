

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login&nbsp;
            <span className="text-green-600">ChatApp</span>
          </h1>

          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-slate-50">Username</span>
              </label>
              <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text text-slate-50">Password</span>&nbsp;
              </label>
              <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
            </div>

           <p>
           <a href="#" className="text-sm hover:underline hover:text-slate-50  mt-2 inline-block ">
              {"Don't"} have an account?
            </a>
           </p>
            <div className="btn btn-sm mt-2 bg-green-800 text-slate-50 
             hover:text-green-800 border-none w-24  ml-[120px]" >
              Login
            </div>
          </form>
    
        </div>
    </div>
  )
}

export default login









//old code 
// const login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login&nbsp;
//             <span className="text-green-600">ChatApp</span>
//           </h1>

//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text text-slate-50">Username</span>
//               </label>
//               <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
//             </div>

//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text text-slate-50">Password</span>&nbsp;
//               </label>
//               <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
//             </div>

//            <p>
//            <a href="#" className="text-sm hover:underline hover:text-slate-50  mt-2 inline-block ">
//               {"Don't"} have an account?
//             </a>
//            </p>
//             <div className="btn btn-sm mt-2 bg-green-800 text-slate-50 
//              hover:text-green-800 border-none w-24  ml-[120px]" >
//               Login
//             </div>
//           </form>
    
//         </div>
//     </div>
//   )
// }

// export default login