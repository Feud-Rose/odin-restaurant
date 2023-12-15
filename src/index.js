import './style.css'
import loadHome from './pages/Home'
import loadAbout from './pages/About'
import loadMenu from './pages/Menu'

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
           
            

      /* Create separate module too handle this */
            if(target[0] == "aboutBtn"){
                content.textContent= ""
                aboutSelect.classList.remove("inactive")
                aboutSelect.classList.add("active")
                if (homeSelect.classList[1] == "active"){
                    homeSelect.classList.remove("active")
                    homeSelect.classList.add("inactive")
                }
                else if (aboutSelect.classList[1] == "active"){
                    menuSelect.classList.remove("active")
                    menuSelect.classList.add("inactive")
                }
                loadAbout()
            }
            else if(target[0] == "menuBtn"){
                content.textContent= ""
                menuSelect.classList.remove("inactive")
                menuSelect.classList.add("active")
                if (homeSelect.classList[1] == "active"){
                    homeSelect.classList.remove("active")
                    homeSelect.classList.add("inactive")
                }
                else if (aboutSelect.classList[1] == "active"){
                    aboutSelect.classList.remove("active")
                    aboutSelect.classList.add("inactive")
                }
                loadMenu()
            }
            
            else if(target[0] == "homeBtn"){
                content.textContent= ""
                homeSelect.classList.remove("inactive")
                homeSelect.classList.add("active")
                if (menuSelect.classList[1] == "active"){
                    menuSelect.classList.remove("active")
                    menuSelect.classList.add("inactive")
                }
                else if (aboutSelect.classList[1] == "active"){
                    aboutSelect.classList.remove("active")
                    aboutSelect.classList.add("inactive")
                }
                loadHome()
            }
            


            /* 
            
            if Menu load Menu.js
            
            
            */

    })

    loadHome()
    


})()



