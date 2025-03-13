// script.js
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');

    // 自动播放视频（注意：某些浏览器可能限制自动播放）
    videoPlayer.play();

    // 监听视频结束事件
    videoPlayer.addEventListener('ended', function() {
        alert('视频播放结束');
    });

    // 监听视频错误事件
    videoPlayer.addEventListener('error', function() {
        alert('视频加载出错，请检查网络或视频源');
    });
});
