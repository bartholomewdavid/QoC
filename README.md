# QoC

## Node version 8.11.0

I did not use 8.12.0 because my `nvm` was having issues installing the related npm on windows. My normal development environment has been OSX to date.

## Overview

This was a demo react project that works in parallel with the express [portion](https://github.com/bartholomewdavid/QoC-API).

## Express Portion

### Structure

```
- qoc-api
  - bin
    This has the config for the node server.
  - public
    This should be removed I just wasn't sure if there were caveats with it. I did already remove access to the public dir.
  - routes
    index.js handles the 2 routes for this project. List and Detail.
```

### Caveats

I used the [request](https://github.com/request/request) package for ease of http requests. The only issue when using the external API was that we had to modify the headers to include `'content-type': 'text/javascript; charset=UTF-8`.

Other then that I just stripped out info I didn't want from the feed, I did not modify the shape of the data at all.

## React Portion

The project was created using the [official "Create React App" starter](https://reactjs.org/community/starter-kits.html).

### Structure

```
- qoc-app
  - public
  - src
    - actions
      This includes the actions for redux.
      In a full product there would be better handling of fail states,
      currently it only supports success
    - components
      This is a little simplified, it seems like the community likes to fully
      split this into 'components' and data containing 'containers'. My app
      was pretty small, low on functionality so I didn't take that path.
    - reducers
      These handle the payloads received from the server and map it to the
      redux store. Everything is the shape I want because I also had access to the server
    - styles
      These should be using some sort of pre/post processor but I didn't want to eject
      the project and configure webpack for such a small project.
    - utils
      These are pure functions that handle some of the repeatable tasks of the project

```

### Packages

```
redux
react-redux
react-router
react-router-dom
redux-thunk
```

Redux is being used as the data store because of the request from the client.

React redux adds core functionality to make it play nice with react.

React router is a router that handles url changes. It was also requested from the client.

React router dom adds core functionality to make the components needed for the router.

Redux thunk is a recommended redux package to handle async actions such as our API requests.

### Actions

I split the actions into a file for each page and an index file to batch them up for easy imports.

### Reducers

I split the reducers into a file for each page and an index file to bactch them up for easy imports.

It may not be the most efficient data use, but it will always be up to date and correct. If you wanted to optimize that you could use something similar to the [example here](https://redux.js.org/advanced/asyncactions#actions-js-with-fetch) which uses a series of flags and time stamps to cache and invalidate data.

### Components

I split my components up into three files: detailview, listview and loading.

`DetailView` and `ListView` are containers that handle the data store connections.

Within the `ListView` there could be a pretty big refactor. Instead of handling the rendering of `apps` it should be feeding the data into a `presentational component` that handles the inputs and rendering of `app` objects in a consistent way for easy testing and separation. The reason I didn't go down this path is just because of time, you can work on these assignments forever if you keep going.

`Loading` is a component that is used on both container components so I thought I would designate it a component to keep the classes consistent moving forward.

### Root

```
const Root = ({ store, match }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={ListView}/>
        <Route path="/detail/:appId" component={DetailView}/>
      </div>
    </Router>
  </Provider>
)
```

This is the root component that handles wrapping the application with the data `Provider` and the `Router`.