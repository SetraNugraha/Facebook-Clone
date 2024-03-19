'use client'

import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'

export default function ModalRegister() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="bg-green-600 text-white font-bold text-center p-1 rounded-lg mt-5 hover:bg-green-700">
        Create New Account
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={'lg'}>
        <Modal.Header>
          <h1 className="text-4xl font-bold">Sign Up</h1>
          <h4 className="text-lg">Its quick and easy</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 ">
            <form action="">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <input type="text" placeholder="First Name" className="w-1/2 border-[1px] border-slate-400 rounded-lg" />
                  <input type="text" placeholder="Surname" className="w-1/2 border-[1px] border-slate-400 rounded-lg" />
                </div>
                <input type="text" placeholder="Mobile number or email address" className="border-[1px] border-slate-400 rounded-lg" />
                <input type="text" placeholder="New password" className="border-[1px] border-slate-400 rounded-lg" />
                {/* Birth */}
                <div>
                  <label htmlFor="" className="text-[12px]">
                    Date of birth
                  </label>
                  <div className="flex gap-5">
                    <select name="" id="" className="w-1/3 rounded-lg border-[1px] border-slate-400">
                      <option value="">19</option>
                    </select>
                    <select name="" id="" className="w-1/3 rounded-lg border-[1px] border-slate-400">
                      <option value="">Mar</option>
                    </select>
                    <select name="" id="" className="w-1/3 rounded-lg border-[1px] border-slate-400">
                      <option value="">2024</option>
                    </select>
                  </div>
                </div>
                {/* Gender */}
                <div>
                  <label htmlFor="" className="text-[12px]">
                    Gender
                  </label>
                  <div className="flex gap-5">
                    <div className="p-2 flex gap-10 justify-center items-center border-[1px] border-slate-400 rounded-md w-1/2">
                      <label htmlFor="">Male</label>
                      <input type="radio" />
                    </div>
                    <div className="p-2 flex gap-10 justify-center items-center border-[1px] border-slate-400 rounded-md w-1/2">
                      <label htmlFor="">Female</label>
                      <input type="radio" />
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <p className="text-xs">
                    People who use our service may have uploaded your contact information to Facebook. <span className="text-blue-600 hover:underline cursor-pointer">Learn more.</span>
                  </p>
                  <p className="text-xs">
                    By clicking Sign Up, you agree to our <span className="text-blue-600 hover:underline cursor-pointer">Terms</span>, <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span> and
                    <span className="text-blue-600 hover:underline cursor-pointer">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any tim
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center items-center">
          <button className="bg-green-500 px-[80px] font-bold text-2xl text-white rounded-lg py-2 hover:bg-green-700">Sign Up</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
