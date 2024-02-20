const devPage = (container) => {
  container.innerHTML = `
    <h1>개발</h1>
    <div class="blog-posts">
      <div class="post">
        <h2><a href="#/dev/article/1">제목 1</a></h2>
      </div>
      <div class="post">
        <h2><a href="#/dev/article/2">제목 2</a></h2>
      </div>
    </div> 
  `;
};

export default devPage;
