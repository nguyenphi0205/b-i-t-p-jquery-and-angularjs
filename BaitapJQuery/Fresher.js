$(document).ready(function () {
    fresher.init();

});

var fresher = {

    name: "fresher",
    init: () => {
        fresher.getAllFresher();


    },
    getAllFresher: () => {
        var api = "data.json";
        $.ajax({
            url: api,
            dataType: 'json',
            type: 'GET',
            success: (data) => {
                fresherView.loadFresherList(data);
            },
            error: () => {
                console.log('error');
            }
        });
    }


}
var fresherView = {
    loadFresherList: (data) => {
        var output = "";
        var slitString;
        var date = new Date();
        var getYear = date.getFullYear();
        var age;
        $.each(data, function () {
            slitString = new Date(this['DOB']).getFullYear();
            age = getYear - slitString;
            output += "<tr id=" + this['Gender'] + ">"
            output += "<td>" + this['Id'] + "</td>"
            output += "<td>" + this['name'] + "</td>"
            output += "<td>" + this['DOB'] + "</td>"
            output += "<td>" + this['Gender'] + "</td>"
            output += "<td>" + age + "</td>"
            output += "</tr>"
        });
        $('tbody').html(output);

    }
}