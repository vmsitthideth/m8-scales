/* Create a scatter plot of 1960 life expectancy (gdp) versus 2013 life expectancy (life_expectancy).
		The variable "data" is accessible to you, as you read it in from data.js
*/
$(function() {
	// Read in your data. On success, run the rest of your code
	d3.csv('data/prepped_data.csv', function(error, data){
	 	// Select SVG to work with, setting width and height (the vis <div> is defined in the index.html file)
	var svg = d3.select('#vis')
				.append('svg')
				.attr("width", 600)
				.attr("height", 600);

		// Margin: how much space to put in the SVG for axes/titles
		var margin = {
			left:70,
			bottom:100,
			top:50,
			right:50,
		};

		// Height/width of the drawing area for symbols
		var height = 600 - margin.bottom - margin.top;
		var width = 600 - margin.left - margin.right;

		// Append a 'g' element in which to place the circles, 
		// shifted down and right from the top left corner using the margin values
		var g = svg.append('g')
					.attr('transform', 'translate(' + margin.left + ',')
					.attr('height',height)
					.attr('width', width);

		// var axis = d3.svg.axis();

		// var scale = d3.scale.linear();
		// scale.range([0,600]);	

		// var axisLabel = svg.append('g')
		// 					.attr("")

		// Find minimum and maximum values, then define x (log) and y (linear) scales
		var xmin = d3.min(data, function(d) {return +d.gdp})*1.05;  //+d.gdp is a uniary operator that translates to number
		var xmax = d3.max(data, function(d) {return +d.gdp})*.85;
		var xScale = d3.scale.log().range([0, width]).domain([xmin, xmax]);

		var ymin = d3.min(data, function(d) {return +d.gdp})*1.05;  //+d.gdp is a uniary operator that translates to number
		var ymax = d3.max(data, function(d) {return +d.gdp})*.85;
		var yScale = d3.scale.linear().range([0, width]).domain([xmin, xmax]);

		// Perform a data-join for your data, creating circle element in your chart `g`
		//var selection = svg.selectAll('circle');




		// Select all circles and bind data
		var circles = g.selectAll('circle').data(data);

		// Use the .enter() method to get your entering elements, and assign initial positions
		circles.enter().append('circle');

		// Use the .exit() and .remove() methods to remove elements that are no longer in the data
		circles.exit().remove();  

	  	// Transition properties of the update selection
		circles.transition()
			.duration(1500)
			.attr('cx', function(d) {return xScale(d.dgp)});
			.attr('cy', function(d) {return yScale(d.dgp)});

		// Define x axis using d3.svg.axis(), assigning the scale as the xScale
		var xAxis = d3.svg.axis()
						.scale(xScale)
						.orient(bottom)

		// Define y axis using d3.svg.axis(), assigning the scale as the yScale
		

		// Append x axis to your SVG, specifying the 'transform' attribute to position it
		

		// Append y axis to your SVG, specifying the 'transform' attribute to position it
		

		// Append a text element to label your x axis, and position it appropriately

		// Append a text element to label your y axis, and position it appropriately
		

		/* Using jQuery, select all circles and apply a tooltip
		If you want to use bootstrap, here's a hint:
		http://stackoverflow.com/questions/14697232/how-do-i-show-a-bootstrap-tooltip-with-an-svg-object
		*/


	});
});
