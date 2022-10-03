$(document).ready(function () {
	enableStarRatings();
});

function enableStarRatings() {
	$('.rating-wrap').find('input').each(function () {
		$(this).on('click', function () {
			i = this.value;
			console.log('TTT' + i)
			console.log('closest id '+$(this).closest('.rating-wrap').attr('id'))
			$(this).closest('.rating-wrap').find('.rating-value').html(i + " out of 5");
		});
	})
}