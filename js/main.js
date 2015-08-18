var container_arrays = [];
var container_values = [];
var container_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function() {
	var i = this.length, j, temp;
	while (--i > 0){
	j = Math.floor(Math.random() * (i+1));
	temp = this[j];
	this[j] = this[i]; 
	this[i] = temp;
	}
};





$('.image5').on('click', function() {
$('.image5').hide();
$('.image5').show();
	
	






}					

		
	
	
	
		
	$('#login-form a').on('click', function() {
		$('#login-form').hide();
		$('.user-info').show();
		$('.user-fullname').text(userInfo.firstName + ' ' + userInfo.lastName);

	$('.btn-sm').on('click', function() {
		$('.btn-sm').show();
		$('#login-form').show();
		$('.user-info').hide() ++;