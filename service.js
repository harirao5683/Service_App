(function(){

var app=angular.module("WebService");
app.service("HttpServiceInvokeSvc", function($http){
    
    var self=this;
    //this methd calls promise to retrieve data from JSON //
    self.getContacts=function(){                                
    //promise calls for data in JSON and waits until data is ready //
    var promise1=$http.get("http://10.0.0.207:8080/data.json"); 
    //this promise object inturn calls another promise to return the data  to achieve asynchronous functionality// 
    var promise2=promise1.then(function(response){
        
        return response.data;
        
    });
    
    // we will return the promise with data //
    return promise2;
    }
});
})();