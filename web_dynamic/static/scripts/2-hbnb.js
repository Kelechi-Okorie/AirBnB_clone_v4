const endpointHandler = (data) => {
    if (data.status === 'OK') {
        $('#api_status').addClass('available');
    } else {
        $('#api_status').removeClass('available');
    }
};

const pageHandler = () => {
    const amenityIds = {};

    $.ajax('http://54.90.42.30:5001/api/v1/status').done(endpointHandler)

    $('input[type=checkbox]').change(() => {
        if ($(this).prop('checked')) {
            amenityIds[$(this.attr('data-id')) = $(this).attr('data-name')];
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
