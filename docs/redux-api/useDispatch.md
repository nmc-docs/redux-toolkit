---
sidebar_position: 5
---

# useDispatch()

- `useDispatch()` là một hook của React redux giúp ta dispatch một action.
- Khai báo sử dụng với TypeScript:

```ts
import { useDispatch } from "react-redux";

const store = configureStore({
  //...
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
```
