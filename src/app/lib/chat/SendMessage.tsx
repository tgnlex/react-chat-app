import {fetcher} '../../../utils/fetcher.ts';
const options = {
  method: "POST", 
  headers: {
   Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8"
  }
}
const sendMessage = async () => {
  const res = await fetcher('localhost:4000/api/messages', method="POST", options={options})
  const data = await res.json();
  return data;
}
