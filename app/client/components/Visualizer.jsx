Visualizer = React.createClass({
	propTypes: {
		poll: React.PropTypes.object.isRequired
	},


	render(){
		let style = { height: '400px'}

		return (
			<div className="row">
				<div className="col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
					<div id="container" style={style}>
						<button onClick={this.props.goToComments} className="btn btn-lg btn-danger-lg">
							GO TO COMMENTS
						</button>
					</div>
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

		);
	}
});