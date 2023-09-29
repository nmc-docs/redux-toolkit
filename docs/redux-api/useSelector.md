---
sidebar_position: 4
---

# useSelector()

- `useSelector()` là một hook trong React redux giúp ta lấy ra các state từ store.
- Khai báo sử dụng TypeScript:

```ts
import { TypedUseSelectorHook, useDispatch } from "react-redux";

const store = configureStore({
  //...
});

type RootState = ReturnType<typeof store.getState>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Ví dụ:

```ts
import { useAppSelector } from "@src/stores";

const profile = useAppSelector((state) => state.client.profile);
```

- Nếu ta không muốn trả về giá trị đơn như ở trên, ta có thể trả về một object như sau:

```ts
import { shallowEqual } from "react-redux";
import { useAppSelector } from "@src/stores";

const { chatMembers, rooms, currentRoomId } = useAppSelector(
  (state) => ({
    chatMembers: state.chat.members,
    rooms: state.chat.rooms,
    currentRoomId: state.chat.currentRoomId,
  }),
  shallowEqual
);
```

:::caution

Lưu ý phải thêm tham số thứ hai là `shallowEqual` để tránh tình trạng re-render không cần thiết. Vì khi trả về một object mới thay vì một giá trị đơn thì component sẽ bị re-render nếu bất kỳ state nào trong store thay đổi (mặc dù state hiện tại đang được dùng ở component này không thay đổi về mặt giá trị)

:::
