import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      {/* TODO: Implement navigation bar with:
          - Law firm branding/logo
          - Navigation menu items (non-functional links)
          - User profile section
      */}

      <div className='block'>
        <img className="logo" src="https://explorecenter.unl.edu/sites/unl.edu.executive-vice-chancellor.explore-center/files/styles/no_crop_1440/public/media/image/law-yellow.png?itok=wthUaffF" alt="Law firm logo"></img>
        <h1 className="nav-title">Example Law Firm</h1>
      </div>

      <div className='block'>
        <ul className="nav-links">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Services</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>

        <img className="profile" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="Profile Icon"></img>
      </div>
    </nav>
  )
}

export default Navigation