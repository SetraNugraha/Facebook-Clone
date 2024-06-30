/* eslint-disable no-unused-vars */
import Navbar from '../components/homepage/Navbar'
import CreatePost from '../components/homepage/CreatePost'
import Post from '../components/homepage/Post'
import { BsGearFill } from 'react-icons/bs'
import { IoOptionsOutline } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'

export default function Profile() {
  const menu = [
    {
      title: 'Tentang',
      path: '#',
    },
    {
      title: 'Teman',
      path: '#',
    },
    {
      title: 'Foto',
      path: '#',
    },
    {
      title: 'Video',
      path: '#',
    },
    {
      title: 'Persinggahan',
      path: '#',
    },
  ]

  const teman = [
    {
      name: 'Sumardi',
      image: 'snorlax.png',
    },

    {
      name: 'Luwis',
      image: 'example.jpg',
    },

    {
      name: 'Ronald De Jong',
      image: 'profile-default.jpg',
    },

    {
      name: 'Surtijeng',
      image: 'example-img.png',
    },

    {
      name: 'Sumardi Part II',
      image: 'example-img2.png',
    },

    {
      name: 'Konz',
      image: 'snorlax.png',
    },

    {
      name: 'Alul',
      image: 'example.jpg',
    },

    {
      name: 'Abdul',
      image: 'example-img2.png',
    },

    {
      name: 'Surtoro',
      image: 'example-img.png',
    },
  ]

  const copyright = ['Privasi', 'Ketentuan', 'Iklan', 'Pilihan Iklan', 'Cookie', 'Lainnya']

  return (
    <>
      <div className="w-full h-dvh flex flex-col bg-slate-200 overflow-y-auto">
        {/* Navbar */}
        <div>
          <Navbar />
        </div>

        <div className="bg-white border-b border-slate-300 pt-20">
          <div className="w-[65%] mx-auto ">
            {/* Header */}
            <div className="flex flex-col">
              {/* Profile */}
              <div className="flex items-center gap-x-7 border-b-[1px] border-slate-400 pb-5">
                {/* Image */}
                <div className="w-[20%]">
                  <img src="img/snorlax.png" alt="" className="rounded-full w-[150px] hover:opacity-70" />
                </div>
                {/* Name & Total Friend */}
                <div className="mt-5 w-[80%] flex justify-between items-end">
                  <div className="flex flex-col gap-y-3 relative right-[90px]">
                    {/* Name */}
                    <div className="flex flex-col">
                      <h1 className="text-3xl font-bold">Setra Nugraha</h1>
                      <p className="font-semibold">14 Total Teman</p>
                    </div>
                    {/* Friend Image */}
                    <div className="flex">
                      <img src="img/example-img.png" alt="" className="rounded-full w-[33px] h-[33px] hover:opacity-70 -mr-2" />
                      <img src="img/example.jpg" alt="" className="rounded-full w-[33px] h-[33px] hover:opacity-70 -mr-2" />
                      <img src="img/example-img.png" alt="" className="rounded-full w-[33px] h-[33px] hover:opacity-70 -mr-2" />
                      <img src="img/example-img2.png" alt="" className="rounded-full w-[33px] h-[33px] hover:opacity-70 -mr-2" />
                      <img src="img/example.jpg" alt="" className="rounded-full w-[33px] h-[33px] hover:opacity-70 -mr-2" />
                      <img src="img/example-img.png" alt="" className="rounded-full w-[33px] h-[33px] hover:opacity-70 -mr-2" />
                    </div>
                  </div>

                  {/* Button story & edit */}
                  <div className="flex gap-x-2">
                    <button className="px-3 py-2 flex gap-x-2 items-center bg-blue-600 text-white font-semibold rounded-md hover:brightness-125">
                      <span>
                        <GoPlus className='w-[23px] h-[23px]' />
                      </span>
                      Tambahkan ke cerita
                    </button>
                    <button className="px-3 py-2 flex gap-x-2 items-center bg-gray-200 font-semibold rounded-md hover:bg-gray-300">
                      <span>
                        <FaPen className='w-[15px] h-[15px]' />
                      </span>
                      Edit profile
                    </button>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="flex gap-x-3 items-center">
                <a href="#" className="font-semibold text-blue-600 border-b-[2px] border-blue-600 hover:bg-slate-400 hover:text-white hover:rounded-lg mt-1 p-3">
                  Postingan
                </a>
                {menu.map((item, index) => (
                  <div key={index} className="flex gap-x-3">
                    <a href={item.path} className="font-semibold p-3 hover:bg-slate-400 hover:text-white hover:rounded-lg mt-1">
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[65%] mx-auto mt-10">
          <div className="flex gap-x-3">

            {/* Left */}
            <div className="w-[40%] mb-5">
              <div className="flex flex-col">
                {/* Intro */}
                <div className="bg-white border-[0.5px] border-slate-300 rounded-lg px-4 py-4">
                  <h1 className="font-bold text-xl pb-4">Intro</h1>
                  <div className="flex flex-col gap-y-5">
                    <button className="font-semibold  w-full bg-slate-200 rounded-md py-2 hover:bg-slate-300">Tambahkan Biografi</button>
                    <button className="font-semibold  w-full bg-slate-200 rounded-md py-2 hover:bg-slate-300">Edit Perincian</button>
                    <button className="font-semibold  w-full bg-slate-200 rounded-md py-2 hover:bg-slate-300">Tambahkan Unggulan</button>
                  </div>
                </div>

                {/* Foto */}
                <div>
                  <div className="flex justify-between items-center px-5 mt-5 bg-white border-[0.5px] border-slate-300 py-3 rounded-lg">
                    {/* Title */}
                    <div>
                      <h1 className="font-bold text-xl hover:border-b-[2px] hover:border-black hover:cursor-pointer">Foto</h1>
                    </div>

                    {/* Link Text */}
                    <div className="px-2 py-1 rounded-md hover:bg-slate-200 hover:opacity-125">
                      <a href="#" className="text-blue-600 text-[18px] hover:text-blue-600">
                        Lihat Semua Foto
                      </a>
                    </div>
                  </div>
                </div>

                {/* List Teman */}
                <div>
                  <div className="flex flex-col justify-between items-start px-5 mt-5 pb-8 bg-white py-3 rounded-lg border-[0.5px] border-slate-300">
                    {/* Header */}
                    <div className="flex justify-between items-start w-full">
                      {/* Title */}
                      <div>
                        <h1 className=" font-bold text-xl hover:border-b hover:border-white hover:cursor-pointer">Teman</h1>
                        <p className="text-slate-500">14 Teman</p>
                      </div>

                      {/* Link Text */}
                      <div className="px-2 py-1 rounded-md hover:bg-slate-200">
                        <a href="#" className="text-blue-600 text-[18px] hover:text-blue-600">
                          Lihat Semua Teman
                        </a>
                      </div>
                    </div>

                    {/* List Teman */}
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {teman.map((item, index) => (
                        <div key={index} className="flex flex-col items-start gap-y-1 hover:cursor-pointer">
                          <img src={`img/${item.image}`} alt="" className="w-[150px] h-[150px] rounded-md" />
                          <h1 className="font-semibold hover:border-b hover:border-black">{item.name}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="flex gap-x-2 mt-2 text-[13px]">
                  {copyright.map((item, index) => (
                    <a key={index} href="#" className="hover:border-b hover:border-black ">
                      {item}
                    </a>
                  ))}
                  <span>Meta &copy; 2024</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-[60%] overflow-y-auto">
              <div className="flex flex-col">
                {/* Form Post */}
                <div className="">
                  <CreatePost />
                </div>

                {/* Filter Postingan */}
                <div>
                  <div className="flex justify-between items-center px-5 mt-5 bg-white border-[0.5px] border-slate-300 py-3 rounded-lg">
                    {/* Title */}
                    <div>
                      <h1 className="font-bold text-xl">Postingan</h1>
                    </div>

                    {/* Button */}
                    <div className="px-2 py-1 rounded-md flex gap-x-2">
                      <a href="#" className="px-3 py-2 flex gap-x-2 items-center font-semibold bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300">
                        <span>
                          <IoOptionsOutline className="w-[20px] h-[20px]" />
                        </span>
                        Filter
                      </a>
                      <a href="#" className="px-3 py-2 flex gap-x-2 items-center font-semibold bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300">
                        <span>
                          <BsGearFill className="w-[17px] h-[17px]" />
                        </span>
                        Kelola Postingan
                      </a>
                    </div>
                  </div>
                </div>

                {/* Postingan */}
                <div>
                  <Post />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
