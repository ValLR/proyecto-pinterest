$(document).ready(function(){
	res.forEach(function(el){
		console.log(el.image_url);
		var pintContent =`
		<a href="!#" class= "modalC" ><div class="pinterest__contenedor">
			<div class="pinterest__box">
				<img src="dist/img/`+ el.id +`.jpg">
				<h3 class="pinterest__box--title">`+ el.title +`</h3>
				<h5 class="pinterest__box--description">`+ el.description +`</h5>
				<p><a class="pinterest__box--username">`+ el.username +`</a> desde Pinterest <a href="#!" class= "pinterest__box--hashtag">#`+ el.hashtag +`</a></p>
			</div>
		</div></a>

		`
		pintContent= $(pintContent);
		$(".pinterest").append(pintContent);
	});
});