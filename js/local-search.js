// local-search.js
document.addEventListener('DOMContentLoaded', function() {
    var searchBox = document.getElementById('local-search-input');
    var searchResults = document.getElementById('local-search-results');
  
    searchBox.addEventListener('keyup', function() {
      var query = searchBox.value.trim();
      if (query === '') {
        searchResults.innerHTML = '';
        return;
      }
  
      // 这里需要添加实际的搜索逻辑，根据 query 显示搜索结果
      // 你可能需要读取 public/search.json 文件，并根据 query 显示结果
    });
  });