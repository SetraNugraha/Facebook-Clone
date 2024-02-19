/* eslint-disable react/prop-types */
import { FaVideo } from 'react-icons/fa6'
import { BsFileImage } from 'react-icons/bs'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { MdOutlineDisabledByDefault } from 'react-icons/md'

// Text Post Component
const TextPost = ({ userProfileImage }) => {
  return (
    <>
      <a href="#">
        <img src={userProfileImage} alt="" width={'42px'} height={'42px'} className="rounded-full" />
      </a>
      <input type="text" className="w-[90%] h-[90%] rounded-full bg-slate-200 px-5 placeholder:text-slate-600 placeholder:text-md border-[1px] focus:outline-none focus:border-blue-600" placeholder="Apa Yang Anda Pikirkan, Setra?" />
    </>
  )
}

// Upload Post Component
const UploadPost = ({ btnName, Icon, IconColor }) => {
  return (
    <>
      <li className="hover:bg-slate-200 hover:rounded-xl flex items-center justify-center w-1/3 h-[75%]">
        <a href="#" className="flex gap-2 justify-center items-center">
          {Icon ? <Icon className={`h-[25px] w-[25px] ${IconColor}`} /> : <MdOutlineDisabledByDefault className="h-[25px] w-[25px] text-slate-500" />}
          <p className="font-semibold text-sm text-slate-500">{btnName}</p>
        </a>
      </li>
    </>
  )
}

export default function CreatePost() {
  return (
    <>
      <div className="bg-white mt-5 h-[130px] rounded-lg">
        {/* Profile & Input */}
        <div className="h-1/2 w-[96%] flex justify-start items-center gap-4 py-2 mx-auto border-b-2 border-gray-300">
          <TextPost userProfileImage={'img/profile-default.jpg'} />
        </div>
        {/* End Profile & Input */}

        {/* Button Post */}
        <div className="h-1/2 rounded-b-lg px-5">
          <ul className="flex items-center justify-around h-full py-auto px-2">
            <UploadPost btnName={'Video Siaran Langsung'} Icon={FaVideo} IconColor={'text-red-400'} />
            <UploadPost btnName={'Foto/Video'} Icon={BsFileImage} IconColor={'text-green-400'} />
            <UploadPost btnName={'Perasaan/aktivitas'} Icon={CgSmileMouthOpen} IconColor={'text-orange-400'} />
          </ul>
        </div>
        {/* End Button Post */}
      </div>
    </>
  )
}
