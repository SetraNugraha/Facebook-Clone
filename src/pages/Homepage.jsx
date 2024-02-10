import '../index.css'
import Navbar from '../components/homepage/Navbar'
import Leftbar from '../components/homepage/Leftbar'
import Reels from '../components/homepage/Reels'
import CreatePost from '../components/homepage/CreatePost'
import Rightbar from '../components/homepage/Rightbar'
import Post from '../components/homepage/Post'

export default function Homepage() {
  return (
    <>
      <div className="w-full h-dvh flex flex-col bg-slate-200 overflow-y-auto">
        {/* Navbar */}
        <div>
          <Navbar />
        </div>
        <div className="flex justify-between h-full mt-20">
          {/* Leftbar */}
          <div className="w-1/4">
            <Leftbar />
          </div>
          {/* Content Center */}
          <div className="w-1/3">
            <Reels />
            <CreatePost />
            <Post />
          </div>
          {/* Rigtbar */}
          <div className="w-1/4">
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  )
}
