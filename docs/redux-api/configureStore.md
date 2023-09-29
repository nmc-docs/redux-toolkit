---
sidebar_position: 3
---

# configureStore()

- `configureStore()` để cấu hình store cho app. Nó nhận vào các reducer được trả về từ `createSlice()`
- Cú pháp:

```ts
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    example1: exampleReducer1,
    example2: exampleReducer2,
    //...
  },
});
```
