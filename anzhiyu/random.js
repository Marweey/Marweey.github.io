var posts=["2022/11/30/2022初雪记/","2023/01/23/《满江红》/","2024/01/18/一些南京旅游回忆/","2023/05/05/Tape提问箱归档/","2024/05/15/一次华为云使用记录/","2024/02/15/个人网站/","2022/11/25/建站记/","2022/11/25/更新维护日志/","2023/04/06/音阙诗听/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };