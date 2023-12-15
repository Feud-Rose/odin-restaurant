
import hotdogs from './images/hotdogs.jpg'
import soup from './images/soup.jpg'
import salad from './images/salad.jpg'


function loadMenu() {
    const menuTab = document.createElement('div')
    menuTab.classList.add("menuTab")
    content.appendChild(menuTab)

    const welcome = document.createElement('h2')
    welcome.textContent = "Menu" 
    menuTab.appendChild(welcome)

    const span1 = document.createElement('span')
    menuTab.appendChild.span

    const menuItemFirst = document.createElement('div')
    menuItemFirst.classList.add("menuItemDiv")
    menuTab.appendChild(menuItemFirst)
    const hotdogsImg = new Image()
    hotdogsImg.src = hotdogs
    menuItemFirst.appendChild(hotdogsImg)
    const menuItemFirstHeader = document.createElement('h3')
    menuItemFirstHeader.textContent = "HotDogPlater"
    menuItemFirst.appendChild(menuItemFirstHeader)
    const priceItemSmallFirst = document.createElement('div')
    priceItemSmallFirst.textContent = "6 Dogs --- 6.99"
    menuItemFirst.appendChild(priceItemSmallFirst)
    const priceItemLargeFirst = document.createElement('div')
    priceItemLargeFirst.textContent = "12 Dogs --- 12.99"
    menuItemFirst.appendChild(priceItemLargeFirst)



    const menuItemSecond = document.createElement('div')
    menuItemSecond.classList.add("menuItemDiv")
    menuTab.appendChild(menuItemSecond)
    const soupImg = new Image()
    soupImg.src = soup
    menuItemSecond.appendChild(soupImg)
    const menuItemSecondHeader = document.createElement('h3')
    menuItemSecondHeader.textContent = "Soup"
    menuItemSecond.appendChild(menuItemSecondHeader)
    const priceItemSmallSecond = document.createElement('div')
    priceItemSmallSecond.textContent = "Small --- 4.99"
    menuItemSecond.appendChild(priceItemSmallSecond)
    const priceItemLargeSecond = document.createElement('div')
    priceItemLargeSecond.textContent = "Large --- 7.99"
    menuItemSecond.appendChild(priceItemLargeSecond)

  
    const menuItemThird = document.createElement('div')
    menuItemThird.classList.add("menuItemDiv")
    menuTab.appendChild(menuItemThird)
    const saladImg = new Image()
    saladImg.src = salad
    menuItemThird.appendChild(saladImg)
    const menuItemThirdHeader = document.createElement('h3')
    menuItemThirdHeader.textContent = "Salad"
    menuItemThird.appendChild(menuItemThirdHeader)
    const priceItemSmallThird = document.createElement('div')
    priceItemSmallThird.textContent = "Small --- 5.99"
    menuItemThird.appendChild(priceItemSmallThird)
    const priceItemLargeThird = document.createElement('div')
    priceItemLargeThird.textContent = "Large --- 8.99"
    menuItemThird.appendChild(priceItemLargeThird)

}


export default loadMenu