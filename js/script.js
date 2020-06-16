function toggle() {
	var x = document.getElementById('mobile-nav')
	var y = document.getElementById('togg')
	if (x.className == 'mobile-nav') {
		x.className = 'mobile-nav closed' 
		y.className = 'fa fa-bars'
	}
	else{
		x.className = 'mobile-nav';
		y.className = 'fa fa-times';
	}
} 
function myFunction() {
    var x = document.getElementById("myTopnav")
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav"
    }
} 
function toggle_visibility(id) {
	var e = document.getElementById(id)
	if(e.style.display == 'block')
		e.style.display = 'none'
	else
		e.style.display = 'block'
}