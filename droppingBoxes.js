document.addEventListener("DOMContentLoaded", function(){

		let box = document.querySelectorAll(".box");

		box.forEach(function(btn){
			btn.addEventListener("click", function(e){

				let animations = ["crawl", "dangle", "jump", "stretch", "flip"];
				let animation = animations[Math.floor(Math.random() * 5)];

				e.target.classList.add(animation);

				setTimeout(function () {
					e.target.classList.remove(animation);
				}, 4000);

			});
		});

})
