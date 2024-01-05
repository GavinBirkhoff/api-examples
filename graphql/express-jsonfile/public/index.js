const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
    ql()
})

function ql(){
    const endpoint = 'http://localhost:3000/graphql'; // 你的 GraphQL 服务器地址

const query = `
  query {
    hello
  }
`;

const options = {
  method: 'POST',
  headers: {
    Accept: "text/html",
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'text/html',
  },
  body: JSON.stringify({ query }),
};

fetch(endpoint, options)
  .then((response) => response.json())
  .then((data) => {
    // 处理从服务器返回的数据
    console.log(data);
  })
  .catch((error) => {
    // 处理请求错误
    console.error(error);
  });

}