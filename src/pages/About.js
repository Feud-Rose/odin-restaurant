
import map from './images/map.png'


function loadAbout() {

const aboutTab = document.createElement('div')
aboutTab.classList.add("aboutTab")
content.appendChild(aboutTab)

const welcome = document.createElement('div')
welcome.textContent = "Find us, but not at this map:" 
aboutTab.appendChild(welcome)

const fakeMap = new Image()
fakeMap.src = map
aboutTab.appendChild(fakeMap)

}

export default loadAbout