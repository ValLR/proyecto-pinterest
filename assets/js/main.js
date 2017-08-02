$(document).ready(function(){
	res.slice(-20).forEach(function(el){
		console.log(el.image_url)
		$("#json-content").append(`
		    <div class="elemento">
		        <img class="pin-image" src="dist/img/`+ el.image_url +`" alt="">
		        <h3 class="pin-title">`+ el.title +`</h3>
		        <p class="pin-description">`+ el.description +`</p>
		        <p class="pin-credit"><a href="#!" id="name">`+ el.username +`</a> desde Pinterest <a href="#!" id="hashtag">#`+ el.hashtag +`</a></p>
		    </div>
			`)
	})
});