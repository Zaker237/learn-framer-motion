import './App.scss';
import { FaBehance, FaDribbble } from 'react-icons/fa';
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Card from './components/Card';

function App() {
  return (
    <>
      <header>
        <div className='logo_wrapper'>
          Alex <span> Walker</span>
        </div>
        <div className='menu_container'>
          <span>
            <IconContext.Provider value={{color: '#000', size: '18px', className: 'icons_container'}}>
              <div className='icon'><FaBehance /></div>
              <div className='icon'><FaDribbble /></div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider value={{color: '#000', size: '18px'}}>
              <div className='icon'><IoMailOutline /></div>
              testemail@gmail.text
            </IconContext.Provider>
          </span>
          <span className='menu'>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </header>

      <div className='content_wrapper'>
        <div className='left_content_wrapper'>
          <h2>
            <span>Design <span className='second'>focused</span></span>
            <span>startupp, <span className='second'>for startups.</span></span>
          </h2>
          <p>oioitj ojropt optkjrt optt pokjtrpojt topejtpwrtget opjtopt <br /> jpojfpo gjpogj prog rojgprg opjgog opjtpgorg opjr grgh</p>
          <div className='btn_group'>
            <div className='btn btn_primary'>
              Hire Me
              <IconContext.Provider value={{color: '#14da8f', size: '25px'}}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </div>
            <div className='btn btn_secondary'>Live Chat</div>
          </div>
          <div className='review_container'>
            <p className='total_review'>64+ Reviews</p>
            <IconContext.Provider value={{color: '#fff', size: '18px'}}>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
            </IconContext.Provider>
            <p className='more_review'>More then 50+ peoples taking services</p>
          </div>
        </div>

        <div className='right_content_wrapper'>
          <img src={process.env.PUBLIC_URL + '/images/bg.png'} alt='bg'></img>
        </div>
      </div>

      <Card />
    </>
  );
}

export default App;
