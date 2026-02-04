fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });///...normal ways to get response 


//..get response by using async anc await
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("Error:", error);
  }
}

getPosts();



async function sendData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Hello",
        body: "This is a post",
        userId: 1
      })
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

sendData();
