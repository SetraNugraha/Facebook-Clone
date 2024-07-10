/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'

export default function Register() {
  const [openModal, setOpenModal] = useState(() => {
    const statusModal = localStorage.getItem('statusModal')
    return statusModal ? JSON.parse(statusModal) : false
  })

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handleCloseModal() {
    setOpenModal(false)
  }

  useEffect(() => {
    localStorage.setItem('statusModal', JSON.stringify(openModal))
  }, [openModal])

  return (
    <>
      {/* Button Open modal */}
      <div>
        <button onClick={handleOpenModal} className="bg-green-600 text-white font-bold text-center p-3 rounded-lg mt-5 hover:bg-green-700">
          Create New Account
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[500px] rounded-lg pb-5">
            {/* Header */}
            <div className="border-b-[1px] border-slate-300 py-5">
              <div className="px-7 w-full flex items-start justify-between">
                <h1 className="text-3xl font-bold flex flex-col gap-y-1">
                  Sign Up <span className="text-lg font-semibold">its quick and easy</span>
                </h1>
                <button onClick={handleCloseModal} className="text-2xl text-slate-500 p-2 hover:bg-slate-200 hover:rounded-lg">
                  <i>
                    <CgClose />
                  </i>
                </button>
              </div>
            </div>
            {/* End Header */}

            {/* Body */}
            <div className="border-b-[1px] border-slate-300">
              {/* Form */}
              <form action="" className="px-7 py-7 ">
                {/* Name */}
                <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-3">
                    <input type="text" name="" id="" placeholder="First Name" className="w-1/2 border border-slate-300 rounded-lg placeholder:text-slate-300" />
                    <input type="text" name="" id="" placeholder="Surname" className="w-1/2 border border-slate-300 rounded-lg placeholder:text-slate-300" />
                  </div>
                  {/* Email Address */}
                  <input type="email" name="" id="" placeholder="Email" className="border border-slate-300 rounded-lg placeholder:text-slate-300" />
                  {/* New Password */}
                  <input type="password" name="" id="" placeholder="New Password" className="border border-slate-300 rounded-lg placeholder:text-slate-300" />
                </div>

                {/* Date Of birth */}
                <div className="mt-5">
                  <label htmlFor="" className="text-[12px]">
                    Date of birth
                  </label>
                  <div className="flex gap-5">
                    <select name="" id="" className="w-1/3 rounded-lg border-[1px] border-slate-300 ">
                      <option value="">19</option>
                    </select>
                    <select name="" id="" className="w-1/3 rounded-lg border-[1px] border-slate-300 ">
                      <option value="">Mar</option>
                    </select>
                    <select name="" id="" className="w-1/3 rounded-lg border-[1px] border-slate-300 ">
                      <option value="">2024</option>
                    </select>
                  </div>
                </div>

                {/* Gender */}
                <div className="mt-5">
                  <label htmlFor="" className="text-[12px]">
                    Gender
                  </label>
                  <div className="flex gap-5">
                    <div className="p-2 flex gap-10 justify-center items-center border-[1px] border-slate-300 rounded-md w-1/2">
                      <label htmlFor="">Male</label>
                      <input type="radio" />
                    </div>
                    <div className="p-2 flex gap-10 justify-center items-center border-[1px] border-slate-300 rounded-md w-1/2">
                      <label htmlFor="">Female</label>
                      <input type="radio" />
                    </div>
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="mt-5 flex flex-col gap-y-5">
                  <p className="text-xs">
                    People who use our service may have uploaded your contact information to Facebook. <span className="text-blue-600 hover:underline cursor-pointer">Learn more.</span>
                  </p>
                  <p className="text-xs">
                    By clicking Sign Up, you agree to our <span className="text-blue-600 hover:underline cursor-pointer">Terms</span>, <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span> and
                    <span className="text-blue-600 hover:underline cursor-pointer">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any tim
                  </p>
                </div>
              </form>
              {/* End Form */}
            </div>
            {/* End Body */}

            {/* Footer */}
            <div className="flex justify-center items-center">
              <button className="bg-green-500 px-[80px] font-bold text-2xl text-white rounded-lg py-2 mt-5 hover:bg-green-700">Sign Up</button>
            </div>
            {/* End Footer */}
          </div>
        </div>
      )}
    </>
  )
}
