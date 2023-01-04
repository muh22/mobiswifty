$(document).ready(function() {
    var redirectBoolean = false;
    $("#signup_submit").click(function(e) {
        if (validate()) {
            //e.preventDefault();
            console.log("register_submit clicked");
            //=================================prepare data====================
            var middleName = $("#middleName").val();
            var lastName = $("#lastName").val();
            var firstName = $("#firstName").val();
            var password = $("#loginPassword").val();
            var userEmail = $("#emailAddress").val();
            var confirmPassword = $("#confirmPassword").val();
            var converPass = password;

            /*encryUsingBecrypt(converPass, function(result) {converPass = result;});*/

            console.log("encrypted password" + converPass);
            var data = {};
            data.user_id = "USER-1";
            data.email = userEmail;
            data.first_name = firstName;
            data.middle_name = middleName;
            data.last_name = lastName;
            data.password = password;
            data.signup_date = "";
            data.type = "user";
            data.wallet_id = "";
            data.date_of_birth = "";
            data.profile_image = "";
            data.local_id_card = "";
            data.passport = "";
            data.status = "";

            alert("Json Data" + data.email);
            addNewUserCallback(data, function(result) {
                alert("Result:" + JSON.stringify(result));
            });
            //alert("Json Data" + data.email);

            /*axios
                .post("api/v1/users/signup", data)
                .then(function(response) {
                    //resultElement.innerHTML = generateSuccessHTMLOutput(response);
                    alert("Server Response:" + JSON.stringify(response));
                })
                .catch(function(error) {
                    //resultElement.innerHTML = generateErrorHTMLOutput(error);
                    alert("Server Response:" + JSON.stringify(error));
                });*/
            //let response = await addNewUser(data);
            // alert("Server Response:" + response);
            /*  addNewUser2(data, function(result) {
                                                            alert("Server Response:" + JSON.stringify(result));
                                                        });*/

            /*  $.post("api/v1/users/signup", data, function(data, textStatus, jqXHR) {
                                                          //data - response from server
                                                          alert(textStatus);
                                                      }).fail(function(jqXHR, textStatus, errorThrown) {
                                                          alert(textStatus);
                                                      });*/



            /* addNewUser(data).then(serverResult => {
                                                               //console.log(serverResult)
                                                               var convertReturnedValue = JSON.stringify(serverResult);
                                                               alert("Server Response:" + convertReturnedValue);
                                                               window.location.href = "/login";



                                                           })
                                                           .catch(error => {
                                                               //console.log(error)
                                                               alert("Failure Error:" + JSON.stringify(error));
                                                               window.location.href = "/login";
                                                           });*/

            // alert("Testing Code CLient 1");
        } else {
            alert("Validation Error: Fail to validate");
            document.location.href = "/login";
        }


        //alert("Testing Code CLient 2");
        //=========================1. validate==================
        //hashing and reserved words
        //=======================================================
        //var username = document.getElementById("uname").value;
        //var password = document.getElementById("password").value;

        // ===============how================
        /*$.ajax({
                                                                                                                                                                                                                                                dataType: 'jsonp',
                                                                                                                                                                                                                                                data: "data=yeah",                      
                                                                                                                                                                                                                                                jsonp: 'callback',
                                                                                                                                                                                                                                                url: 'http://localhost:8000/gilbert?callback=?',                        
                                                                                                                                                                                                                                                success: function(data) {
                                                                                                                                                                                                                                                    console.log('success');
                                                                                                                                                                                                                                                    console.log(JSON.stringify(data));
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            });*/

        /*$.ajax('http://localhost:3000/endpoint', {
                                                                                                                                                                                                                                        type: 'POST',
                                                                                                                   if (redirectBoolean) {
                                                                                                                        window.location.href = "http://localhost:4000/index.html";
                                                                                                                    }                                                                                                                     data: JSON.stringify(data),
                                                                                                                                                                                                                                        contentType: 'application/json',
                                                                                                                                                                                                                                        success: function() { console.log('success');},
                                                                                                                                                                                                                                        error  : function() { console.log('error');}
                                                                                                                                                                                                                                });*/
    });

    //================================================Join community button=================================

    $("#confirm").click(function(e) {
        //e.preventDefault();
        console.log("Listening to # confirm!");
        console.log("Confirm clicked");

        var $userid = $("#userid1");
        var $userchoice = $("#userchoice1");

        /*
                                                                                                                                                                                                                                                    if (response.error) {
                                                                                                                                                                                                                                                        alert(response.message);
                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                        window.location.href = '/home/'+response.userId;
                                                                                                                                                                                                                                                    }*/
        // ===============how================
        /*$.ajax({
                                                                                                                                                                                                                                                dataType: 'jsonp',
                                                                                                                                                                                                                                                data: "data=yeah",                      
                                                                                                                                                                                                                                                jsonp: 'callback',
                                                                                                                                                                                                                                                url: 'http://localhost:8000/gilbert?callback=?',                        
                                                                                                                                                                                                                                                success: function(data) {
                                                                                                                                                                                                                                                    console.log('success');
                                                                                                                                                                                                                                                    console.log(JSON.stringify(data));
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            });*/

        var data = {};
        data.userid = $userid.val();
        data.userchoice = $userchoice.val();

        $.ajax({
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            url: "/checkingconfirmation",
            success: function() {
                console.log("success");
                //console.log(JSON.stringify(data));
            },
            error: function(error) {
                console.log("Error " + error);
            }
        });
        /*$.ajax('http://localhost:3000/endpoint', {
                                                                                                                                                                                                                                        type: 'POST',
                                                                                                                                                                                                                                        data: JSON.stringify(data),
                                                                                                                                                                                                                                        contentType: 'application/json',
                                                                                                                                                                                                                                        success: function() { console.log('success');},
                                                                                                                                                                                                                                        error  : function() { console.log('error');}
                                                                                                                                                                                                                                });*/
    });
    //==============================================================================

    //================================================confirmation button=================================

    //======================================cancel===========================

    $("#cancel").click(function(e) {
        console.log("Cancel clicked");
        var $userid2 = $("#userid2");
        var $userchoice2 = $("#userchoice2");

        /*
                                                                                                                                                                                                                                                    if (response.error) {
                                                                                                                                                                                                                                                        alert(response.message);
                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                        window.location.href = '/home/'+response.userId;
                                                                                                                                                                                                                                                    }*/
        // ===============how================
        /*$.ajax({
                                                                                                                                                                                                                                                dataType: 'jsonp',
                                                                                                                                                                                                                                                data: "data=yeah",                      
                                                                                                                                                                                                                                                jsonp: 'callback',
                                                                                                                                                                                                                                                url: 'http://localhost:8000/gilbert?callback=?',                        
                                                                                                                                                                                                                                                success: function(data) {
                                                                                                                                                                                                                                                    console.log('success');
                                                                                                                                                                                                                                                    console.log(JSON.stringify(data));
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            });*/

        var data = {};
        data.userid = $userid2.val();
        data.userchoice = $userchoice2.val();

        $.ajax({
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            url: "/cancel",
            success: function() {
                console.log("success");
                //console.log(JSON.stringify(data));
            },
            error: function(error) {
                console.log(error);
            }
        });
        /*$.ajax('http://localhost:3000/endpoint', {
                                                                                                                                                                                                                                        type: 'POST',
                                                                                                                                                                                                                                        data: JSON.stringify(data),
                                                                                                                                                                                                                                        contentType: 'application/json',
                                                                                                                                                                                                                                        success: function() { console.log('success');},
                                                                                                                                                                                                                                        error  : function() { console.log('error');}
                                                                                                                                                                                                                                });*/
    });

    //============================redirection=======================================================
    /*
                                                                                                          function pageRedirect() {
                                                                                                                  window.location.replace("https://www.fseteamrwanda.com/");
                                                                                                                  window.location.href="page_url"
                                                                                                              } 
                                                                                                          //=======================================================================================
                                                                                                          */

    /*
                                                                                                          //===============loading from another script============
                                                                                                          $.getScript('myscript.js', function() {
                                                                                                            console.debug('Script loaded.');
                                                                                                          });
                                                                                                          */
});

