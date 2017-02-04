
module.exports = function (app, express,request) {

  let router = express.Router();

  router.route('/promise')
    .get((req, res) => {
      let url = 'http://ip.jsontest.com/';
      myPromiseFunction(url)
        .then(function (data) {
          res.send(data);
        }).catch(function (err) {
        console.log('error :: ',err);
        res.send(err);
      })
    });

  function myPromiseFunction(url) {
    return new Promise((resolve,reject) => {
      let data = request.get('http://ip.jsontest.com/',function (err,resp,body) {
        if(err)
          reject(err);
        else {
          resolve(body);
        }
      });
    });
  }
  // Example Callback Method
  function MakeMultipleParallelCalls() {

    API1.Call(data,function(err,data){
      // handle error do my thing
    })
    API2.CALL(data,function (err,data2) {
      // handle error do my thing
    })
    API3.CALL(data2,function (err,data3) {
      // handle error do my thing
    })
    API4.CALL(data3,function (err,data4) {
      // handle error do my thing
    })

  }
// Example Promise Method
  function MakeMultipleParallelCallsPromified() {

    Promise.all([
      API.CALL(),
      API2.CALL(),
      API3.CALL(),
      API4.CALL(),
    ]).then(function ([data, data2, data3, data4]) {

    }).catch(function (err) {
      // Receives first rejection among the Promises
    })
  }

  app.use(router);

};