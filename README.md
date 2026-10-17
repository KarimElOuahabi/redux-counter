# Redux Counter

A small learning project for **Redux Toolkit** with React and TypeScript. It's a counter with synchronous and asynchronous updates.

## What it demonstrates

- A store configured with `configureStore`
- A `counterSlice` created with `createSlice` (`increment`, `decrement`, `incrementByAmount`)
- An async action with `createAsyncThunk`, using `pending` and `fulfilled` handling in `extraReducers`, with a simulated API call (`counterAPI.ts`)
- Typed selectors and `useSelector` / `useDispatch` in the component

## Tech stack

React 19 · TypeScript · Redux Toolkit · React Redux · Vite

## Running locally

```bash
cd vite-project
npm install
npm run dev
```
