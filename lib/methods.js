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

		let query = {$set : {}};
		query.$set[vote] = this.selectedPoll.votes[vote] + 1;
		Polls.update(pollId,{$set : query});
	}
});