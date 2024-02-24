import './PageTitle.css';

function PageTitle({children}) {
  return (
    <div className='page-title'>
      <div className="wrapper">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default PageTitle;
