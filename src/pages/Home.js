export default loadHome


function loadHome() {

const homeTab = document.createElement('div')
homeTab.classList.add("homeTab")
content.appendChild(homeTab)

const welcome = document.createElement('div')
welcome.textContent = "Welcome too Bobby's Bistro" 
homeTab.appendChild(welcome)

const welcomeP = document.createElement('p')
welcomeP.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
homeTab.appendChild(welcomeP)

}
