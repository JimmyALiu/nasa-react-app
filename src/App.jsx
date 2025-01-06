import { useEffect, useState } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"

function App() {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)

	function handleShowModal() {
		setShowModal(!showModal)
	}

	// fetch from API
	useEffect(() => {
		async function fetchAPIData() {
			const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
			const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`

			try {
				const res = await fetch(url)
				const apiData = await res.json()

				setData(apiData)
				console.log('DATA\n', apiData)
			} catch (err) {
				console.log(err.message)
			}
		}

		fetchAPIData()
	}, [])

	return (
		<>
			{data ? (<Main />) : (
				<div className="loadingState" >
					<i className="fa-solid fa-gear"></i>
				</div>
			)}
			{showModal && (
				<SideBar data={data} handleShowModal={handleShowModal} />
			)}
			{data && (
				<Footer data={data} handleShowModal={handleShowModal} />
			)}
		</>
	)
}

export default App
