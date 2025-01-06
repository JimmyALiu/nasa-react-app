import { useState } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import SideBar from "./components/SideBar"

function App() {
	const [showModal, setShowModal] = useState(false)

	function handleShowModal() {
		setShowModal(!showModal)
	}

	return (
		<>
			<Main />
			{showModal && (
			 	<SideBar handleShowModal={handleShowModal}/>
			)}
			<Footer handleShowModal={handleShowModal} />
		</>
	)
}

export default App
