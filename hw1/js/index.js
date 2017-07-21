$('button').on('click', function() {
    var m = $('#mass').val()
    mm = m / 1000
        // speed of light = 299,792,458 (m/s)
    e = mm * 299792458 * 299792458
    $('#result').val(e)
})