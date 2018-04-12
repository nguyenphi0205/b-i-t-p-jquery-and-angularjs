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
            fresherControl.loadTblMain(data);
            },
            error: () => {
                console.log('error');
            }
        });
    },
    Search:()=>{
    $('#txt-search').keyup(function(data){
            var searchField = $(this).val();
			if(searchField === '')  {
				fresherControl.loadTblMain(data);
				return;
			}
            var regex = new RegExp(searchField, "i");
            var output = '';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.name.match(regex) != -1) || (val.Gender.match(regex) != -1)) {
			   slipString=getYear-this['DOB'].substring(6, 10);
            output += "<tr>";
            output += "<td>" + this['Id'] + "</td>"
            output += "<td>" + this['name'] + "</td>"
            output += "<td>" + this['DOB'] + "</td>"
            output += "<td>" + this['Gender'] + "</td>"
            output +="<td>" +slipString+"</td>"
            output += "</tr>"
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('tbody').html(get);
        });
    }
}
var fresherControl = {
    loadTblMain: (data) => {
        var get = "";
        var slipString;
        var date=new Date();
        var getYear=date.getFullYear();
             $.each(data, function () {
       slipString=getYear-this['DOB'].substring(6, 10);
            get += "<tr>";
            get += "<td>" + this['Id'] + "</td>"
            get += "<td>" + this['name'] + "</td>"
            get += "<td>" + this['DOB'] + "</td>"
            get += "<td>" + this['Gender'] + "</td>"
            get +="<td>" +slipString+"</td>"
            get += "</tr>"
        });
        $('tbody').html(get);
      
    }
}