function myFunction() {
    //alert("Redirect Loading...")
    window.location.replace("http://localhost:4000/signup-2.html?");
    //window.location.href = 'http://localhost:4000/index.html';
    //location.replace("https://www.w3schools.com")
}

function redirectToIndex() {
    setTimeout(function() {
        window.location.href = "http://localhost:4000/index.html";
    }, 1000);
}

//window.location.href = "index.html";
/*
function doTheThing() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: {
                key: 'value',
            },
            success: function (data) {
                resolve(data)
            },
            error: function (error) {
                reject(error)
            },
        })
    })
}*/
/*
function addNewUser(data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            //datatype: "json",
            data: JSON.stringify(data),
            timeout: 30000,
            url: "api/v1/users/signup",
            success: function(response) {
                resolve(response);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}
*/
function addNewUser2(data, callback) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        //datatype: "json",
        data: JSON.stringify(data),
        url: "api/v1/users/signup",
        success: function(response) {
            callback(response);
        },
        error: function(error) {
            callback(error);
        }
    });
}


function addNewUserCallback(data, callback) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        datatype: "json",
        timeout: 3000,
        data: JSON.stringify(data),
        url: "http://localhost:8330/moniremit/users/register",
        success: callback
            /*function (response) {
                //resolve(response);
                var convertReturnedValue = JSON.stringify(response);
                alert("Server Response:" + convertReturnedValue);
                window.location.href = "/login";
                //var convertReturnedValue = JSON.stringify(response);
                //alert("Server Response:" + convertReturnedValue);
                //window.location.href = "/login";
            }*/
            ,
        error: callback
            /*function(error) {
                alert("Failure Error:" + JSON.stringify(error));
                window.location.href = "/login";
                //reject(error);
                //console.log(error)
                // alert("Failure Error:" + JSON.stringify(error));
                // window.location.href = "/login";
            }*/
    });

}