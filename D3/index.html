<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Bar chart</title>
    <style>
        /* CSS styles for the bar chartBox */
        .chartBox {
            width: 500px;
            height: 300px;
            border: 1px solid #ccc;
            margin: 20px auto;
            padding: 40px;
            font-size: 12px;
        }

        .bar {
            fill: steelblue;
        }

        .bar:hover {
            fill: orange;
        }

        
    </style>
</head>

<body>
    <div class="chartBox"></div>

    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script>
        // Sample data
        const data = [
            { year: "2011", value: 45 },
            { year: "2012", value: 47 },
            { year: "2013", value: 52 },
            { year: "2014", value: 70 },
            { year: "2015", value: 75 },
            { year: "2016", value: 78 }
        ];

        // Dimensions
        const width = 500, height = 300, 
        margin = { top: 20, right: 20, bottom: 30, left: 40 }, 
        chartBoxWidth = width - margin.left - margin.right, 
        chartBoxHeight = height - margin.top - margin.bottom;

        // SVG container
        const svg = d3.select(".chartBox")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // chartBox group
        const chartBox = svg.append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // scales
        const xScale = d3.scaleBand()
            .range([0, chartBoxWidth])
            .padding(0.1)
            .domain(data.map((d) => d.year));

        const yScale = d3.scaleLinear()
            .range([chartBoxHeight, 0])
            .domain([0, d3.max(data, (d) => d.value)]);

        // bars
        chartBox.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", (d) => xScale(d.year))
            .attr("y", (d) => yScale(d.value))
            .attr("width", xScale.bandwidth())
            .attr("height", (d) => chartBoxHeight - yScale(d.value));

        // x-axis
        chartBox.append("g")
            .attr("class", "axis-x")
            .attr("transform", `translate(0, ${chartBoxHeight})`)
            .call(d3.axisBottom(xScale));

        // y-axis
        chartBox.append("g")
            .attr("class", "axis-y")
            .call(d3.axisLeft(yScale));

        // chartBox title
        chartBox.append("text")
            .attr("x", chartBoxWidth / 2)
            .attr("y", -margin.top / 2)
            .attr("text-anchor", "middle")
            .text("Bar chart");
    </script>
</body>

</html>