// 等待DOM加载完成后添加页脚
document.addEventListener('DOMContentLoaded', function() {
    // 创建footer元素
    const footer = document.createElement('footer');
    footer.innerHTML = '<p> JustHTML 工具箱 &copy; 23XR Studio </p>';
    
    // 将footer添加到body的最后
    document.body.appendChild(footer);
});