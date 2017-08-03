$(document).ready(function(){
	res.forEach(function(el){
		console.log(el.image_url);
		var pintContent =`
		<a id="`+ el.id +`" class= "modalC" ><div class="pinterest__contenedor">
			<div class="pinterest__box">
				<img id="`+ el.id +`" src="dist/img/`+ el.id +`.jpg">
				<h3 class="pinterest__box--title">`+ el.title +`</h3>
				<h5 class="pinterest__box--description">`+ el.description +`</h5>
				<p><a class="pinterest__box--username">`+ el.username +`</a> desde Pinterest <a href="#!" class= "pinterest__box--hashtag">#`+ el.hashtag +`</a></p>
				<hr>
			</div>
		</div></a>

		`
		pintContent= $(pintContent);
		$(".pinterest").append(pintContent);

		$(".modalC").click(function(){
			var id = $(".modalC").attr("id");
			$(".imgMod-container").append(`<img id="`+ el.id +`" src="dist/img/`+ el.id +`.jpg">`)
			modal.style.display="block"
		});
		$(".close").click(function(){
			modal.style.display="none"
		})

	});
});