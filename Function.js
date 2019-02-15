

function hitung() {
	var cek=kalkulator.hasil.value;
	kalkulator.hasil.value=eval(cek);
	
}
function input(num) {
	document.getElementById("hasil").value=document.getElementById("hasil").value+=num;
}

function hapus() {
	document.getElementById("hasil").value="";
}

function del() {
	var cek=kalkulator.hasil.value;
	kalkulator.hasil.value=cek.substring(0,cek.length-1);
}

