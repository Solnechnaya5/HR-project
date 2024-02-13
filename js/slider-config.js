document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 2,
        perMove:2,
        speed: 3000,
        // autoplay:true,
        breakpoints: {
            640: {
                perPage: 1,
            },
    },
    classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows testimonials-slider_arrows',
		arrow : 'splide__arrow testimonials-slider_arrow',
		prev  : 'splide__arrow--prev estimonials-slider_arrow-prev',
		next  : 'splide__arrow--next estimonials-slider_arrow-next',

		// Add classes for pagination.
		pagination: 'splide__pagination testimonials-slider_pagination-container', // container
		page      : 'splide__pagination__page testimonials-slider_pagination-page', // each button
  },
});
    splide.mount();
    
  } );