//var firstAPI = "8a07d27c762a4515b4eb63220b517e02";
var secondAPI = "240f675c9ad44d34a96f35d6cb97542d";
//var thirdAPI = "1c3d08b06c8e4d0189ef89e62b169eba";
var fourthAPI = "caaf06b217bb42b8987e7cafc76673eb";
var fifthAPI = "b2f27322a1f347379d89b490ed9528e9";
var sixthAPI = "81d2fb7ce8bb447e8d0e372ccf4d79d0";
var seventhAPI = "5dc571ad8c4442e3be0ebea89c223437";
var eighthAPI = "144b024c11254237bd7586886f98dfec";
var ninth = "28790576903146fba532510e390588fd";
var tenth = "86f05ba6bcc64fc2880897e48d47d039";
var eleAPI = "f68333e004db49c2866855f6269a4b25";


fetch("https://api.spoonacular.com/food/ingredients/autocomplete?apiKey="+ fourthAPI)
    .then(response => response.json())
    .then( data => {
        console.log(data)
        function matchCustom(params, data) {
            // If there are no search terms, return all of the data
            if ($.trim(params.term) === '') {
              return data;
            }
        
            // Do not display the item if there is no 'text' property
            if (typeof data.text === 'undefined') {
              return null;
            }
        
            // `params.term` should be the term that is used for searching
            // `data.text` is the text that is displayed for the data object
            if (data.text.indexOf(params.term) > -1) {
              var modifiedData = $.extend({}, data, true);
              modifiedData.text += ' (matched)';
        
              // You can return modified objects from here
              // This includes matching the `children` how you want in nested data sets
              return modifiedData;
            }
        
            // Return `null` if the term should not be displayed
            return null;
        }
        
        $(".js-example-matcher").select2({
          matcher: matchCustom
        });
     })
    