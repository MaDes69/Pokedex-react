import React, {FunctionComponent} from 'react';
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import './footer.css';

const Footer:FunctionComponent= () => {
    return (
        <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle ">
  {/* <div className="container"> */}
    <div className="row">
      <div className="col s4 m3">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Heading 1</h4>
          <ul className="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>
            <li><a href="#">News and Updates</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      
      <div className="col s4 m3">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Heading 2</h4>
          <ul className="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Webmaster</a></li>
          </ul>
        </div>
      </div>
      <div className="col s4 m3">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Heading 3</h4>
          <ul className="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col s4 m3">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><FacebookFillIcon className="icon" color='grey' /></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><InstagramLineIcon className="icon" color='grey' /></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
    
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2022- Company Name.  All rights reserved.</p>
		</div>
	</div>


  </div>
  {/* </div> */}
</footer>
    )
}

export default Footer;