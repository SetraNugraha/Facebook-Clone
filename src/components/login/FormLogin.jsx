/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Register from './Register'

const InputFormLogin = ({ type, name, id, placeholder }) => {
  return (
    <>
      <input type={type} name={name} id={id} placeholder={placeholder} className="h-[50px] pl-5 rounded-md border-[1px] border-slate-300 placeholder:text-lg focus:outline-none focus:border-blue-600" />
    </>
  )
}

export default function FormLogin() {
  return (
    <>
      <div className="bg-white h-[350px] w-[400px] px-3 flex flex-col justify-center rounded-lg shadow-2xl ">
        <div className="border-b-[1px] border-slate-300">
          <form action="" className="flex flex-col gap-4 pt-2 mb-5">
            {/* Email */}
            <InputFormLogin type={'text'} placeholder={'Email or phone number'} />
            {/* Password */}
            <InputFormLogin type={'password'} placeholder={'Password'} />

            {/* Button Login */}
            <Link to="/homepage" className="text-white text-center text-xl font-bold py-2 bg-blue-600 h-[50px] rounded-md active:bg-red-200">
              Log in
            </Link>
            {/* Forgot Password */}
            <a href="#" className="text-center text-blue-600 hover:underline ">
              Forgotten password?
            </a>
          </form>
        </div>
        {/* Button Create Account */}
        <div className="self-center mb-4">
          <Register />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-center">
          <span className="text-black font-bold hover:underline">
            <a href="#">Create a Page</a>
          </span>{' '}
          for a celebrity, brand or business.
        </p>
      </div>
    </>
  )
}
