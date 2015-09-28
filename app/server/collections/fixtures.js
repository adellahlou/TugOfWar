/**
*	fixtures.js - used to populate the database with dummy data   
*/  

Meteor.startup( ()=> {
	if (Polls && Polls.find().count() === 0) {
		Polls.insert({
			tag : 'SandersVTrump',
			description : 'Who dances better?',
			votes : {
				sanders: 123,
				trump : 110
			},
			colors: {
				sanders : 'blue',
				trump : 'red'
			},
			open : true,
			createdOn : new Date(),
			comments : [
				{
					username: 'Tony',
					text: "As far as I'm concerned anyone who subscribes to the following is already \"an American in their heart\" and are welcome. 1. A love of personal freedom. 2. A fear of oppressive government and a desire to see it minimized to the smallest possible. 3. A love of the rule of law fairly and equally applied. \nIllegals have flouted #3, and there's no guarantee they believe #1 or #2. So back to their native country they should be sent. Get to the back of the line and wait your turn.",
					createdOn: new Date()
				},
				{
					username: 'Recapitate',
					text: "319 million people, the largest government in the world, and two circus ringmasters have our attention.",
					createdOn: new Date()
				},
				{
					username:'realtalk',
					text: "Sanders is still down by over 20 points nationally. Obama overcame that margin in 2008, but Sanders is not Obama. There is no chance that he ends up the nominee. It's possible that Clinton could lose, but it wouldn't be to Sanders.",
					createdOn: new Date()
				},
								{
					username: 'scj1091',
					text: "Hmn. A choice between tweedle-dum and tweedle-dumber. Plus ça change...",
					createdOn: new Date()
				},
				{
					username: 'candide',
					text: "Blacks voting for Obama meant only scum voting for their own kind. Blacks refusing Sanders means only that they cannot deal with a man of substance who happens to be white. What a surprise!",
					createdOn: new Date()
				},
				{
					username:'',
					text: "",
					createdOn: new Date()
				}
			]
		});


		Polls.insert({
			tag : 'iOS 9 vs Android',
			description : '',
			votes : {
				iOS: 143,
				Android : 83
			},
			colors : {
				iOS : 'white',
				Android: 'green'
			},
			open : true,
			createdOn : new Date(),
			comments : [
				{
					username: 'Torvie',
					text: "Linux.",
					createdOn: new Date()
				}
			]
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
			},
			open : true,
			createdOn : new Date(),
			comments : []
		});
	}
});