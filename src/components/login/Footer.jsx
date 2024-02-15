import { RxPlus } from 'react-icons/rx'

const Language = () => {
  const listLanguage = ['English (UK)', 'Bahasa Indonesia', 'Basa Jawa', 'Bahasa Melayu', 'China', 'Arab', 'Francis(France)', 'Espanol', 'Korea', 'Portuges(Brasil)', 'Deutsch']

  return (
    <>
      {listLanguage.map((language, index) => {
        return (
          <div key={index}>
            <a href="#" className="text-sm text-slate-400 hover:underline">
              {language}
            </a>
          </div>
        )
      })}
    </>
  )
}

const Menu = () => {
  const listMenu = [
    'Sign Up',
    'Log in',
    'Messenger',
    'Facebook Lite',
    'Video',
    'Place',
    'Games',
    'Marketplace',
    'Meta Pay',
    'Meta Store',
    'Meta Quest',
    'Imagine with Meta AI',
    'Instagram',
    'Threads',
    'Fundraisers',
    'Services',
    'Voting Information Centre',
    'Privacy Policy',
    'Groups',
    'About',
    'Create Ad',
    'Create Page',
    'Developers',
    'Careers',
    'Cookies',
    'AdChoices',
    'Terms',
    'Help',
    'Contact uploading and non-users',
  ]

  return (
    <>
      {listMenu.map((menu, index) => {
        return (
          <div key={index}>
            <a href="#" className='text-sm text-slate-400 hover:underline'>{menu}</a>
          </div>
        )
      })}
    </>
  )
}

export default function Footer() {
  return (
    <>
      {/* Bahasa */}
      <div>
        <div className="flex gap-3 border-b-[2px] py-3">
          <Language />
          <button className="bg-slate-100 h-[20px] my-1 border border-slate-200 w-[30px] hover:bg-slate-300">
            <RxPlus className="w-[20px] mx-auto" />
          </button>
        </div>
        {/* Footer Menu */}
        <div className='bg-rsed-200 flex flex-wrap gap-3 mt-2'>
          <Menu />
        </div>
        {/* Copyright */}
        <div className='mt-5'>
          <p className='text-xs text-slate-500'>Meta &copy; 2024</p>
        </div>
      </div>
    </>
  )
}
