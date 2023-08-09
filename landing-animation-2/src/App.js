import './app.scss';

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='pos_abs top_nav'>
          <span className='logo'>AW</span>
          <span><i className='fa fa-bars'></i></span>
          <span><i className='fa fa-cart-arrow-down'></i></span>
        </div>
      

        <div className='pos_abs bottom_nav'>
          <span className='nav_arrow'>
            <i className='fa fa-chevron-left'></i>
            <i className='fa fa-chevron-right'></i>
          </span>
          <span><i className='fa fa-twitter'></i></span>
          <span><i className='fa fa-user-o'></i></span>
        </div>
        
        <div className='content_left'>
          <h3>03</h3>
          <div className='dots'>
            <span></span>
            <span></span>
            <span className='active'></span>
            <span></span>
            <span></span>
          </div>
          <h2>
            <span>PURE</span>
            <span>COTTON</span>
            <span>CHAIR</span>
          </h2>
          <p>jbngrk dflkjgnfg lkngf glkndgf ölf <br />löngf löong ölnmg.</p>
        </div>
        <div className='image_container'>
          <img src={process.env.PUBLIC_URL + '/images/chair2.png'} alt='chair' />
          <div className='search'>
            <i className='fa fa-search'></i>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
