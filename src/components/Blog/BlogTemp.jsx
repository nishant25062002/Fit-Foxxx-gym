import React, { useEffect, useState } from 'react';
// import './BlogTemp.css'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import { db } from '../../firebase';

function BlogTemp() {
    const [data,setData]= useState([])
    useEffect(() => {
      db.collection("Blog").doc('Diabetes').onSnapshot((doc) => {
        setData(doc.data())
        console.log("data",doc.data())
        // dispatch({
        //     type: actionTypes.SET_REGISTERED_SCHOOL,
        //     registeredSch: doc.data()?.Schools,
        // })
    }
    );
    }, [])
    
    return (
        <Container>
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="content col-md-8 col-sm-12 col-xs-12">
                            <div className="section-block">
                                <div className="funding-meta">
                                    <h1>WEIGHT LOSS</h1>
                                    <span className="type-meta">
                                        <PersonIcon /> Sanskaar Tijaria </span>
                                    <span className="type-meta">
                                        <LanguageIcon />
                                        <a href="https://fitboxxgym.in">fitboxxgym.in</a>, <a href="https://creamchoice.in">creamchoice.in</a> </span>
                                    {/* <!--img src="assets/img/image-heartbeat.jpg" className="img-responsive" alt="launch HTML5 Crowdfunding"--> */}
                                   
                                    {/* <p>Launch will enable you be in run  your own crowdfunding campaign, and be in complete control from concept to crowdfunding to launch.</p> */}
                                    {/* <h2>$10,350</h2> */}
                                    {/* <span className="contribution">raised by <strong>5,234</strong> ready to launch</span> */}
                                    {/* <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{ width: "45%" }}>
                                            <span className="sr-only">45% Complete</span>
                                        </div>
                                    </div> */}
                                    {/* <span className="goal-progress"><strong>45%</strong> of $23,000 raised</span> */}
                                </div>
                                {/* <span className="count-down"><strong>27</strong>Days to go.</span>
                                <a href="#" className="btn btn-launch">HELP LAUNCH</a> */}
                            </div>
                            {/* <!--signup--> */}
                           
                            {/* <!--/signup--> */}
                            {/* <!--tabs--> */}
                            {/* <div className="section-block">
                                <div className="section-tabs">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href="#about" aria-controls="about" role="tab" data-toggle="tab">About</a></li>
                                        <li role="presentation"><a href="#updates" aria-controls="updates" role="tab" data-toggle="tab">Updates</a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <!--/tabs-->
					<!--tab panes--> */}
                            <div className="section-block">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="about">
                                        <div className="about-information">
											<div className="">
												<img src="./Images/Obesity.jpg" alt=""></img>
											</div>
                                            <h1 className="section-title">{data?.H}</h1>
                                            <p>{data?.D}
                                                <h1 className="section-title"> WHAT CAUSES OBESITY</h1>

                                                There are many factors that may contribute to the obesity, and more importantly these factors have come into light even more in today's lifestyles.

                                                The fast foods in today's world are a major factor of obesity. These foods are low in fiber and have high sugar content and hence allow us to intake a lot of calories.

                                                Lack of physical work and increased screen timings have also majorly contributed to the global issue of obesity.

                                                Overeating due to loneliness, anxiety in today's fast and ever changing world is another common thing that is affecting the world in a negative way.


												<div className="">
												<img src="./Images/Hypertension.jpg" alt=""></img>
											</div>

                                                WEIGHT LOSS AS IMPORTANT STEP IN TODAY'S WORLD

                                                There are many health risks of overweight and obesity.
                                                Accumulation of weight above average may lead to high blood pressure, heart diseases, stroke, metabolic syndrome,  liver diseases,  osteoarthritis etc
                                                People can lose weight and maintain the loss by taking several steps

							
                                                <h3>1) Engaging in regular physical activity and exercise</h3>

												<div className="">
												<img src="./Images/Physical.png" alt=""></img>
											</div>


                                                This is the kind of the step which will ask you for your discipline,  perseverance and dedication.  Engaging in the regular physical exercises and going to the Gym have really helped people worldwide to get the rid of the overweightness. Gym can really help you lose weight, but only if you are ready to push yourself and ready to sacrifice many things.
                                                Gyms usually have trainers who have a good in depth knowledge of the fields and can provide with the right guidance.

											
                                                <h3> 2)Proper and healthy diet</h3>

												<div className="">
												<img src="./Images/Healthy_Food (1).jpg" alt=""></img>
											</div>

                                                Exclusion of the junk food and inclusion of healthful meals and snacks with fruits and vegetables and proteins should form the base of your diet.
                                                Baked things, oily things,  fatty meats, extra sugary things must be avoided.
                                                Moreover, if you have joined a gym, the proper diet chart can be provided to you as well.

											
                                                <h3>3) Engage socially</h3>

												<div className="">
												<img src="./Images/Social.jpg" alt=""></img>
											</div>

                                                As discussed above, loneliness and overeating can easily be connected. Hence it is very much necessary to embrace the support of loved ones. One must have a positive social network, exercise clubs or partners.

                                                <h3>4) Managing stress levels</h3>


												<div className="">
												<img src="./Images/Stress.jpg" alt=""></img>
											</div>

                                                People who are under constant stress have witnessed a increase in their appetite.
                                                The management of the stress can be done by yoga, meditation,  breathing and relaxing techniques and spending time outdoors with your loved and caring ones.

                                                One must remember at last that our body will be with us throughout our life and it must be our responsibility to take the proper care of the body as well as the health to live a fruitful life.
                                                When it comes to weight loss, it will never be easy at the start and will demand out of the skin hard work from your side,  only to give the benefits in the long run.</p>
                                              </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="updates">
                                        <div className="update-information">
                                            <h1 className="section-title">UPDATES</h1>
                                            {/* <!--update items--> */}
                                            <div className="update-post">
                                                <h4 className="update-title">We've started shipping!</h4>
                                                <span className="update-date">Posted 2 days ago</span>
                                                <p>Suspendisse luctus at massa sit amet bibendum. Cras commodo congue urna, vel dictum velit bibendum eget. Vestibulum quis risus euismod, facilisis lorem nec, dapibus leo. Quisque sodales eget dolor iaculis dapibus. Vivamus sit amet lacus ipsum. Nullam varius lobortis neque, et efficitur lacus. Quisque dictum tellus nec mi luctus imperdiet. Morbi vel aliquet velit, accumsan dapibus urna. Cras ligula orci, suscipit id eros non, rhoncus efficitur nisi.</p>
                                            </div>
                                            <div className="update-post">
                                                <h4 className="update-title">Launch begins manufacturing </h4>
                                                <span className="update-date">Posted 9 days ago</span>
                                                <p>Suspendisse luctus at massa sit amet bibendum. Cras commodo congue urna, vel dictum velit bibendum eget. Vestibulum quis risus euismod, facilisis lorem nec, dapibus leo. Quisque sodales eget dolor iaculis dapibus. Vivamus sit amet lacus ipsum. Nullam varius lobortis neque, et efficitur lacus. Quisque dictum tellus nec mi luctus imperdiet. Morbi vel aliquet velit, accumsan dapibus urna. Cras ligula orci, suscipit id eros non, rhoncus efficitur nisi.</p>
                                            </div>
                                            <div className="update-post">
                                                <h4 className="update-title">Designs have now been finalized</h4>
                                                <span className="update-date">Posted 17 days ago</span>
                                                <p>Suspendisse luctus at massa sit amet bibendum. Cras commodo congue urna, vel dictum velit bibendum eget. Vestibulum quis risus euismod, facilisis lorem nec, dapibus leo. Quisque sodales eget dolor iaculis dapibus. Vivamus sit amet lacus ipsum. Nullam varius lobortis neque, et efficitur lacus. Quisque dictum tellus nec mi luctus imperdiet. Morbi vel aliquet velit, accumsan dapibus urna. Cras ligula orci, suscipit id eros non, rhoncus efficitur nisi.</p>
                                            </div>
                                            {/* <!--/update items--> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--/tabs-->
				<!--/main content-->
				<!--sidebar--> */}
                        {/* < className="content col-md-4 col-sm-12 col-xs-12">
                            <div className="section-block summary">
                                <h1 className="section-title">LAUNCH</h1>
                                <div className="profile-contents">
                                    <h2 className="position">Sky Rocketing Your Funding Campaign</h2>
                                    <img src="assets/img/profile-img.jpg" className="profile-image img responsive" alt="John Doe" />
                                    {
                                    <ul className="list-inline">
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-git"></i></a></li>
                                    </ul>
                                  
                                    <a href="#" className="btn btn-contact"><i className="fa fa-envelope"></i>CONTACT US</a>
                                </div>
                            </div> */}
                            {/* <div className="section-block">
                                <h1 className="section-title">REWARDS</h1>
                              
                                <div className="reward-block">
                                    <h3>$10</h3>
                                    <h2>Early Bird</h2>
                                    <p>Curabitur accumsan sem sed velit ultrices fermentum. Pellentesque rutrum mi nec ipsum elementum aliquet. Sed id vestibulum eros. Nullam nunc velit, viverra sed consequat ac, pulvinar in metus.</p>
                                    <span><i className="fa fa-users"></i> 180 backers</span>
                                    <a href="" className="btn btn-reward">GET THIS REWARD</a>
                                </div>
                                <div className="reward-block popular">
                                    <h3>$20</h3>
                                    <h2>Value Bird</h2>
                                    <p>Curabitur accumsan sem sed velit ultrices fermentum. Pellentesque rutrum mi nec ipsum elementum aliquet. Sed id vestibulum eros. Nullam nunc velit, viverra sed consequat ac, pulvinar in metus.</p>
                                    <span><i className="fa fa-users"></i> 320 backers</span>
                                    <a href="" className="btn btn-reward">GET THIS REWARD</a>
                                </div>
                                <div className="reward-block">
                                    <h3>$30</h3>
                                    <h2>Super Bird</h2>
                                    <p>Curabitur accumsan sem sed velit ultrices fermentum. Pellentesque rutrum mi nec ipsum elementum aliquet. Sed id vestibulum eros. Nullam nunc velit, viverra sed consequat ac, pulvinar in metus.</p>
                                    <span><i className="fa fa-users"></i> 105 backers</span>
                                    <a href="" className="btn btn-reward">GET THIS REWARD</a>
                                </div>
                                <div className="reward-block last">
                                    <h3>$50</h3>
                                    <h2>Premium Bird</h2>
                                    <p>Curabitur accumsan sem sed velit ultrices fermentum. Pellentesque rutrum mi nec ipsum elementum aliquet. Sed id vestibulum eros. Nullam nunc velit, viverra sed consequat ac, pulvinar in metus.</p>
                                    <span><i className="fa fa-users"></i> 64 backers</span>
                                    <a href="" className="btn btn-reward">GET THIS REWARD</a>
                                </div> */}
                                {/* <!--/reward blocks--> */}
                            </div>
                            {/* <!--credits--> */}
                            {/* <div className="section-block">
                                <h1 className="section-title">CREDITS</h1>
                               
                                <div className="credit-block sources">
                                    <ul className="list-unstyled">
                                        <li><a href="http://getbootstrap.com/"><i className="fa fa-external-link"></i>Bootstrap</a></li>
                                        <li><a href="http://fortawesome.github.io/Font-Awesome/"><i className="fa fa-external-link"></i>FontAwesome</a></li>
                                        <li><a href="https://www.google.com/fonts"><i className="fa fa-external-link"></i>Google Fonts</a></li>
                                        <li><a href="http://jquery.com/"><i className="fa fa-external-link"></i>jQuery</a></li>
                                        <li><a href="https://vimeo.com/67938315"><i className="fa fa-external-link"></i>Vimeo Video</a></li>
                                        <li><a href="http://uifaces.com/"><i className="fa fa-external-link"></i>Glasses Image</a></li>
                                    </ul>
                                </div>
                                <div className="credit-block license">
                                    <p>The Launch template was created by <a className="lined" href="http://themes.audaindesigns.com">Audain Designs</a> for use by anyone for <strong>FREE</strong> and is covered uner the <a className="lined" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>.</p>
                                    <p>As time goes on the template may receive updates, follow us on twitter to get notified when an update is released.</p>
                                    <a href="http://twitter.com/audaindesigns" className="btn btn-follow"><i className="fa fa-twitter"></i>FOLLOW US</a>
                                    <a href="#" className="btn btn-download"><i className="fa fa-download"></i>DOWNLOAD TEMPLATE</a>
                                </div>
                             
                            </div> */}
                            {/* <!--/credits--> */}
                        </div>
                        {/* <!--/sidebar--> */}
               
                
            </div>
        </Container>
    )
}

