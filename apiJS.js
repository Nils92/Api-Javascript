
function buttonClickGet() {
  let réponse = document.getElementById("zone_réponse");
  let siren = document.getElementById('siren').value;
  let Apikey = document.getElementById('clef').value;
  $.ajax({
    url: 'https://fichiers.jefacture.com/comapi/invoice/'+ siren +'/AP/transfer',
    headers: { 'X-SOFTWARE-ID': '3731e96e-dafd-4e6e-8e41-66d7e486f8ee', 'X-API-KEY' : Apikey}
   });
  }



  // .then((response) => {
  //     console.log('Json: ', response.status);
  //     const result = { data: response.json(), status: response.status };
  //     réponse.innerHTML(result);
  //   })
  // .catch(error => {
  //     réponse.innerHTML("<p>Error :" + response.status + "<p/>" )
  //   });


  // var Callback = function(data){
  //   console.log(data)
  // }
  //
  // function buttonClickGet() {
  //   var url = "https://fichiers.jefacture.com/comapi/invoice/447737313/AP/transfer";
  //   $.get(url ,Callback).done(function() {
  //     type: "GET",
  //     headers: {"X-SOFTWARE-ID": "3731e96e-dafd-4e6e-8e41-66d7e486f8ee", "X-API-KEY" :  "b3def773-4d60-d3cb-4cd9-6aafbe75d431"}
  //   })
  //   .fail(function(){
  //     alert("error");
  //   })
  //   .always(function(){
  //
  //   });
  // }
