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
                fresherControl.loadTblMain(data);
            },
            error: () => {
                console.log('error');
            }
        });

    }

}
var fresherControl = {
    loadTblMain: (data) => {
        var get = "";
        $.each(data, function () {
            get += "<tr>";
            get += "<td>" + this['Id'] + "</td>"
            get += "<td>" + this['name'] + "</td>"
            get += "<td>" + this['DOB'] + "</td>"
            get += "<td>" + this['Gender'] + "</td>"
            get += "</tr>"
        });
        $('tbody').html(get);
    }
}