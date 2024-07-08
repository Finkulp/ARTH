import React from 'react';

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#4CAF50',
    textAlign: 'center',
    padding: '15px 0'
  },
  nav: {
    textDecoration: 'none',
    fontFamily: 'Verdana',
    fontSize: '20px',
    color: 'black',
    margin: '0 10px'
  },
  section: {
    width: '100%',
    padding: '20px',
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white'
  },
  about: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    color: '#4CAF50',
    padding: '20px',
    backgroundColor: 'black'
  },
  aboutContent: {
    color: 'white',
    fontSize: '16px',
    lineHeight: '1.5'
  },
  projects: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#c2c0c3'
  },
  contact: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#c2c0c3',
    textAlign: 'center'
  },
  contactForm: {
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'black',
    color: 'white'
  },
  footer: {
    width: '100%',
    backgroundColor: '#4CAF50',
    textAlign: 'center',
    padding: '15px 0'
  },
  footerBottom: {
    width: '100%',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: '15px 0',
    color: '#4CAF50'
  },
  footerNav: {
    textDecoration: 'none',
    color: '#4CAF50',
    margin: '0 10px'
  }
};

const Header = () => (
  <div style={styles.header}>
    <table width="90%" align="center">
      <tbody>
        <tr>
          <td>
            <font face="Comic Sans MS" size="6">
              <b>GeeksForGeeks</b>
            </font>
          </td>
          <td>
            <a href="#home" style={styles.nav}>Home</a>
            |
            <a href="#about" style={styles.nav}>About</a>
            |
            <a href="#projects" style={styles.nav}>Projects</a>
            |
            <a href="#achievements" style={styles.nav}>Achievements</a>
            |
            <a href="#contact" style={styles.nav}>Contact</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Home = () => (
  <div id="home" style={styles.section}>
    <h3>Hi Geeks!</h3>
    <h2 style={{ color: '#4CAF50' }}>Freelance Programmer</h2>
  </div>
);

const About = () => (
  <div id="about" style={styles.about}>
    <h2>About Me</h2>
    <hr color="#4CAF50" width="90" />
    <div style={styles.aboutContent}>
      <p>Thanks for your interest, here is a quick story of me and this website...</p>
      <hr color="black" />
      <p>Sandeep Jain An IIT Roorkee alumnus and founder of GeeksforGeeks...</p>
      <hr color="black" />
      <p>I do my work mainly in C-Language, C++ and JAVA...</p>
      <hr color="black" />
      <p>This website is basically one of my Web Development project...</p>
      <hr color="black" />
      <p>Cheers, <b>GeeksForGeeks.</b></p>
    </div>
  </div>
);

const Projects = () => (
  <div id="projects" style={styles.projects}>
    <h2>Projects</h2>
    <hr color="black" width="90" />
    <ul>
      <li>BMI Calculator ➲</li>
      <li>Calculator ➲</li>
      <li>Calendar ➲</li>
      <li>ChatBot ➲</li>
      <li>Contact Saver ➲</li>
      <li>Daily Quiz ➲</li>
      <li>Employee Record System ➲</li>
      <li>Guess the Number-Game ➲</li>
      <li>Random Password Generator ➲</li>
      <li>Stone Paper Scissor ➲</li>
      <li>Tic Tac Toe ➲</li>
      <li>Tic Tac Toe(GUI) ➲</li>
      <li>ToDo App ➲</li>
      <li>Travel Management System ➲</li>
    </ul>
  </div>
);

const Achievements = () => (
  <div id="achievements" style={styles.section}>
    <h2>Achievements</h2>
    <hr color="#4CAF50" width="90" />
    <ul>
      <li>
        <b>Intern at GeeksforGeeks.</b>
        <ul>
          <li>December, 2020 - Present.</li>
          <li>Write technical articles on programming related topics.</li>
        </ul>
      </li>
      <li>
        <b>Microsoft Learn Student Ambassador.</b>
        <ul>
          <li>August, 2020 - Present.</li>
          <li>Conducted events and workshops on different technologies.</li>
        </ul>
      </li>
      <li>
        <b>Mentored HackTX.</b>
        <ul>
          <li>October, 2020.</li>
          <li>Selected from Microsoft as Student ambassador where I mentored students in their projects.</li>
        </ul>
      </li>
    </ul>
  </div>
);

const Contact = () => (
  <div id="contact" style={styles.contact}>
    <h2>Contact</h2>
    <hr color="black" width="90" />
    <div style={styles.contactForm}>
      <table width="100%">
        <tbody>
          <tr>
            <td>Name</td>
            <td><input type="text" size="40" /></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" size="40" /></td>
          </tr>
          <tr>
            <td>Number</td>
            <td><input type="number" size="12" /></td>
          </tr>
          <tr>
            <td>Message</td>
            <td><textarea rows="5" cols="37" /></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'black' }}>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Footer = () => (
  <div>
    <div style={styles.footer}>
      <table width="90%" align="center">
        <tbody>
          <tr>
            <td><b>LinkedIn</b> ➲</td>
            <td>|</td>
            <td><b>GitHub</b> ➲</td>
            <td>|</td>
            <td><b>HackerRank</b> ➲</td>
            <td>|</td>
            <td><b>GeeksforGeeks</b> ➲</td>
            <td>|</td>
            <td><b>Twitter</b> ➲</td>
            <td>|</td>
            <td><b>Instagram</b> ➲</td>
            <td>|</td>
            <td><b>Email</b> ➲</td>
            <td>|</td>
            <td><b>Website</b> ➲</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style={styles.footerBottom}>
      <font size="5">©Copyright 2050 by nobody. All rights reserved.</font>
      <br />
      <a href="#header" style={styles.footerNav}><b>TOP</b></a>
    </div>
  </div>
);

const Myportfolio = () => (
  <div>
    <Header />
    <Home />
    <About />
    <Projects />
    <Achievements />
    <Contact />
    <Footer />
  </div>
);

export default Myportfolio;
