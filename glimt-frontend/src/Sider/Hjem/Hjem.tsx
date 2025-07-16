import './hjem.scss'
import { Card, CardContent, Typography } from '@mui/material'
import ØktGenerator from '../oktGenerator/ØktGenerator'
import Knapp from "../../Komponenter/Knapper/Knapp";

export default function Hjem() {
  return (
    <div className="forside">
      <section className="card">
        <h2>Heading Level 2</h2>
        <p>
          This is a paragraph demonstrating the base text styling of the theme. It uses a sans-serif font for clarity and comfort during reading.
        </p>
        <a href="#">Example link</a>

      </section>

      <section className="card">
        <h3>Buttons</h3>
        <Knapp onClick={() => {}}>Primær</Knapp>
        <Knapp onClick={() => {}} type="sekundær">Sekundær</Knapp>
        <Knapp onClick={() => {}} type="tertiær">Tertiær</Knapp>
        <Knapp onClick={() => {}} str="liten">Liten Primær</Knapp>
        <Knapp onClick={() => {}}  str="stor" type="sekundær">Stor Sekundær</Knapp>


      </section>

      <section className="card">
        <h3>Form Elements</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />

          <label htmlFor="genre">Favorite Genre</label>
          <select id="genre">
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Fantasy</option>
            <option>Mystery</option>
          </select>

          <label htmlFor="bio">Short Bio</label>
          <textarea id="bio" rows="3" placeholder="Tell us about yourself..."></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  )
}
