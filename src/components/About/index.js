import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faLinux,
  faPython,
  faAws
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {SiTensorflow, SiCplusplus} from 'react-icons/si'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious student looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops and my knowledge at the same time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, CS student, a sports fanatic, loudspeaker enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLinux} color="#DD0031" />
            </div>
            <div className="face2">
              <SiCplusplus color="#000666"/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#fff333" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAws} color="#fff" />
            </div>
            <div className="face5">
              <SiTensorflow color='#cd7f32' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader"/>
    </>
  )
}

export default About
