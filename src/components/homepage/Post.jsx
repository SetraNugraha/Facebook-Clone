/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PiShareFat } from 'react-icons/pi'
import { MdOutlineDisabledByDefault } from 'react-icons/md'
import { BiSolidHeartCircle, BiLike } from 'react-icons/bi'
import { BsThreeDots, BsXLg, BsChat } from 'react-icons/bs'
import { useState } from 'react'
import { ListPost } from '../../dummy-data/fetchData'

// Content Post Component
const RenderContent = ({ content }) => {
  
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(true)
  }

  const maxLength = 200

  if (content.length <= maxLength || isExpanded) {
    return content
  } else {
    return (
      <>
        <p>
          {`${content.substring(0, maxLength)} ...`}{' '}
          <span>
            <button onClick={toggleReadMore} className="font-semibold text-sm hover:border-b-[1px] hover:border-black">
              Lihat Selengkapnya ...
            </button>
          </span>
        </p>
      </>
    )
  }
}

// Text Comment
const RenderComment = ({ textComment }) => {
  const [expandComment, setExpandComment] = useState(false)
  const maxLength = 100

  const handleExpandComment = () => {
    setExpandComment(true)
  }

  if (textComment.length < maxLength || expandComment) {
    return textComment
  } else {
    return (
      <>
        <p className="display:inline">
          {`${textComment.substring(0, maxLength)} ... `}
          <span>
            <button onClick={handleExpandComment} className="text-sm font-semibold hover:border-b-[1px] hover:border-black">
              Lihat Selengkapnya ...
            </button>
          </span>
        </p>
      </>
    )
  }
}

// Header Post Component
const HeaderPost = ({ username, datePost, userProfileImage }) => {
  return (
    <>
      <a href="#" className="flex items-center gap-3">
        <img src={userProfileImage} alt="" className="h-[35px] w-[35px] rounded-full" />
        <div>
          <p className="font-semibold text-sm">{username}</p>
          <p className="text-xs">{datePost}</p>
        </div>
      </a>
    </>
  )
}

// Header Post Option Component
const HeaderPostOption = ({ Icon }) => {
  return (
    <>
      <li>
        <a href="#">{Icon ? <Icon className="font-bold h-[20px] w-[20px] text-slate-500" /> : <MdOutlineDisabledByDefault className="font-bold h-[20px] w-[20px] text-slate-500" />}</a>
      </li>
    </>
  )
}

// Footer Post Component
const FooterPost = ({ Icon, totalLike, totalComment }) => {
  return (
    <>
      <a href="#" className="flex items-center gap-1">
        {Icon ? <Icon className="h-[25px] w-[25px] text-red-400" /> : <MdOutlineDisabledByDefault className="font-bold h-[20px] w-[20px] text-slate-500" />}
        <p>{totalLike}</p>
      </a>
      <a href="#" className="hover:border-b-[1px] hover:border-slate-400">
        <p className="text-slate-400">{totalComment} Komentar</p>
      </a>
    </>
  )
}

// Button Action Post Component
const ButtonActionPost = ({ Icon, title }) => {
  return (
    <button className="h-[85%] w-1/3 font-semibold text-slate-500 flex justify-center items-center gap-2 rounded-sm hover:bg-slate-200">
      {Icon ? <Icon className="h-[25px] w-[25px]" /> : <MdOutlineDisabledByDefault className="h-[25px] w-[25px]" />}
      <p className="text-sm">{title}</p>
    </button>
  )
}

// Show ALl Comment Component
const ShowAllComment = () => {
  return (
    <>
      <a href="#" className="font-semibold text-sm text-slate-400 hover:border-b-[1px] hover:border-slate-400">
        Lihat Komentar Lain
      </a>
    </>
  )
}

