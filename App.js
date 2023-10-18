{/* 
<div id="parent">
    <div id="child1">
        <h1>This is H1 Heading</h1>
        <h2>This is H2 Heading</h2>
    </div>
    div id="child2">
        <h1>This is H1 Heading</h1>
        <h2>This is H2 Heading</h2>
    </div>
</div> 
*/}



const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, 
    "Welcome to React");

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div", {id:"child1"},[
            React.createElement("h1", {}, "This is H1 Heading"),
            React.createElement("h2", {}, "This is H2 Heading")
        ]
        ),
        React.createElement("div", {id:"child2"},[
            React.createElement("h1", {}, "This is H1 Heading"),
            React.createElement("h2", {}, "This is H2 Heading")
        ]
        )
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);

root.render(parent);