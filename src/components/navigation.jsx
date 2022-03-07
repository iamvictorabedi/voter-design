export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            ABC University
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#president' className='page-scroll'>
                President
              </a>
            </li>
            <li>
              <a href='#secretary' className='page-scroll'>
                Secretary
              </a>
            </li>
            <li>
              <a href='#sperson' className='page-scroll'>
                Spokes Person
              </a>
            </li>
            <li>
              <a href='#treasurer' className='page-scroll'>
                Treasurer
              </a>
            </li>
            <li>
              <a href='#vote' className='page-scroll'>
                Vote Now
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
