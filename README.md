A simple D3 Graph using a force layout

![image](https://github.com/dirkcuys/simple-d3-graph/assets/121995/a7cdcc0e-6c41-4c22-be8f-9ac0566dcae8)

## Usage

See index.html and js/test.js for an example of how to use the graph. In short it boils down to add

    <script src="{{site.baseurl}}/js/d3.min.js" charset="utf-8"></script>
    <script src="{{site.baseurl}}/js/d3-graph.js"></script>

to your HTML file. Then add data to the graph by calling 

    D3Graph.addLink('Link name 1', 'Link name 2')
