//require('dotenv').config()


import React, {useEffect, useState, useRef, useCallback} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import {
    EmailIcon,
    FacebookIcon,
    
    TwitterIcon,
    
    WhatsappIcon,

    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    
  } from "react-share";

  

// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from 'axios'
// import Header from "./header"
// import Home from "./home"
// import Act from "./act"
// import SignupSection from "./signup"
// import Shop from "./shop"
// import Footer from "./footer"
 import { ThemeProvider } from 'styled-components'
 import GlobalStyles from "./global"
 import styled from 'styled-components/macro';
 import bg from '../../assets/images/bg'
// import Article from './article'
// import SideMenu from './sidemenu'

// import Login from "./pages/login"
// import Forgot from "./pages/forgot"
// //import Signup from './pages/signup'
// import Edit from './pages/edit'
// import Change from './pages/change_pw'
// import Resend from './pages/resend'


///////////////////////////////// MAIN APP STARTING POINT ///////////////
// function App({d}){
function App(props){
    //console.log("NEWAPPPROPS", JSON.stringify(d.current_user))
    // const lastStory = d.lastStory
    // const secondToLastStory = d.secondToLastStory
    // const thirdToLastStory = d.thirdToLastStory
    // const fourthToLastStory = d.fourthToLastStory
    // const current_user = d.current_user
    // const artData = d.artData

    

    
    console.log("==============APP===============" + JSON.stringify(props))
    //console.log("==============APP props===============", controllerProps)
    
    //global APP state 
    // const [appState, setAppState] = useState({
            
        
    //     lastStory: lastStory,
    //     secondToLastStory: secondToLastStory,
    //     thirdToLastStory: thirdToLastStory,
    //     fourthToLastStory: fourthToLastStory
        
    // })

    // const [userState, setUserState] = useState({

    //     loggedInStatus: "NOT_LOGGED_IN",
    //     emailStatus: "EMAIL_NOT_VERIFIED",
    //     user: {},

    // })
    
    // const [openSideMenu, setOpenSideMenu] = useState(false);
    // const [loginClicked, setLoginClicked] = useState(false)

    

    
    
   
    const theme = {
        
        white:        "#ffffff",
        offWhite:     "#f4f4f4",
        lightBlue:    "#56c5cc",  //(86,197,204)
        pink:         "#f14f7b",  //(241,79,123)
        orange:       "#f7aa1c",  //(247,170,28)
        darkBlue:     "#000321",  //(0,3,33)
        blueGray:     "#0E2021",
        black:        "#181818"   //(0,0,0)
    };
    

    const MainContainer = styled.div`
    
        

        display: grid;
        width: 100vw;
        height: 100vh;

        background-image: url(${bg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom left;
    
    
    
    `;

    const SocialContainer = styled.div`
    
        display: grid;
        grid-gap: 10px;
        grid-template-columns: min-content min-content min-content min-content;
        grid-template-rows: min-content;

    
    `;


    const socialMediaStyles = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    };

    
    // const handleSuccessfulAuth = data => {
        
    //     // setAppState({
    //     //     ...appState,
    //     //     loggedInStatus: "LOGGED_IN",
    //     //     user: data.user
    //     // })

    //     setUserState({
    //         ...userState,
    //         loggedInStatus: "LOGGED_IN",
    //         user: data.user
    //     })

    // }

    // const handleLogOutClick = () => {

    //     axios.delete("/logout", {
          
    //         data: { 
    //           user: "user"
    //         }
              
    //     },{withCredentials: true}).then(response => {

    //             console.log(response)

    //             //Server says logged_in but appState says not logged in
                
                    
    //             setUserState({
    //                 ...userState,
    //                 loggedInStatus: "NOT_LOGGED_IN",
    //                 user: {}
    //              })
                    
                
               
                
            
    //     }).catch(error => {
                
    //             console.log("Logout? error", error)
    //     })



        



    // }


    
    
    
    
    // // reference for lookupSection to scroll to, when click on nav link
    // const LookupScrollToRef = useRef();
    // const LookupInputRef = useRef();

    // const section2ScrollToRef = useRef();
    
    // // when click on nav link, scrolls to LookupScrollToRef
    // const scrollToRef = (ref) => {

    //     console.log("in scrollToRef ")
    //     console.log(ref)
    //     console.log(LookupInputRef)

    //     var scrollOptions = {
    //         left: 0,
    //         top: ref.current.offsetTop,
    //         behavior: 'smooth'
    //       }
        
    //       window.scrollTo(scrollOptions);
    //     //window.scrollTo(0, ref.current.offsetTop)

        
    //     setOpenSideMenu(false)
    //     setTimeout(function () {
    //         LookupInputRef.current.focus();
    //     }, 420);
    //     //LookupInputRef.current.focus();

    // }

    // const scrollToRef2 = (ref) => {

    //     console.log("IN SCROLLTOREF2")
    //     console.log(ref)



    //     var scrollOptions = {
    //         left: 0,
    //         top: ref.current.offsetTop,
    //         behavior: 'smooth'
    //       }
        
    //       window.scrollTo(scrollOptions);
        
    //     //window.scrollTo(0, ref.current.offsetTop)

        
       
    // }
        
    
    
    // const executeScrollForLookupSection = useCallback(() => {

    //     console.log("in executeScrollForLookupSection ")
        
    //     scrollToRef(LookupScrollToRef)
    //     setOpenSideMenu(false)
    // })
    
    // const executeScrollForSection2 = useCallback(() => {
        
    //     scrollToRef2(section2ScrollToRef)
    //     setOpenSideMenu(false)
    // })

    // const executeScrollForLookupSectionTwo = () => {
        
    //     scrollToRef2(section2ScrollToRef)
    //     setOpenSideMenu(false)
    // }

    

    
    // useEffect(() => {

    //     //const mode = process.env.NODE_ENV == "development" ? "http://127.0.0.1:3000" : "https://www.floiridablaze.io"
        
    //     console.log("==============APP useEffects===============")
    //     if (current_user != null){


    //         console.log("currentUser exists, so bypass session logged_in call")
    //         // setAppState({
    //         //     ...appState,
    //         //     loggedInStatus: "LOGGED_IN",
    //         //     user: current_user,
    //         //     emailStatus: current_user.email_confirmed == "true" ? "EMAIL_VERIFIED" : "EMAIL_NOT_VERIFIED"
    //         // })

    //         setUserState({
    //             ...userState,
    //             loggedInStatus: "LOGGED_IN",
    //             user: current_user,
    //             emailStatus: current_user.email_confirmed == "true" ? "EMAIL_VERIFIED" : "EMAIL_NOT_VERIFIED"
    //         })


    //     }else{
        
        
        
    //         // console.log("currentUser did not exist, so run logged_in call from server")

    //         // axios.get("/logged_in", {withCredentials: true})
    //         // .then(response => {

    //         //     //Server says logged_in but appState says not logged in
                
                    
    //         //     setAppState({
    //         //         ...appState,
    //         //         loggedInStatus: response.data.logged_in && appState.loggedInStatus == "NOT_LOGGED_IN" ? "LOGGED_IN": "NOT_LOGGED_IN",
    //         //         user: response.data.user,
    //         //         emailStatus: response.data.user && response.data.user.email_confirmed == "true" ? "EMAIL_VERIFIED" : "EMAIL_NOT_VERIFIED"
    //         //     })
                    
                
                    
    //         //     //Server says not logged in but appState says logged_in
    //         //     //}else if (!response.data.logged_in && appState.loggedInStatus == "LOGGED_IN"){
                    
    //         //     //    setAppState({
    //         //     //        ...appState,
    //         //     //        loggedInStatus: "NOT_LOGGED_IN",
    //         //     //        user: {}
    //         //     //    })

    //         //     //    console.log("WTTFFF", "BBBBBBB")

                

    //         //     //Check if email has been confirmed
    //         //     //if (response.data.user && response.data.user.email_confirmed == true){
                    
    //         //     //    setAppState({
    //         //     //        ...appState,
                       
    //         //   //          emailStatus: "EMAIL_VERIFIED"
    //         //     //    })

    //         //     //    console.log("WTTFFF", "cccccc")
                    
    //         //    // }

                
            
    //         // })
    //         // .catch(error => console.log("Logged in? error", error))

    //     }
    // },[]);

    
    
    
    return (

        <ThemeProvider theme={theme}>
        
            <GlobalStyles/>
            
            <MainContainer>
                
                <SocialContainer>
                    <TwitterIcon size={32} round={true} />
                    <FacebookShareButton url={"https://cwa-union.org/"} quote={"sample quote"} hashtag={"#cwa"}>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <EmailIcon size={32} round={true} />
                    <WhatsappIcon size={32} round={true} />
                </SocialContainer>
                
                
                
            </MainContainer>
         
        </ThemeProvider>
        
    );
}


