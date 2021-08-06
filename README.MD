# React Lifecycle Hook

Lifecycle hooks for functional components


## Installation

Open a Terminal in the project root and run:

```sh
yarn react-lifecycle-hook
```
or
```sh
npm i react-lifecycle-hook
```

## API reference

#### useComponentDidMount
After all the elements of the page is rendered correctly, this method is called
```js
import { useComponentDidMount } from 'react-lifecycle-hook';

export const YourAwesomeComponent = () => {
  useComponentDidMount(() => {
    fetchData()
    document.addEventListener("click", closeMenu);
  })

  return (
    //...
  )
}
```

#### useComponentDidUpdate
Can be useful to perform some action when the state changes
```js
import { useComponentDidUpdate } from 'react-lifecycle-hook';

export const YourAwesomeComponent = () => {
  useComponentDidUpdate(
    (prevProps) => {
      if(prevProps.isOpenModal !== isOpenModal) {
        console.log('Modal state changed')
      }
    },
    { isOpenModal },
  );

  return (
    //...
  )
}
```

#### useComponentWillUnmount
useComponentWillUnmount is invoked immediately before a component is unmounted and destroyed
```js
import { useComponentWillUnmount } from 'react-lifecycle-hook';

export const YourAwesomeComponent = () => {
  useComponentWillUnmount(() => {
    document.removeEventListener("click", closeMenu);
  });

  return (
    //...
  )
}
```
