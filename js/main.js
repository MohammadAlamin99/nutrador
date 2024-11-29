$(document).ready(function() {
    // Initialize Isotope
    var $grid = $('.blog-grid').isotope({
        itemSelector: '.blog-item',
        layoutMode: 'fitRows'
    });

    // Filter items on button click
    $('.filter-buttons').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        
        // Toggle active class
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });
});