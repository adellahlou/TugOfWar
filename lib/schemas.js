/**
*	schemas.js - defines the Schema of the Mongo Collections 
*	can be used for validation among other things
*/

Schemas = {};


/**
*	Comment Schema - Holds user comment data
*/
Schema.Comment = new SimpleSchema({
	text : {
		type: String,
		label: 'Text'
	},

	user : {
		type: String,
		label: 'User'
	},

	createdOn : {
		type: Date,
		label: 'Comment made on',
		defaultValue : new Date()
	}
});	


/**
*	Choice Schema - Holds the name of the vote and color
*/
Schema.Choice = new SimpleSchema({
	name: {
		type: String,
		label: 'Label for poll choice'
	},

	color: {
		type: String,
		label: 'Color for visualization'
	}
});

/**
*	Poll Schema - 
*/
Schemas.Poll = new SimpleSchema({
	tag : {
		type: String,
		label: 'Trending tag'
	},

	description: {
		type: String,
		label: 'Blurb',
		optional: true
	},

	votes: {
		type: [Schema.Choice],
		label: 'Array of poll choices'
	},

	createdOn : {
		type: Date,
		label: 'Poll made on',
		defaultValue : new Date()
	},

	open: {
		type: Boolean
	}
});


