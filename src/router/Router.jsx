import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {
    About,
    Contact,
    Home,
    Layout,
    Projects
} from '../index'


export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
    </Route>
))