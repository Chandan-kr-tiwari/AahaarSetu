/*
<div id="parent">
     <div id="child1">
        <h1> I'm h1 tag</h1>
        <h2> I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1> i'm h1 tag </h1>
        <h2> i'm h2 tag </h2>
    </div>
</div>    
*/

//  const heading = React.createElement('h1',{id:"h1",customid:"xyz"},"Hello world from react") // {in this we give the attribute}

//  console.log(heading) // It will return object, the react creates the element which is just the js object

const parent = React.createElement('div',{id:"parent"},
    [
        React.createElement('div',{id:'child1'},
            [
                React.createElement('h1',{},"I.m h1 tag") ,React.createElement('h2',{},"I.m h2 tag")
            ]
        ) ,[
             React.createElement('div',{id:'child2'},
            [
                React.createElement('h1',{},"i.m h1 tag") ,React.createElement('h2',{},"i.m h2 tag")
            ]
        ) 
        ]
    ]
)

 const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(parent)