---
sidebar_position: 4
---

# Redux thunk

- Redux Thunk là một middleware cho Redux. Nó cho phép viết các hàm bất đồng bộ (asynchronous) trong các action của Redux.
- Trong Redux, các action mặc định chỉ có thể là plain object, không thể chứa logic bất đồng bộ như gọi API hoặc xử lý các tác vụ không đồng bộ khác. Đó là khi Redux Thunk giúp ta xử lý điều này.
- Redux Thunk cho phép bạn viết các action creator (hàm tạo action) trả về một hàm thay vì một plain object. Hàm này có thể chứa logic bất đồng bộ và có thể dispatch các action khác sau khi hoàn thành tác vụ bất đồng bộ. Thunk middleware sẽ xử lý các action đặc biệt này và cho phép bạn thực hiện các công việc bất đồng bộ trước khi dispatch các action tiếp theo.
- Điều này rất hữu ích khi bạn cần thực hiện các tác vụ như gọi API để lấy dữ liệu, xử lý các tác vụ không đồng bộ, hoặc thực hiện các hành động phức tạp dựa trên trạng thái hiện tại của ứng dụng.
- Redux toolkit cung cấp cho ta một API là `createAsyncThunk()` cho phép ta thực hiện các thao tác bất đồng bộ trước khi dispatch một action làm thay đổi state trong store.

## createAsyncThunk()

- `createAsyncThunk()` nhận vào 2 parameters chính:

| Parameter          | Description                                                                                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type**           | Là một String. Redux dựa vào đây để tạo ra 3 loại action. Ví dụ type là `getUser` thì sẽ tạo ra các loại action sau:<br />`getUser/pending`: Đang trong quá trình gọi API<br />`getUser/fulfilled`: Thực hiện việc gọi API và trả về kết quả thành công<br />`getUser/rejected`: Xảy ra lỗi trong quá trình gọi API |
| **payloadCreator** | Là một async function. Async function này nhận vào 2 parameter<br />**arg** : là một giá trị đơn (thường là object). Nó chứa thông tin về body hay params để đính kèm khi gọi API<br />**\{ rejectWithValue \}** : là một phương thức của thunkAPI giúp throw error nếu trong quá trình gọi API xảy ra lỗi          |
