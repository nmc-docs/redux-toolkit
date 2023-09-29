---
sidebar_position: 6
---

# Tạo Loading Reducer

- Ở ví dụ trước về Redux Thunk, ta đã biết cách tạo ra các thunk actions chứa các đoạn code bất đồng bộ để gọi API, sau đó dùng `builder.addCase()` để cập nhật state cho store. Với mỗi thunk action, ta cần một thuộc tính trong state (ví dụ như **isLoading** ) để kiểm tra xem đang trong quá trình gọi API hay không. Ví dụ:

```ts
import { createSlice } from "@reduxjs/toolkit";
import * as taskThunkActions from "./thunk-actions";
import type { ITask } from "../../interfaces/task-interface";

interface ITaskState {
  taskList: ITask[];
  isLoading: boolean;
}

const initialState: ITaskState = {
  taskList: [],
  isLoading: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(taskThunkActions.getAllTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(taskThunkActions.getAllTasks.fulfilled, (state, action) => {
        state.taskList = action.payload;
        state.isLoading = false;
      });
  },
});

export default taskSlice;
```

:::note

**Vấn đề đặt ra** : với mỗi slice nếu có thunk actions thì ta lại phải thêm thuộc tính `isLoading` để kiểm tra xem có đang trong quá trình gọi API hay không, điều này gây sự lặp lại không cần thiết. Thay vào đó, ta sẽ tạo một slice mới là **loadingSlice** , dùng để kiểm tra trạng thái **loading** của tất cả các thunk actions trong app.

:::

:::tip

Vì khi dispatch một thunk action thì có 3 action type tương ứng với 3 action được phát ra: **pending** , **fulfilled** /**rejected** , nên ta sẽ dựa vào kiểu của 3 action này để quyết định xem một thunk action liệu có đang ở trạng thái **loading** hay không.

:::

```ts
import { AnyAction, createSlice } from "@reduxjs/toolkit";

const initialState: { [key: string]: boolean } = {};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: AnyAction) => action.type.includes("/pending"),
      (state, action) => {
        state[action.type.split("/pending")[0]] = true;
      }
    );
    builder.addMatcher(
      (action: AnyAction) => action.type.includes("/fulfilled"),
      (state, action: AnyAction) => {
        state[action.type.split("/fulfilled")[0]] = false;
      }
    );
    builder.addMatcher(
      (action: AnyAction) => action.type.includes("/rejected"),
      (state, action: AnyAction) => {
        state[action.type.split("/rejected")[0]] = false;
      }
    );
  },
});

export default loadingSlice;
```

- Lúc này, ta có thể dễ dàng lấy ra trạng thái **loading** của một thunk action thông qua tên của nó:

```ts
const { isGettingAllTasks } = useAppSelector((state) => ({
  isGettingAllTasks: state.loading[ETaskThunkActions.GET_ALL_TASKS],
}));
```
