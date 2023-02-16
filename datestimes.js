let x;

let d = new Date();

// d = new Date(2023, 0, 30, 12, 30, 0);

// d = new Date('12/30/2023 12:30:00');

// d = new Date('2023-12-31');

// d = new Date('12-29-2023');

// ------------ Timestamp -------------

// x = Date.now();

// x = new Date('12-30-2023 12:30:00');

// x = d.toString();

// x = d.getTime();

// x = d.valueOf();

// x = new Date(1703910600000);

x = d.getFullYear();

x = d.getMonth();

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = d.toLocaleDateString('default', {
	weekday: 'long',
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	// timeZone: 'America/New_York',
});

console.log(x);
