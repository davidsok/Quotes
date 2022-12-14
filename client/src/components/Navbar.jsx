import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';



const Navbar = () => {
    // const [name, setAuthor] = useState("");
    // const [topic, setTopic] = useState("");
    const { topic } = useParams();
    const navigate = useNavigate();
    // const [flip, setFlip] = useState("");


    // const getCategory = (thetopic) => {
    //   setTopicName(thetopic);
    //     console.log(thetopic);
    // }
    // console.log(topic)

    // const getAuthorName = (theauthor) => {
    //   setAuthorName(theauthor);
    //   console.log(theauthor);
    // }

  const goToQuotes = () => {
      navigate("/quotes");
  }

  const showAuthorDropdown = () => {
      document.getElementById("dropdown_author_content").style.display="inherit";
  }

  const hideAuthorDropdown = () => {
      document.getElementById("dropdown_author_content").style.display="none";
  }

  const showTopicDropdown = () => {
    document.getElementById("dropdown_topic_content").style.display="inherit";
}

const hideTopicDropdown = () => {
    document.getElementById("dropdown_topic_content").style.display="none";
}

const testingChange = document.getElementById("dropdown_topic_content");
const topicChange = () => {
  testingChange.addEventListener('click', function(e) { 
    const changing = e.target.closest(this.data)
  })
  navigate(`/quotes/topics/${topic}`)
}

  return (
    <div className="nav-bar">
      <div>
        <a href="/"><img src="./images/Quotable-logoblk.png" width="230" height="130"></img></a>
      </div>
      <div className="nav-bar">
        {/* <a href="/quotes" className="allQuotes">Quotes</a> */}
        <button className="allQuotes" onClick={goToQuotes}>Quotes</button>
        {/* <div style={{marginLeft:30, marginRight:30}}>
          <h2><label for="authors">Authors: </label></h2>
          <select onChange={(e) => setAuthorName(e.target.value)} value={name}>
            <option value="allauthors">All Authors</option>
            <option value="tonyrobbins">Tony Robbins</option>
            <option value="roybennett">Roy Bennett</option>
            <option value="isaacnewton">Isaac Newton</option>
            <option value="stephenking">Stephen King</option>
            <option value="thichnhathanh">Thich Nhat Hanh</option>
            <option value="mothertheresa">Mother Theresa</option>
            <option value="ralphwaldoemerson">Ralph W. Emerson</option>
            <option value="helenkeller">Helen Keller</option>
            <option value="roytbennett">Roy T. Bennett</option>
            <option value="arthurashe">Arthur Ashe</option>
            <option value="laotzu">Lao Tzu</option>
            <option value="andregide">Andre Gide</option>
            <option value="ibnbattuta">Ibn Battuta</option>
            <option value="anitadesai">Anita Desai</option>
          </select>
        </div> */}
        <div className="dropdown" onMouseOver={showAuthorDropdown} onMouseOut={hideAuthorDropdown}>
          <button className="dropbtn">Authors <i className="fa fa-caret-down"></i></button>
          <div id="dropdown_author_content">
            <a href="#">Andre Gide</a>
            <a href="#">Anita Desai</a>
            <a href="#">Arthur Ashe</a>
            <a href="#">Helen Keller</a>
            <a href="#">Ibn Battuta</a>
            <a href="#">Isaac Newton</a>
            <a href="#">Lao Tzu</a>
            <a href="#">Mother Theresa</a>
            <a href="#">Ralph W. Emerson</a>
            <a href="#">Roy T. Bennett</a>
            <a href="#">Stephen King</a>
            <a href="#">Thich Nhat Hanh</a>
            <a href="#">Tony Robbins</a>
          </div>
        </div>
        <div>
          {/* <h2><label for="topics">Topics: </label></h2>
          <select onChange={(e) => getCategory(e.target.value)} value={topic}>
            <option value="alltopics">All Topics</option>
            <option value="inspiration">Inspiration</option>
            <option value="motivation">Motivation</option>
            <option value="travel">Travel</option>
            <option value="philosophy">Philosophy</option>
            <option value="reminder">Reminder</option>
            <option value="change">Change</option>
            <option value="love">Love</option>
          </select> */}
          <div className="dropdown" onMouseOver={showTopicDropdown} onMouseOut={hideTopicDropdown}>
            <button className="dropbtn">Topics <i className="fa fa-caret-down"></i></button>
            <div id="dropdown_topic_content">
              <a href={`/quotes/topics/change`} data-id="Change">Change</a>
              <a href={`/quotes/topics/inspiration`} data-id="Inspiration">Inspiration</a>
              <a href={`/quotes/topics/love`} data-id="Love">Love</a>
              <a href={`/quotes/topics/motivation`} data-id="Motivation">Motivation</a>
              <a href={`/quotes/topics/philosophy`} data-id="Philosophy">Philosphy</a>
              <a href={`/quotes/topics/travel`} data-id="Travel">Travel</a>
              <a href={`/quotes/topics/reminder`} data-id="Reminder">Reminder</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="nav-bar">
        <button onClick="#" style={{marginRight:10, color:"blue", backgroundColor:"white"}}>Register</button>
        <button onClick="#" style={{marginRight:10, color:"green"}}>Login</button>
      </div> */}
    </div>
  );
}

export default Navbar;
