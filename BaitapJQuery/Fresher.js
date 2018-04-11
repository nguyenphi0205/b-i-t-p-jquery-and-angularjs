$(document).ready(function () {
    fresher.init();
});

var fresher = {

    name: "fresher",
    init: () => {
        fresher.getAll();

    },
    getAll: () => {
        var api = "data.json";
        $.ajax({
            url: api,
            dataType: 'json',
            type: 'GET',
            success: (data) => {
                // console.log(data);
                var get = "";
                $.each(data, function () {
                    // get +=this['Id']+"</br>";
                    // get +=this['name']+"</br>";
               
                    get += "<tr>";
                    get += "<td>" + this['Id'] + "</td>"
                    get += "<td>" + this['name'] + "</td>"
                    get += "<td>" + this['DOB'] + "</td>"
                    get += "<td>" + this['Gender'] + "</td>"
                    get += "</tr>"
                });
                $('tbody').html(get);
               // fresherControl.loadTblMain(data);
            },
            error: () => {
                console.log('error');
            }
        });

    }

}
var fresherControl = {
    loadTblMain: (data) => {
        var tblMain = $('#tblMain');
        tblMain.empty();
        tblMain.append("");
        if (typeof tblMain !== 'undefined' && data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                tblMain.append("<tbody><tr><td>" + data[i].Id + "</td><td>" + data[i].name + "</td><td>" + data[i].DOB + "</td><td>" + data[i].Gender + "</td></tr></tbody>");
            }
        }
        else {
            console.log('error');
        }
    }
}