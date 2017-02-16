import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Helloworld extends React.Component {
  render(){
    return (

      <div id="sam">
     
        <img src="muhammad1.png" role="presentation"/>
     
          <div className="container">
          
          <p>Muhammad <a href="JavaScript:void(0)" className="tooltip">( محمد‎ ‎):<span>Arabic Language</span>
          </a>  pronounced <a href="JavaScript:void(0)" className="tooltip">[muħammad];<span>Muhammad</span></a> c. 
          570 CE – 8 June 632 CE) is the central figure of <a href="JavaScript:void(0)" className="tooltip"> Islam <span>Islam</span></a> and widely identified as its founder by non-Muslims.
         He is known as the "Holy Prophet" to <a href="JavaScript:void(0)" className="tooltip"> Muslims <span>Muslims</span> </a>,
           almost all of whom consider him to be the  <a href="JavaScript:void(0)" className="tooltip">final prophet<span>Khatim an-Nabuwwah</span></a> 
            of <a href="JavaScript:void(0)" className="tooltip"> God <span>God</span> </a>
            to restore Islam, 
           believed by Muslims to be the <a href="JavaScript:void(0)" className="tooltip">unaltered  <span>Tahrif</span></a> original <a href="JavaScript:void(0)" className="tooltip">monotheistic<span>monotheisim</span></a> faith of  <a href="JavaScript:void(0)" className="tooltip">Adam<span>Adam is Islam</span></a>, 
           <a href="JavaScript:void(0)" className="tooltip"> Abraham<span>Abraham in Islam</span></a>, <a href="JavaScript:void(0)" className="tooltip">Moses<span>Moses in Islam</span></a>, <a href="JavaScript:void(0)" className="tooltip">Jesus<span>Jesus in Islam</span></a>, and other <a href="JavaScript:void(0)" className="tooltip">prophets<span>prophets and messengers in Islam</span></a>.
           Muhammad united Arabia into a single Muslim polity and ensured that his teachings, 
           practices, and the Quran, formed the basis of Islamic religious belief.
           <p>
                Born approximately 570 CE (Year of the Elephant) in the Arabian city of Mecca, Muhammad was orphaned at an early age; he was raised under the care of his paternal uncle Abu Talib. Periodically, he would seclude himself in a mountain cave named Hira for several nights of prayer; later, at age 40, he reported being visited by Gabriel in the cave, where he stated he received his first revelation from God. Three years later, in 610, Muhammad started preaching these revelations publicly, proclaiming that "God is One", that complete "surrender" (lit. islām) to him is the only way (dīn) acceptable to God, and that he was a prophet and messenger of God, similar to the other prophets in Islam.
           
           </p>
           </p>
            <a href="https://en.wikipedia.org/wiki/Muhammad" className="tooltip" target="_blank">Wikipedia.<span>Wikipedia</span></a>
          </div>
      </div>

       
    )
  }
}
ReactDOM.render(<Helloworld />, document.getElementById('root'))