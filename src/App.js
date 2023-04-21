import { RouterProvider } from 'react-router-dom'
import router from './Routes/routing'

function App() {
	/*
    mock데이터
    channel.json ===  채널 상세내용
    popular.json === 핫트렌드 비디오들
    related.json === 연관된 비디오 검색
    search.json=== 키워드 검색
  */

	/*
  router
  url
  1.
  http://localhost:3000/videos 일때
  videos라는 h1태그 보여주기
  2. 
  http://localhost:3000/videos/사용자가 입력한 search값
  3. video 선택했을때
  http://localhost:3000/videos/watch/비디어에 특정 아이디값
  */

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
