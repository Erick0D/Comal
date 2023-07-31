const menuIcon = document.querySelector(".mobile-menu-toggle");
const navbar = document.querySelector(".menu-wrap");

menuIcon.addEventListener("click", ()=>{
  navbar.classList.toggle("show-hide");
})

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 8,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.menu-wrap a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 1500,
	delay: 100,
})
sr.reveal(`.home-img, .contact-description, .contact-content, .contact-info, .section-title`)
sr.reveal(`.home-data`, { origin: 'bottom' })
sr.reveal(`.about-data`, { origin: 'left' })
sr.reveal(`.about-img`, { origin: 'right' })
sr.reveal(`.menu-card, .button`,{interval: 100})