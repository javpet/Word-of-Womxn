const sections = document.querySelectorAll('section')
const bodyTag = document.querySelector("body")

const addMovement = function() {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + window.innerHeight / 2

  //   Let's find the middle of each section
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + section.offsetHeight / 2

    //     How far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection

    //    pick the elements to parallax
    const image = section.querySelector('img')
    const contentTag = section.querySelector('div')

    //     weight down this distance
    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2
    
//     for all the even sections rotate the other way
    if(index % 2 == 1) {
      rotation = rotation * - 1
    }

    image.style.transform = `rotate(${rotation}deg)`
    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`
    
//     check the background 
    if(distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background")
       bodyTag.style.backgroundColor = dataBackground
       }
  })
}

addMovement()

document.addEventListener('scroll', function() {
  addMovement()
})

window.addEventListener('resize', function() {
  addMovement()
})
