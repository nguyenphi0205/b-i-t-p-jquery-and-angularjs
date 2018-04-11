$(document).ready(function () {

});

var fresher = {

    name: "fresher",
    init:  ()=> {
       fresher.getAll();

    },
    getAll : ()=>{
        var api="C:/Users/training/Desktop/BaitapJQuery/data.json";
        $.ajax({
            type:'GET',
            url:api

        });
    }

}