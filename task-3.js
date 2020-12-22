var printSegitiga = 7;

if (typeof(printSegitiga) != 'number') {
    console.log('Data Harus Number');
}

for (var i = printSegitiga; i >= 1; i--) {
	var print = '';
	for (var j = 1; j <= i; j++) {
		print += j;
	}
	console.log(print);
}
