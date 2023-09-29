---
sidebar_position: 2
---

# createSlice()

- `createSlice()` dùng để tạo một thành phần để quản lý một state cụ thể trong store.
- Cú pháp:

```ts
import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example", // Một string là tên của slice
  initialState: {}, // Một object chứa state khởi tạo
  reducers: {
    reducer1: (state, action) => {
      /* Logic thay đổi state ở đây */
    },
    reducer2: (state, action) => {
      /* Logic thay đổi state ở đây */
    },
    //...Các hàm reducer khác ở đây.
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunkActions.fulfilled, (state, action) => {
        /* Thực hiện thay đổi state ở đây */
      })
      .addMatcher(
        (action: AnyAction) => action.type.includes("/pending"),
        (state, action) => {
          /* Thực hiện thay đổi state ở đây */
        }
      );
    //...Các hàm extraReducers khác ở đây
  },
});
```

## Props

| Props           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`          | Nhận vào một string là tên của slice. Type của action sẽ lấy tên này làm tiền t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `initialState`  | Nhận vào một object chứa state khởi tạo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `reducers`      | Là một đối tượng chứa các[reducer function](#reducer-function) để xử lý các action cụ thể.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `extraReducers` | Là một đối tượng chứa các[reducer function](#reducer-function) được sử dụng để xử lý các action từ các slice reducer khác trong cùng store (thường dùng với thunk actions)<br />- **.addCase()** : chạy reducer nếu khớp chính xác với action được cung cấp trong tham số thứ nhất nhận vào<br />- **.addMatcher()** : chạy reducer nếu hàm callback (tham số thứ nhất nhận vào) trả về `true`. Thông thường, điều này được thực hiện bằng cách tìm xem trường `action.type` có khớp một phần hay không (như ở ví dụ trên)<br />Cả **.addCase()** và **.addMatcher()** đều có tham số thứ hai nhận vào là một [reducer function](#reducer-function) (tương tự như trên) |

## Return value

`createSlice()` trả về một object, gồm:

- `slice.reducer`: Dùng khi cấu hình store.
- `slice.actions`: Chứa tất cả các actions đã được định nghĩa ở `reducers` bên trên

## Reducer function

:::info

**Reducer function** là một hàm reducer có nhiệm vụ thực hiện việc thay đổi state. Nó nhận vào 2 tham số:

- `state`: Là state hiện tại.
- `action`: Là một object có 2 thuộc tính là `action.type` (tên của kiểu action được dispatch), và `action.payload` (dữ liệu được gửi đi khi dispatch một action).

:::
