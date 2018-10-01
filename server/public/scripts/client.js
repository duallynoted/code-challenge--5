const messageApp = angular.module('MessageApp', []);

messageApp.controller('HomeController', ['$http', function ($http) {
    self = this;
    self.message = ('Angular sure is sharp.')

    self.getMessages = function () {
        console.log('getMessages working');
        $http({
            method: 'GET',
            url: '/messages',
        }).then(function (response) {
            self.messagesArray = response.data;
            console.log(response.data);
        }).catch(function (error) {
            alert('Error GETTING messages from server!');
            console.log('Error', error);
        });//end GET entries call
    }

    self.addMessage = function (newMessage) {
        console.log('button working');
        $http({
            method: 'POST',
            url: '/messages',
            data: newMessage
        }).then(function (response) {
            console.log('Back from Server with POST', response);
            self.getMessages();
        }).catch(function (error) {
            alert('Unable to add Message: ', error);
            console.log('Error', error);
        });//end POST call             
    }
    self.getMessages();
}]);