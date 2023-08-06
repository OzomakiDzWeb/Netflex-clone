 import Main from './Main'
import Row from './Row'
import requests from './Reques'


const Home = () => {

  return (
    <div>
      <Main/>
      <Row title='UpComing' fetchURL={requests.requestUpcoming}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='TopRated' fetchURL={requests.requestTopRated}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home