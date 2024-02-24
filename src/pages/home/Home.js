import Card from '../../components/card/Card';
import PageTitle from '../../components/page-title/PageTitle';
import './Home.css';

function Home() {
  return (
    <>
      <PageTitle>Popular Titles</PageTitle>
      <div className='home-page'>
        <div className='wrapper'>
          <ul>
            <li>
              <Card link={"/series"} title={"Popular Series"} poster={"./poster-series.png"} />
            </li>
            <li>
              <Card link={"/movies"} title={"Popular Series"} poster={"./poster-movies.png"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
