  let réponse = document.getElementById("zone_réponse");
  let siren = document.getElementById('siren').value;
  let Apikey = document.getElementById('clef').value;

function buttonClickGet() {
  fetch('https://fichiers.jefacture.com/comapi/invoice/'+ siren +'/AP/transfer', {
    credentials: 'include',
    headers: { "X-SOFTWARE-ID" : "3731e96e-dafd-4e6e-8e41-66d7e486f8ee", "X-API-KEY" :  Apikey  }
  })
  }
  // .then((response) => {
  //     console.log('Json: ', response.status);
  //     const result = { data: response.json(), status: response.status };
  //     réponse.innerHTML(result);
  //   })
  // .catch(error => {
  //     réponse.innerHTML("<p>Error :" + response.status +<p/> )
  //   });




    