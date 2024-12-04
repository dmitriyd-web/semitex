document.addEventListener('DOMContentLoaded', function(){
	//var lazyLoadInstance = new LazyLoad({});

	const header = document.querySelector("header")

	window.addEventListener('scroll', function () {
		if (window.scrollY > 100) {
			header.classList.add("scroll")
		} else {
			header.classList.remove("scroll")
		}
	})

	//	mobile menu

	const navbarToggler = document.querySelector(".navbar-toggler")
	const navbar = document.querySelector(".navbar")

	navbarToggler.addEventListener("click", () => {
		navbarToggler.classList.toggle("open")
		navbar.classList.toggle("open")
	})

	//	slider

	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 5
			}
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		}
	});

	//	accordion

	$(".accordion__elem_title").on("click", function(){
		if ( $(this).parent().hasClass("open") ) {
			$(this).parent().removeClass("open")
		}	else {
			$(".accordion__elem").removeClass("open")
			$(this).parent().addClass("open")
		}
	})

	//	animation
	
	if ( window.innerWidth >= 1200 ) {

		const showItems = () => {
			$(".primary-content, .primary-order").addClass("show")
		}

		setTimeout(showItems, 100);

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smoot: 1.5,
			effects: true
		})
		
		let itemsBottom = gsap.utils.toArray('.why .why-title, .why .why-list .why-list__item, .brands .row, .scheme .scheme-title, .answers h2, .accordion')

		itemsBottom.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-950',
					end: '-300',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsLeft = gsap.utils.toArray('.scheme-list__item-1, .scheme-list__item-2, .scheme-list__item-3')

		itemsLeft.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-600',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsRight = gsap.utils.toArray('.scheme-list__item-4, .scheme-list__item-5, .scheme-list__item-6')

		itemsRight.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-600',
					scrub: true,
					once: true
				}
			})
		})
		
	}
})