// Put your application javascript here
"use strict";

var localizationFormSubmit = function (e) {
    e.target.form.submit();
}

document.querySelectorAll('.shopify-localization-form select').forEach(function(element) {
    element.addEventListener('change', localizationFormSubmit);
});

var selectCallback = function(variant, selector){
    if(variant && variant.available){
        $('#add-to-cart').removeClass('disabled').removeAttr('disabled');
        // Enable the Add to Cart button
        $('.options .price').html('<strong>'+Shopify.formatMoney(variant.price, "{{shop.money_with_currency_format}}")+'</strong>');
        // Show price of the currently selected variant
    }
    else{
        $('#add-to-cart').addClass('disabled').attr('disabled', 'disabled');
        // Disable the Add to Cart button
        $('.options .price').text("Sold Out!");
        // Swap price with a 'Sold Out' message
    }
}

$('.js-load-more').on('click', function(){
    var $this =$(this),
        totalPages = parseInt($('[data-all-pages]').val()),
        currentPage = parseInt($('[data-this-page]').val()),
        datacollurl = $('[data-coll-url]').val();;
    $this.attr('disabled', true);
    $this.find('[load-more-text]').addClass('hide');
    $this.find('[loader]').removeClass('hide');
    var nextUrl = $('[data-next-link]').val();
    var current_page_new = currentPage + 1;
    var next_coll = currentPage + 2;
    //alert(current_page_new)
    //return false;
    $.ajax({
        url: nextUrl,
        type: 'GET',
        dataType: 'html',
        success: function(responseHTML){
            $('[data-next-link]').val(datacollurl + "?page="+next_coll);
            $('[data-this-page]').val(current_page_new);
            $('.articles__wrapper_container').append($(responseHTML).find('.articles__wrapper_container').html());
        },
        complete: function() {
            if(current_page_new < totalPages) {
                $this.attr('disabled', false); $this.find('[load-more-text]').removeClass('hide'); $this.find('[loader]').addClass('hide');
            }
            if(current_page_new >= totalPages) {
                $this.find('[load-more-text]').text('Posts Finished').removeClass('hide'); $this.find('[loader]').addClass('hide');
            }
        }
    })
});