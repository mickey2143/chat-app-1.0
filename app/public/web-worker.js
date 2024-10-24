self.onmessage = async function (e) {
  try {
    const res = await fetch(`/api/chats/${e.data}`, { method: "GET" });
    const data = await res.json();
    postMessage(data);
  } catch (error) {
    postMessage(error);
  }
};