// Recent Comment Component
const RecentComment = ({ username, textComment }) => {
  const ProfileImage = ({ profileImg }) => {
    return (
      <>
        <a href="#" className="ml-10">
          <img src={profileImg} alt="" className="h-full w-full rounded-full" />
        </a>
      </>
    )
  }

  const CardComment = ({ username, textComment }) => {
    return (
      <>
        <div className="bg-slate-100 max-w-[92%] mx-1 px-3 py-1 rounded-2xl">
          <div>
            <a href="#" className="font-semibold text-sm">
              {username}
            </a>
          </div>
          <div>
            <RenderComment textComment={textComment} />
          </div>
        </div>
      </>
    )
  }

  const BtnOptionComment = () => {
    return (
      <>
        <button className="hover:bg-slate-100 flex items-center justify-center h-[35px] w-[35px] rounded-full">
          <BsThreeDots />
        </button>
      </>
    )
  }

  const ActionBtnComment = () => {
    return (
      <>
        <p className="text-slate-500">41 Menit</p>
        <button className="font-bold text-md text-slate-500">Suka</button>
        <button className="font-bold text-md text-slate-500">Balas</button>
      </>
    )
  }

  const InputComment = () => {
    return (
      <>
        <div className="bg-red-20s0 h-[50px] flex justify-start items-center gap-2 px-5">
          <a href="#">
            <img src="./src/img/profile-default.jpg" alt="" className="h-[40px] w-[40px] rounded-full" />
          </a>

          <input type="text" className=" h-[75%] w-[90%] rounded-2xl bg-slate-100 px-5 placeholder:text-slate-600 placeholder:text-lg" placeholder="Tulis Komentar ..." />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex gap-1 py-3 px-5" >
        {/* Profile Image */}
        <div className="w-[35px] h-[35px] mt-[-23px]">
          <ProfileImage profileImg={'../src/img/example-img.png'} />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          {/* User & Comment User */}
          <div className="flex items-center gap-1" >
            <CardComment  username={username} textComment={textComment} />
            <BtnOptionComment />
          </div>
          {/* Time & Like, Comment  */}
          <div className="flex gap-5 mx-5">
            <ActionBtnComment />
          </div>
        </div>
      </div>
      {/* Input Comment */}
      <div className="h-[60px]">
        <InputComment />
      </div>
    </>
  )
}

const CardPost = ({ username, userProfileImage, datePost, examplePost, image, textComment, totalLike, totalComment, isLastPost }) => {
  return (
    <>
      <div className="max-h-100 my-5">
        <div className="bg-white rounded-lg">
          {/* Header */}
          <div className="flex justify-between items center px-3 py-2">
            {/* Profile */}
            <div>
              <HeaderPost username={username} userProfileImage={userProfileImage} datePost={datePost} />
            </div>

            {/* Option */}
            <div>
              <ul className="flex justify-center items-center gap-4">
                <HeaderPostOption Icon={BsThreeDots} />
                <HeaderPostOption Icon={BsXLg} />
              </ul>
            </div>
          </div>

          {/* Post User */}
          <div className="px-4 py-2">
            <RenderContent content={examplePost} />
            {image ? (
              <a href={image} target="_blank" rel="noreferrer">
                <img src={image} alt="" className="py-3 max-h-100 max-w-100" />
              </a>
            ) : null}
          </div>

          {/* Info Like & Comment */}
          <div className="flex justify-between items-center px-3 pb-2">
            <FooterPost Icon={BiSolidHeartCircle} totalLike={totalLike} totalComment={totalComment} />
          </div>

          {/* Button Like, Comment, Share */}
          <div className={`h-[40px] w-[96%] mx-auto my-2 border-t-[1px] ${textComment ? 'border-b-[1px]' : ''} border-slate-400 flex justify-around items-center`}>
            <ButtonActionPost Icon={BiLike} title={'Like'} />
            <ButtonActionPost Icon={BsChat} title={'Komentari'} />
            <ButtonActionPost Icon={PiShareFat} title={'Bagikan'} />
          </div>

          {/* Show All Comment */}
          <div className="px-5">{textComment ? <ShowAllComment /> : null}</div>

          {/* Recent Comment */}
          <div className="bg-red-20s0">{textComment ? <RecentComment profileImg={userProfileImage} username={username} textComment={textComment} /> : null}</div>
        </div>
        {isLastPost ? <p className="text-center text-slate-500 mt-5 pb-5">Anda Telah Mencapai Post Terakhir</p> : null}
      </div>
    </>
  )
}

export default function Post() {
  const { data, isLoading } = ListPost()

  const Loading = () => {
    return (
      <div>
        <p className="text-center mt-5">Loading ...</p>
      </div>
    )
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        data.map((post, index) => {
          const lastPost = index === data.length - 1

          return (
            <CardPost
              key={post.id}
              username={post.username}
              userProfileImage={post.userProfileImage}
              datePost={post.datePost}
              examplePost={post.text}
              image={post.image}
              textComment={post.textComment}
              totalLike={post.total_like}
              totalComment={post.total_comment}
              isLastPost={lastPost}
            />
          )
        })
      )}
    </div>
  )
}
