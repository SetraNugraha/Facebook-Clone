/* eslint-disable react/prop-types */
import { GoHomeFill } from 'react-icons/go'
import { BsPeople } from 'react-icons/bs'
import { RiYoutubeLine, RiArrowRightSLine, RiChatDownloadFill } from 'react-icons/ri'
import { CgMenuGridO } from 'react-icons/cg'
import { FaBell, FaGear } from 'react-icons/fa6'
import { FaFacebook, FaMoon } from 'react-icons/fa'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { GrLogout } from 'react-icons/gr'
import { MdOutlineDisabledByDefault } from 'react-icons/md'
import { IoStorefrontOutline, IoPeopleCircleOutline, IoChatbubbleEllipses } from 'react-icons/io5'
import { useState } from 'react'
import { Footer } from './Leftbar'
import { Link } from 'react-router-dom'

// Navbar Logo & Search
const NavLogo = ({ Icon }) => {
  return (
    <>
      <a href="#" className="ml-5">
        {Icon ? <Icon className="h-[40px] w-[40px] text-blue-500" /> : <MdOutlineDisabledByDefault className="h-[40px] w-[40px] text-blue-500" />}
      </a>
      <input type="text" className="w-[60%] h-[70%] rounded-full bg-slate-200 px-5 placeholder:text-slate-600 placeholder:text-lg border-[1px] focus:outline-none focus:border-blue-600" placeholder="Cari Di Facebook" />
    </>
  )
}

// Navbar Menu Component
const NavMenu = ({ Icon }) => {
  return (
    <li>
      <a href="#">{Icon ? <Icon className="h-[30px] w-[30px] text-slate-600" /> : <MdOutlineDisabledByDefault className="h-[30px] w-[30px] text-slate-600" />}</a>
    </li>
  )
}

// Navbar Setting Component
const NavSetting = ({ Icon }) => {
  return (
    <li className="w-[42px] h-[42px] bg-slate-300 rounded-full">
      <a href="#">{Icon ? <Icon className="h-[27px] w-[27px] text-black ml-2 mt-2" /> : <MdOutlineDisabledByDefault className="h-[27px] w-[27px] text-black ml-2 mt-2" />}</a>
    </li>
  )
}

const UserSetting = () => {
  const [toggleUserSetting, setToggleUserSetting] = useState(false)

  const handleToggleUserSetting = () => {
    setToggleUserSetting(!toggleUserSetting)
  }
  return (
    <>
      {/* User Setting */}
      <li className="flex items-center">
        <button onClick={handleToggleUserSetting}>
          <img src="img/profile-default.jpg" alt="" className="h-[42px] w-[42px] rounded-full" />
        </button>
      </li>
      {/* Menu Toggle */}
      <div className="absolute top-[50px]">{toggleUserSetting ? <ChildUserSetting /> : null}</div>
    </>
  )
}

const ChildUserSetting = () => {
  const ListMenuUserSetting = ({ title, Icon, Arrow, url }) => {
    return (
      <>
        <li className="w-[95%] py-1 mx-auto hover:bg-slate-100 hover:rounded-lg">
          <Link to={url} className="w-[92%] mx-auto flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="bg-slate-300 h-[35px] w-[35px] flex items-center justify-center rounded-full">{Icon ? <Icon className="w-[22px] h-[22px]" /> : <MdOutlineDisabledByDefault className="w-[22px] h-[22px]" />}</div>
              <p className="font-semibold">{title}</p>
            </div>
            <div>{Arrow ? <RiArrowRightSLine className="w-[30px] h-[30px]" /> : null}</div>
          </Link>
        </li>
      </>
    )
  }

  return (
    <>
      <div className="bg-white w-[370px] h-[410px] rounded-lg shadow-xl">
        {/* Card Link To Profile Page */}
        <div className="bg-white w-[90%] mx-auto relative top-3 flex flex-col justify-start items-start rounded-lg shadow-xl">
          <div className="w-[95%] mx-auto pt-2 border-b-[1px] border-slate-400 pb-3 hover:bg-slate-100 hover:rounded-lg">
            <a href="#" className="flex gap-3 items-center px-2">
              <img src="img/profile-default.jpg" alt="" width={'42px'} height={'42px'} className="rounded-full" />
              <p className="font-semibold">Setra Nugraha</p>
            </a>
          </div>
          <div className="p-3 w-[95%] mx-auto hover:bg-slate-100 hover:rounded-lg">
            <a href="#" className="font-semibold text-blue-600 text-md px-2">
              Lihat Semua Profil
            </a>
          </div>
        </div>

        {/* Menu User */}
        <div className="mt-7">
          <ul>
            <ListMenuUserSetting title={'Setelan & privasi'} Icon={FaGear} Arrow={RiArrowRightSLine} />
            <ListMenuUserSetting title={'Bantuan & Dukungan'} Icon={AiFillQuestionCircle} Arrow={RiArrowRightSLine} />
            <ListMenuUserSetting title={'Tampilan & Aksesibilitas'} Icon={FaMoon} Arrow={RiArrowRightSLine} />
            <ListMenuUserSetting title={'Beri Masukan'} Icon={RiChatDownloadFill} />
            <ListMenuUserSetting title={'Keluar'} Icon={GrLogout} url={'/'} />
          </ul>
        </div>

        {/* Footer */}
        <div className="px-2">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default function Navbar() {
  return (
    <>
      <div className="fixed h-[57px] w-full bg-slate-100 drop-shadow-lg flex justify-between items-center z-10">
        {/* Logo & Search */}
        <div className="w-1/4 h-full flex gap-3 items-center">
          <NavLogo Icon={FaFacebook} />
        </div>
        {/* End Logo & Search */}

        {/* Menu Bar */}
        <div className="w-1/3">
          <ul className="flex items-center justify-around">
            <NavMenu Icon={GoHomeFill} />
            <NavMenu Icon={BsPeople} />
            <NavMenu Icon={RiYoutubeLine} />
            <NavMenu Icon={IoStorefrontOutline} />
            <NavMenu Icon={IoPeopleCircleOutline} />
          </ul>
        </div>
        {/* End Menu Bar */}

        {/* Setting */}
        <div className="w-1/4">
          <ul className=" flex justify-end items-center gap-3 mr-5">
            <NavSetting Icon={CgMenuGridO} />
            <NavSetting Icon={IoChatbubbleEllipses} />
            <NavSetting Icon={FaBell} />
            <UserSetting />
          </ul>
        </div>

        {/* End Setting */}
      </div>
    </>
  )
}
