import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Image from "./pages/Image"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/image" element={<Image />} />
			</Routes>
		</BrowserRouter>
	)
}