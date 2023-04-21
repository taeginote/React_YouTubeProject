import { createBrowserRouter } from 'react-router-dom'
import Header from '../Layout/Header/header'
import Videos from '../Video/videos'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: <Videos />,
			},
		],
	},
])

export default router
