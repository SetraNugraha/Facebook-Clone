import Title from '../components/login/Title'
import FormLogin from '../components/login/FormLogin'
import Footer from '../components/login/Footer'

export default function Login() {
  return (
    <>
      <div className="bg-slate-100 h-dvh w-full">
        <div className="w-[50%] mx-auto h-[75%] flex justify-between items-center">
          {/* Title */}
          <div className="mr-[100px]">
            <Title />
          </div>
          {/* Form Login */}
          <div>
            <FormLogin />
          </div>
        </div>
        <div className="bg-white h-[25%]">
          <div className='w-[50%] h-full mx-auto'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
