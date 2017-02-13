(function(){
var app=angular.module("WebService");
app.controller("HttpServiceInvoke",HttpServiceInvoke);  // create a controller //
function HttpServiceInvoke(HttpServiceInvokeSvc){  // call service on controller Dependency Injection //
    var self=this;
    HttpServiceInvokeSvc.getContacts()   // call this method in service to retrieve data  -- returns a promise object//
    // this promise object further waits to save the data to controller variables //
    .then(function(data){
        self.contacts=data;
       
})
}
})();