# React Timeline

Reusable react components to create a good looking and responsive timeline out the box!

#### NPM

`npm install @chabu/react-timeline`

#### Yarn

`yarn add @chabu/react-timeline`

### Usage

```js
import React from "react";
import { Timeline, TimelineItem } from "@chabu/react-timeline";
function App() {
  return (
    <div className="App">
      <Timeline>
        <TimelineItem side="left" title="hello word" body="Some text" date="2020" />
        <TimelineItem side="left" title="hello word" body="Some text" date="2020" />
        <TimelineItem side="right" title="hello word" body="Some text" date="2020" />
        <TimelineItem side="right" title="hello word" body="Some text" date="2020" />
      </Timeline>
    </div>
  );
}
```