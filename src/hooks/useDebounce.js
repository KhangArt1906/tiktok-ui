/*
Trong hàm useDebounce, mỗi khi value trong mảng deps thay đổi thì 
clearnup function được gọi, 
nên sẽ clear timeout trước đó đi (huỷ những lần trước đi). 
Vì vậy, cho tới khi người dùng ngừng gõ 500ms API mới được gọi
*/

import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
