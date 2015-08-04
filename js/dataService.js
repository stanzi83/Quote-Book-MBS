/**
 * Created by Michele on 7/29/2015.
 */
var app = angular.module('quoteBook');

app.service('newService', function(){
    var quotes = [
        { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse', category: 'motivational'},
        { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill', category: 'motivational'},
        { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein', category: 'thoughtful'},
        { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost', category: 'thoughtful'},
        { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart', category: 'motivational'},
        { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon', category: 'thoughtful'},
        { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis', category: 'thoughtful'}
    ];
    this.getData = function(){
        return quotes;
    };
    this.addData = function(text, author){
        if(text && author){
            quotes.push({text: text, author: author})
        }
    };
    this.removeData = function(text){
        for (var i = 0; i < quotes.length; i++){
            if(quotes[i].text === text){
                quotes.splice(i, 1);
                return
            }
        }
    };






});
