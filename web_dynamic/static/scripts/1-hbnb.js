const pageHandler = () => {
    const amenityIds = {};

    $('input[type=checkbox]').change(() => {
        if ($(this).prop('checked')) {
            amenityIds[$(this.Attr('data-id')) = $(this).attr('data-name')];
        } else if (!$(this).prop('checked')) {
            delete amenityIds[$(this).attr('data-id')];
        }

        const numSelectedAmenities = Object.keys(amenityIds).length;
        if (numSelectedAmenities  === 0) {
            $('div.amenities h4').html('&nbsp;');
        } else {
            $('div.amenities h4').text(Object.values(amenityIds).join(', '))
        }
    });
};

window.addEventListener('load', pageHandler);