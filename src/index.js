console.log("hotdog")
import './style.css'


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


    const home = document.createElement('div')
    home.textContent = "Home"
    navigation.appendChild(home)

    const menu = document.createElement('div')
    menu.textContent = "Menu"
    navigation.appendChild(menu)

    const about = document.createElement('div')
    about.textContent = "About"
    navigation.appendChild(about)



    const frontTab = document.createElement('div')
    frontTab.classList.add("frontTab")
    content.appendChild(frontTab)


  

   
    
    

})()