// export default props => <App {...props} />;
export default App;






//             <Header 
        //                 userState={userState} 
        //                 handleLogOutClick={handleLogOutClick}
        //                 setLoginClicked={setLoginClicked}
        //                 openSideMenu={openSideMenu}
        //                 setOpenSideMenu={setOpenSideMenu}
        //                 executeScrollForSection2={executeScrollForSection2}
        //                 executeScrollForLookupSection={executeScrollForLookupSection} 
        //             />
                    
        //             <Login handleSuccessfulAuth={handleSuccessfulAuth} setLoginClicked={setLoginClicked} loginClicked={loginClicked} />
                
        //         <Switch>
        //             <Route exact path="/" render={ () => <Home handleSuccessfulAuth={handleSuccessfulAuth} loginClicked={loginClicked} setLoginClicked={setLoginClicked} lastStory={lastStory} secondToLastStory={secondToLastStory} thirdToLastStory={thirdToLastStory} fourthToLastStory={fourthToLastStory} />}/>
        //             {/* <Route path="/login" render={ props => <Login {...props} handleSuccessfulAuth={handleSuccessfulAuth} />} /> */}
        //             {/* <Route path="/signup" render={ props => <Signup {...props} handleSuccessfulAuth={handleSuccessfulAuth} />} /> */}
        //             <Route path="/forgot" render={ props => <Forgot {...props}  />} /> 
        //             <Route path="/resend" render={ props => <Resend {...props}  />} />                   
        //             <Route exact path="/change_pw/:token" render={ props => <Change {...props}  />} />
        //             <Route path="/edit" render={ props => <Edit {...props} user={userState.user}/>} />
        //             <Route exact path="/blog/:id" render = { props => <Article {...props} userState={userState} artData={artData}/> } />
        //         </Switch>
        //         <PayPalScriptProvider options={{ "client-id": "ASxYc6NaKEnx3gEKnVzv60MvRjC2tM4F-CFZgepkJwnAL1Cr9c3MfgRtr9OCMqOa-egcSu3dEpee205c" }}>
        //             <Act ref={{LookupScrollToRef: LookupScrollToRef, LookupInputRef: LookupInputRef}} executeScrollForSection2={executeScrollForSection2} userState={userState} setLoginClicked={setLoginClicked} setOpenSideMenu={setOpenSideMenu} executeScrollForLookupSection={executeScrollForLookupSection} executeScrollForLookupSectionTwo={executeScrollForLookupSectionTwo} />
        //         </PayPalScriptProvider>
        //         <SignupSection ref={{section2ScrollToRef: section2ScrollToRef}} handleSuccessfulAuth={handleSuccessfulAuth} />
        //         {/* <Shop/> */}
        //         <Footer/>

        //         {/* <LookupSection appState={appState} ref={{LookupScrollToRef: LookupScrollToRef, LookupInputRef: LookupInputRef}}/>
        //         <Section2 ref={{section2ScrollToRef: section2ScrollToRef}} stories={appState.stories} appState={appState} setAppState={setAppState} handleSuccessfulAuth={handleSuccessfulAuth} />
        //        <Footer/> */}
                
        //     </Router>