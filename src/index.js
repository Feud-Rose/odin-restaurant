console.log("hotdog")
import './style.css'
import loadHome from './pages/Home'

(function loadSite() {
    
    const body = document.querySelector('body')
    const content = document.querySelector("#content")
    
    const banner = document.createElement('div')
    banner.classList.add('banner')
    body.before(banner, content)
   
    const restaurantName = document.createElement('h1')
    restaurantName.textContent = "Bobby's Bistro"
    banner.appendChild(restaurantName) 
    
    const navigation = document.createElement('div')
    navigation.classList.add('navigation')
    banner.appendChild(navigation)

    const homeSelect = document.createElement('div')
    homeSelect.textContent = "Home"
    homeSelect.classList.add("active")
    navigation.appendChild(homeSelect)

    const menuSelect = document.createElement('div')
    menuSelect.classList.add("inactive")
    menuSelect.textContent = "Menu"
    navigation.appendChild(menuSelect)

    const aboutSelect = document.createElement('div')
    aboutSelect.textContent = "About"
    aboutSelect.classList.add("inactive")
    navigation.appendChild(aboutSelect)

    navigation.addEventListener('click', (e) => {
            console.log(e)
            let target = e.textContent
            /* 
            if Menu load Menu.js
            if About load About.js
            
            */

    })



    loadHome()

})()



