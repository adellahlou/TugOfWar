Visualizer = React.createClass({
	propTypes: {
		poll: React.PropTypes.object.isRequired
	},
	createVisual(){
		var styles = {};
		let votes = this.props.poll.votes;
		let colors = this.props.poll.colors;
		var choices = Object.getOwnPropertyNames(votes);
		let total = 0;


		for(let choice = 0; choice < choices.length; choice++) {
			total += votes[choices[choice]];
		}

		for(let choice = 0; choice < choices.length; choice++){
			let ratio = ((votes[choices[choice]]/total)*100).toString() + '%'
			console.log(ratio);
			let bcolor = colors[choices[choice]];
			styles[choices[choice]] = {
				'width':  ratio,
				'backgroundColor' : bcolor,
				'display' : 'inline-block'
			};
		}

		var divs = choices.map((selection) =>{
			console.log(styles[selection]);
			return (<div className="visual" style={styles[selection]}></div>)
		});

		return divs;
	},

	render(){
		let content = this.createVisual();
		return (
			<div id="vizBlock">
				<div className="row" >
					<div className="col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
						<h1 className="title">Keep Tugging</h1>
					</div>
				</div>
				<div className="row" >
					<div className="col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
						{content}
					</div>
					{/*<script>
						$(function () {
						    $('#container').highcharts({
					            chart: {
					                type: 'pie',
					                options3d: {
					                    enabled: true,
					                    alpha: 45,
					                    beta: 0
					                }
					            },
					            title: {
					                text: 'Browser market shares at a specific website, 2014'
					            },
					            tooltip: {
					                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					            },
					            plotOptions: {
					                pie: {
					                    allowPointSelect: true,
					                    cursor: 'pointer',
					                    depth: 35,
					                    dataLabels: {
					                        enabled: true,
					                        format: '{point.name}'
					                    }
					                }
					            },
					            series: [{
					                type: 'pie',
					                name: 'Browser share',
					                data: [
					                    ['Firefox',   45.0],
					                    ['IE',       26.8],
					                    {
					                        name: 'Chrome',
					                        y: 12.8,
					                        sliced: true,
					                        selected: true
					                    },
					                    ['Safari',    8.5],
					                    ['Opera',     6.2],
					                    ['Others',   0.7]
					                ]
					            }]
						    })
						});
					</script>*/}
				</div>
				<div className="row">
					<div className="col-md-offset-5 col-md-1 col-lg-offset-5 col-lg-1">
						<button onClick={this.props.goToComments} className="btn btn-lg btn-danger-lg">
							GO TO COMMENTS
						</button>
					</div>
				</div>
			</div>

		);
	}
});