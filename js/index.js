var form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var fname = document.getElementById('firstname').value;

    console.log(fname);

    var lname = document.getElementById('lastname').value;

    console.log(lname);

    var wemail = document.getElementById('workemail').value;

    console.log(wemail);

    var company = document.getElementById('company').value;

    console.log(company);

    var region = document.getElementById('region').value;

    console.log(region);





})