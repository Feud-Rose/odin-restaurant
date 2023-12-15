console.log("hotdog")
import './style.css'
import loadHome from './pages/Home'
import loadAbout from './pages/About'

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
    homeSelect.classList.add("homeBtn", "active")
    navigation.appendChild(homeSelect)

    const menuSelect = document.createElement('div')
    menuSelect.classList.add("menuBtn", "inactive" )
    menuSelect.textContent = "Menu"
    navigation.appendChild(menuSelect)

    const aboutSelect = document.createElement('div')
    aboutSelect.textContent = "About"
    aboutSelect.classList.add("aboutBtn", "inactive")
    navigation.appendChild(aboutSelect)

    navigation.addEventListener('click', (e) => {
            
            let target = e.target.classList
            console.log(target)
            

      /* Create separate module too handle this */
            if(target[0] == "aboutBtn"){
                content.textContent= ""
                aboutSelect.classList.remove("inactive")
                aboutSelect.classList.add("active")
                if(homeSelect.classList[1] == "active"){
                    homeSelect.classList.remove("active")
                    homeSelect.classList.add("inactive")
                }

                loadAbout()
            }
            

            
            /* 
            
            if Menu load Menu.js
            
            
            */

    })

    loadHome()
    


})()



