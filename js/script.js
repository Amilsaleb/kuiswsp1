function CariData() {

    $('#al-quran').html('');
    $.ajax({
        "url": "https://al-quran-8d642.firebaseio.com/data.json?print=pretty",
        "type": "get",
        "dataType": "json",
        "data": {
            
            "print": "pretty",
            "name": $('#text-cari').val()
        },
        success: function (quran) {
            console.log(quran);

        }
    })
}
