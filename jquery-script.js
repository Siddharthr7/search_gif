$(document).ready(function()
{

    //$('h1').text("Hello World!");
    // $('#head1').text("Hello Masood")
    // $('#head2').append(" Fareed");

    // $('.section').html("<h2> My Section </h2>");
    // $('.section').append("<p> Lorem ipsum dummy </p>");

    // $('input[type=password]').css('background-color' , 'red');
    // $('input[type=number]').val(10101);
    // $('input[type=number]').attr('disabled' , true);

    // $('#head2').attr('class' , 'text-primary display-3')

    // $('h1[class=primary]')

    // $('p').nextAll().css('color' , 'red');


    // $('ul').children().css('color' , 'orange');
    // var child = $('ul').children().get(2);
    // console.log(child);
    // $(child).css('color' , 'black');

    // $('ul').addClass('bg-dark')
    // $('ul').removeClass('bg-dark')

   
    // $('.btn').dblclick(function()
    // {
    //    alert($('#txt').val());
    // })


//     /////////////////////////////////////////////////////////////////////////////////////////////////
//     $('.btn').on('click' , function()
//     {
//          var value =  $('#txt').val();
//          $('ul').append('<li>' + value + "</li>");
//          $('#txt').val('');

//     })


    
// $('.circle').click(function()
// {

// var classToApply = '';          
// var classes = $(this).attr('class');
// var splitClasses = classes.split(' ');


// for(i =0; i < splitClasses.length; i++)
// {
//     if(splitClasses[i].includes('bg-'))
//     {
//         classToApply = splitClasses[i];
//     }
// }
// $('body').removeClass();
// $('body').addClass(classToApply);
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(splitClasses);

//     var circle = $(this);


//     if(circle.hasClass('bg-primary') == true)
//     {
      
//         $('body').removeClass('bg-success')
//         $('body').removeClass('bg-info')
//         $('body').removeClass('bg-warning')
//         $('body').removeClass('bg-danger')
//         $('body').addClass('bg-primary');

       
        
//     }
//     else if(circle.hasClass('bg-success') == true)
//     {
//         $('body').removeClass('bg-primary')
//         $('body').removeClass('bg-info')
//         $('body').removeClass('bg-warning')
//         $('body').removeClass('bg-danger')

//         $('body').addClass('bg-success');
//     }
//     else if(circle.hasClass('bg-info') == true)
//     {
//         $('body').removeClass('bg-success')
//         $('body').removeClass('bg-primary')
//         $('body').removeClass('bg-warning')
//         $('body').removeClass('bg-danger')

//         $('body').addClass('bg-info');
//     }
//     else if(circle.hasClass('bg-danger')  == true)
//     {
//         $('body').removeClass('bg-success')
//         $('body').removeClass('bg-info')
//         $('body').removeClass('bg-warning')
//         $('body').removeClass('bg-primary')

//         $('body').addClass('bg-danger');
//     }
//     else if(circle.hasClass('bg-purple')  == true)
//     {
//         $('body').removeClass('bg-success')
//         $('body').removeClass('bg-info')
//         $('body').removeClass('bg-warning')
//         $('body').removeClass('bg-primary')
//         $('body').removeClass('bg-danger')

//         $('body').addClass('bg-purple');
//     }
//     else
//     {
//         $('body').removeClass('bg-purple');
//         $('body').removeClass('bg-success')
//         $('body').removeClass('bg-info')
//         $('body').removeClass('bg-primary')
//         $('body').removeClass('bg-danger')

//         $('body').addClass('bg-warning');
//     }
//})
/////////////////////////////////////////////////////////////////////////////
// var person = {
//     Name: "SIddharth Sonera",
//     Location: "canada",
//     Profession: "Trainer",
//     Speaking : function()
//     {
//         alert(this.person + "is reading");
//     }
// }
// var convertedJson = JSON.stringify(person);
// alert(convertedJson) //serialization
// // person.Speaking();
// // person.Name;

// var json = '{ Name: "Siddharth Sonera" , Location : "Canada" , DOB : 1993}';
// // alert(json);

// var myObject = JSON.parse(json);

// alert(myObject.Name + "" + myObject.Location);
///////////////////////////////////////////////////////////////////////////////////////////




$('#btnClick').click(function()
{

    var value = $('#txtSearch').val();
    
    var apiKey = "ecxLCExAhcnApPyaGKEqLMC9fbNDfUEf";
    var limit = 6;
    var arr = [1, 2, 3, 4, 5];
    $.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${value}&limit=${limit}`, function(response)
    {
        for(var i=0; i < response.data.length; i++){
            
            
            $('#box').append( `<div class="d-flex flex-column"><div align="center"><img src='${response.data[i].images.downsized_large.url}'/>
            <div class="rating-wrap" id="rating_cont_`+i+`">
			<h2>Star Rating</h2>
			<div class="center">
				<fieldset class="rating">
					<input type="radio" id="star_`+i+`_5" name="rating_`+i+`" value="5"/><label for="star_`+i+`_5" class="full" title="Awesome"></label>
					<input type="radio" id="star_`+i+`_4.5" name="rating_`+i+`" value="4.5"/><label for="star_`+i+`_4.5" class="half"></label>
					<input type="radio" id="star_`+i+`_4" name="rating_`+i+`" value="4"/><label for="star_`+i+`_4" class="full"></label>
					<input type="radio" id="star_`+i+`_3.5" name="rating_`+i+`" value="3.5"/><label for="star_`+i+`_3.5" class="half"></label>
					<input type="radio" id="star_`+i+`_3" name="rating_`+i+`" value="3"/><label for="star_`+i+`_3" class="full"></label>
					<input type="radio" id="star_`+i+`_2.5" name="rating_`+i+`" value="2.5"/><label for="star_`+i+`_2.5" class="half"></label>
					<input type="radio" id="star_`+i+`_2" name="rating_`+i+`" value="2"/><label for="star_`+i+`_2" class="full"></label>
					<input type="radio" id="star_`+i+`_1.5" name="rating_`+i+`" value="1.5"/><label for="star_`+i+`_1.5" class="half"></label>
					<input type="radio" id="star_`+i+`_1" name="rating_`+i+`" value="1"/><label for="star_`+i+`_1" class="full"></label>
					<input type="radio" id="star_`+i+`_0.5" name="rating_`+i+`" value="0.5"/><label for="star_`+i+`_0.5" class="half"></label>
				</fieldset>
                <br/>
				<h4 class="rating-value"></h4>
			</div>
		</div></div></div>
            `);
            
        }
        enableStarRatings();
    });
   
    
})


});




