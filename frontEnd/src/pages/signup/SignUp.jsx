import GenderCheckBox from '../signup/genderCheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()

  const handleCheckbox = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
        await signup(inputs)
  }

  

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            SignUp&nbsp;
            <span className="text-green-600">ChatApp</span>
          </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text text-slate-50">Full Name</span>
                </label>
                <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 "
                value={inputs.fullName}
                onChange={ (event) => setInputs({...inputs, fullName: event.target.value})}
                />
            </div>

            <div>
              <label className="label p-2">
                  <span className="text-base label-text text-slate-50">Username</span>
                </label>
                <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 "
                value={inputs.username}
                onChange={ (event) => setInputs({...inputs, username: event.target.value})}
                />
            </div>

            <div>
              <label className="label p-2">
                  <span className="text-base label-text text-slate-50">Password</span>&nbsp;
              </label>
              <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " 
              value={inputs.password}
              onChange={ (event) => setInputs({...inputs, password: event.target.value})}
              />
            </div>

            <div>
              <label className="label p-2">
                  <span className="text-base label-text text-slate-50">Confirm Password</span>&nbsp;
              </label>
              <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 "
              value={inputs.confirmPassword}
              onChange={ (event) => setInputs({...inputs, confirmPassword: event.target.value})}
              />
            </div>
          
            <GenderCheckBox onCheckboxChange={handleCheckbox} selectedGender={inputs.gender}/>

            <p>
              <Link to="/login" className="text-sm  hover:text-slate-50  mt-2 inline-block  ">
                Already have an account?
              </Link>
           </p>

            <div>
           <button className="btn btn-sm mt-2 bg-green-800 text-slate-50 
             hover:text-green-800 border-none w-24  ml-[120px]" 
             disabled={loading}
             >
              {loading ? <span className='loading loading-spinner'></span> : "SignUp"}
            </button>
            </div>
        </form>

        </div> 
    </div>
  )
}

export default SignUp;




// old code
// import GenderCheckBox from '../signup/genderCheckBox'


// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//             SignUp&nbsp;
//             <span className="text-green-600">ChatApp</span>
//           </h1>

//         <form>
//             <div>
//                 <label className="label p-2">
//                     <span className="text-base label-text text-slate-50">Full Name</span>
//                 </label>
//                 <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
//             </div>

//             <div>
//               <label className="label p-2">
//                   <span className="text-base label-text text-slate-50">Username</span>
//                 </label>
//                 <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
//             </div>

//             <div>
//               <label className="label p-2">
//                   <span className="text-base label-text text-slate-50">Password</span>&nbsp;
//               </label>
//               <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
//             </div>

//             <div>
//               <label className="label p-2">
//                   <span className="text-base label-text text-slate-50">Confirm Password</span>&nbsp;
//               </label>
//               <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10 bg-green-800 text-slate-50 " />
//             </div>
          
//             <GenderCheckBox/>

//             <p>
//               <a href="#" className="text-sm hover:underline hover:text-slate-50  mt-2 inline-block ">
//                 Already have an account?
//               </a>
//            </p>

//            <div className="btn btn-sm mt-2 bg-green-800 text-slate-50 
//              hover:text-green-800 border-none w-24  ml-[120px]" >
//               SignUp
//             </div>
//         </form>

//         </div> 
//     </div>
//   )
// }

// export default SignUp