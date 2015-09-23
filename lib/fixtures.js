if (Polls.find().count() === 0) {
	Polls.insert({
		tag : 'SandersVTrump',
		description : 'Which would be a better president',
		votes : {
			sanders: 123,
			trump : 110
		},
		colors: {
			sanders : 'blue',
			trump : 'red'
		}
	});


	Polls.insert({
		tag : 'iOS 9 vs Android',
		description : 'Who wore it better',
		votes : {
			iOS: 143,
			Android : 83
		},
		colors : {
			iOS : 'white',
			Android: 'green'
		}
	});


	Polls.insert({
		tag : 'Walmart vs Target',
		description : 'Which store wins',
		votes : {
			walmart: 123,
			target : 110
		},
		colors : {
			walmart : 'blue',
			target : 'red'
		}
	});
}