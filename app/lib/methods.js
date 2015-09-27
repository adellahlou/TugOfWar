/**
*	methods.js - declares methods for valid database interaction
*/

Meteor.methods({
	/**
	*	Records a user's vote for a poll
	*	@param {Mongo.ObjectId} poll
	*	@param {String} vote
	*/
	voteOnPoll(pollId, vote){
		if(!Meteor.userId()) {
			throw new Meteor.Error("not-authorized")
		}

		// TODO: check types of pollId and vote
		let attr = 'votes.'.concat(vote);
		let query = {$set : {}};
		
		query.$set[attr] = Polls.findOne(pollId).votes[vote] + 1;
		Polls.update(pollId, query);
	},


	commentOnPoll(pollId, newComment){
		if(!Meteor.userId()){
			throw new Meteor.Error("not-authorized");
		}

		let comment = { 
			username : Meteor.user().username,
			text : newComment,
			createdOn : new Date()
		};

		let query = { $push : {comments : comment}};
		Polls.update(pollId, query);
	}
});   