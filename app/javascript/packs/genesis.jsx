// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {createRoot} from 'react-dom/client'



document.addEventListener('DOMContentLoaded', () => {
  
  // used to ass in intital data from rails backend to react front end if need be 
  // const node = document.getElementById('alien_data_dump')
  // const data = JSON.parse(node.getAttribute('data'))

  
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  
  root.render(
    
    //enter data comming into react as a prop
    // <App d={data}/>,
    
    <App/>,
    //document.body.appendChild(document.createElement('div'))
  )

 
})