export default BlogTemp

const Container = styled.div`
/*!
 * Temlate Name: Launch
 * Version: 1.0
 * Author: Justin Audain
 * License: Creative Commons Attribution 3.0 License
 * Website: http://themes.audaindesigns.com
 */

/*-Base-*/

body {
	background-color:#ECEBEB;
	font-family: 'Open Sans', sans-serif;
}
p {
	color:#A7A7A7;
}
a { 
	color:#85AD90;
}

/*-Header-*/
.header {
	background-color: #99DEAB;
	border-bottom: 5px solid #85AD90;
	padding: 30px 0px;
}
.goal-summary {
	padding: 0px 40px;
}
.goal-summary .backers, .goal-summary .funded, .goal-summary .time-left, .goal-summary .reminder {
	margin: 10px 20px 10px 0px;
	padding-right: 20px;
	display: inline-block;
	border-right: 1px solid rgba(255, 255, 255, 0.39);
}
.goal-summary .reminder.last {
	border:0;
}
.goal-summary .backers h3, .goal-summary .funded h3, .goal-summary .time-left h3 {
	background-color:#fff;
	padding:5px;
	margin:0px 0px 5px 0px;
	display:table;
	border-radius:4px;
	color:#85AD90;
}
.goal-summary .backers span, .goal-summary .funded span, .goal-summary .time-left span {
	color:#fff;
}
.goal-summary .reminder a {
	background-color:#fff;
	padding:8px;
	margin:0px 0px 10px 0px;
	display:table;
	border-radius:4px;
	text-decoration:none;
}
.goal-summary .reminder a:hover, .goal-summary .reminder a:focus {
	background-color:#85AD90;
	color:#fff;
}
@media (max-width: 767px) {
	.goal-summary {
		text-align: center;
		padding: 0px 40px;
	}
}
@media (max-width: 480px) {
	.goal-summary {
		padding: 0px;
	}
}

/*-Section Blocks-*/
.section-block {
	background-color: #F7F7F7;
	border-radius:4px;
	padding: 30px;
	margin-bottom:30px;
}
.section-block.summary {
    background-color: #99DEAB;
}
.section-block.summary h1 {
    color: #fff;
	display:block;
	text-align:center;
}
.section-block.transparent {
	background-color:transparent
}
.section-block.signup {
	background-color: #99DEAB;
}
.section-block h1 {
	margin-top:0;
}
.section-title {
	color: #99DEAB;
	border-radius: 4px;
	display: table;
	padding: 10px 0px;
	font-size: 25px;
	font-weight:700;
}

/*-Main Content-*/
.main-content {
	padding:40px 0px;
}

/*-Profile Summary-*/
.profile-contents {
	margin: 0 auto;
    text-align: center;
}
.profile-contents h2 {
	color:#FFF;
	font-size: 16px;
	line-height: 1.5;
	font-weight:300;
	margin-top: 5px;
	margin-bottom: 10px;
}
.profile-image {
	border-radius:50%;
	max-height: 180px;
	margin-bottom:10px;
}
.profile-contents ul li {
	padding:0;
	margin:5px;
}
.profile-contents ul li a {
	background-color: #85AD90;
	color: #FFF;
	height: 40px;
	width: 40px;
	display: inline-block;
	text-align: center;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
}
.profile-contents ul li a i.fa {
	font-size: 20px;
	margin-top: 10px;
}
.profile-contents ul li a:hover {
	background-color:#779A81;
}

/*-Funding Meta-*/
.funding-meta {}
.funding-meta h1 {
	background: #99DEAB;
	color: #fff;
	border-radius: 4px;
	display: table;
	padding: 10px;
	font-size: 25px;
	font-weight:700;
}
.type-meta {
	color:#A7A7A7;
	font-size: 12px;
	display: inline-block;
	margin: 0px 10px 10px 0px;
}
.type-meta i.fa {
	color:#99DEAB;
	margin-right:5px;
}
.funding-meta h2{
	font-weight:700;
}
.funding-meta p {
	color: #A7A7A7;
	margin: 30px 0px 10px 0px;
}
.video-frame {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
	display:block;
}
.video-frame iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.funding-meta h2, .funding-meta span.contribution {
	display:inline-block;
	color: #85AD90;
}
.funding-meta span.contribution, .funding-meta span.goal-progress {
	color: #A7A7A7;
}
.funding-meta span.goal-progress {
	text-align:right;
	display: block;
}
.count-down {
	display: block;
	color: #A7A7A7;
	text-align: right;
	text-transform: uppercase;
}
.count-down strong {
	padding-right:5px;
}
.progress-bar {
	background-color: #99DEAB;
	box-shadow:none;
}
.progress {
	height: 30px;
	background-color: #ECEBEB;
	box-shadow:none;
	margin: 10px 0px 10px 0px;
}

/*-Rewards-*/
.reward-block {
	position:relative;
	background-color: #fff;
	border-radius: 4px;
	padding: 20px;
	margin-bottom:10px;
}
.reward-block:hover {
	background-color: #DCF7E3;
}
.reward-block.last {
	margin-bottom:0;
}
.reward-block h3 {
	background: #99DEAB;
	color: #fff;
	font-size: 15px;
	font-weight: 700;
	margin: 0px 0px 10px 0px;
	padding: 10px;
	display: table;
	border-radius: 4px;
}
.reward-block h2 {
	font-size: 20px;
	font-weight: 300;
	color: #99DEAB;
	margin: 15px 0px;
}
.reward-block i.fa {
	color:#99DEAB;
}
.reward-block span {
	margin-bottom: 10px;
	display: block;
	color: #A7A7A7;
}
.reward-block.popular:after {
	position: absolute;
	top: 10px;
	right: 10px;
	content: "popular";
	background-color: #2ED9EA;
	color: #fff;
	padding: 5px;
	border-radius: 4px;
	text-transform: uppercase;
	font-weight: 700;
}

/*-Sign up form-*/
.sign-up-form {
	text-align: center;
}
.sign-up-form p {
	font-weight:700;
	color:#fff;
}
.signup-input {
	width: 100%;
	border: 0;
	padding: 10px;
	border-radius: 4px;
	max-width: 400px;
}
@media (max-width: 767px) {
	.signup-input {
		width: 75%;
		max-width: 100%;
	}
}
@media (max-width: 480px) {
	.signup-input {
		width: 100%;
		max-width: 100%;
	}
	.sign-up-form .btn.btn-signup {
		margin:10px 0px;
		width:100%;
		display:block;
	}
}

/*-Tabs-*/
.nav-tabs {
	border:0;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
	color: #FFF;
	background-color: #99DEAB;
	border: 0;
	border-radius: 4px;
	font-weight:700;
}
.nav-tabs>li>a, .nav-tabs>li>a:hover {
	border:0;
	margin-right: 10px;
	color:#A7A7A7;
}
.tab-content .section-title {
	margin-bottom: 20px;
	border-bottom: 1px solid #E2E2E2;
	display: block;
}

/*-Updates-*/
.update-post {
	margin-bottom: 30px;
	padding: 10px;
	background-color: #FDFDFD;
	border-radius: 4px;
}
.update-post .update-title {
	margin: 10px 0px;
	font-weight: 700;
}
.update-post .update-date {
	margin: 0px 0px 15px 0px;
	display: block;
	color: #A7A7A7;
	font-size: 12px;
}



/*-Buttons-*/
.btn {
	border:0;
}
.btn.btn-launch {
	background-color: #99DEAB;
	color: #FFF;
	font-size: 17px;
	font-weight: 600;
	padding: 10px 25px;
}
.btn.btn-launch:hover, .btn.btn-launch:focus,.btn.btn-reward, .btn.btn-reward:hover, .btn.btn-reward :focus {
	background-color:#85AD90;
	box-shadow:none;
}
.btn.btn-reward {
	background-color: #99DEAB;
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 15px;
}
.btn.btn-signup {
	background-color: #99DEAB;
	color: #fff;
	height: 40px;
	width: 43px;
	margin-left: 10px;
	border: 2px solid #fff;
    /* display:flex ; */
	text-align: center;
    justify-content:center ;
}
.btn-signup{
   margin:0 ;
   width:100% ;
   /* display:flex ;
	text-align: center;
    justify-content:center ; */
}
.btn.btn-contact {
	background-color: #85AD90;
	color: #fff;
	font-weight:700;
}
.btn.btn-contact:hover, .btn.btn-contact:focus {
	background-color: #779A81;
}
.btn.btn-contact i.fa {
	margin-right:10px;
}
.btn.btn-follow {
	background-color: #81A8F1;
	color: #fff;
	margin-bottom:10px;
}
.btn.btn-download {
	background-color: #85AD90;
	color: #fff;
}

/*-Credits-*/
.credit-block {
	padding: 20px;
	background-color: #FFF;
	border-radius: 4px;
	margin-bottom: 10px;
}
.credit-block.sources a{
	margin: 10px 0px;
	display: block;
}
.credit-block.license a.lined{
	text-decoration:underline;
}
.credit-block i.fa {
	padding-right:10px;
}

/*-Footer-*/
.footer {
	background-color: #85AD90;
	padding: 10px;
	text-align:center;
}
.copyright {
	color:#F7F7F7;
}
.copyright a {
	background: #fff;
	color: #85AD90;
	padding: 0px 5px;
	margin-left: 4px;
	border-radius: 4px;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
}

/*-Overrides-*/
.btn, input{
	outline:none;
}`
 