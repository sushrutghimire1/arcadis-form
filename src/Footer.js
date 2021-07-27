import './Footer.css';
import Footer1 from './images/footer1.png';
import Footer2 from './images/footer2.png';

export default function Footer(){
 var contents = ['About Arcadis', 'Privacy Notice', 'California Privacy Notice', 'Office Locations'];
return(
    <div className="footer">
       <div className="first">
            {contents.map(content=> <div className="content">{content}</div>)}
       </div>
       <div className="upper">
       Copyright © 1999-2021 Arcadis
       </div>
       <div className="lower">
           <img src={Footer1} className="footerImage1"/>
           <img src={Footer2} className="footerImage2"/>
       </div>
    </div>
);
}
