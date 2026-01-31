// 等待DOM加载完成后添加页脚
document.addEventListener('DOMContentLoaded', function() {
    // 创建footer元素
    const footer = document.createElement('footer');
    
    // Footer内容 - 包含版权信息、友链、社交媒体等
    footer.innerHTML = `<div class="footer-content"><div class="footer-section"><h3>关于项目</h3><p>JustHTML 是一个基于前端技术的多功能工具箱，集合了大量实用工具，适用于开发者和普通用户。</p><p class="copyright">JustHTML 工具箱 &copy; 23XR Studio</p></div><div class="footer-section"><h3>友情链接</h3><ul class="friend-links"><li><a href="https://xnors.github.io" target="_blank" rel="noopener noreferrer">XnorsStudio 异或工作室</a></li><li><a href="https://github.com/denjehdhuendx/ITLToolkitnext" target="_blank" rel="noopener noreferrer">ITLToolkit IT 课工具箱</a></li></ul></div><div class="footer-section"><h3>关注我们</h3><div class="social-links"><a href="https://github.com/sxxyrry/JustHTML" target="_blank" rel="noopener noreferrer" class="social-link"><span class="social-icon">🐱</span><span>GitHub</span></a><a href="https://space.bilibili.com/1532090388" target="_blank" rel="noopener noreferrer" class="social-link"><span class="social-icon">📺</span><span>BiliBili</span></a><a href="https://x.com/sxxyrry" target="_blank" rel="noopener noreferrer" class="social-link"><span class="social-icon">💬</span><span>X ( Twitter )</span></a><a href="https://www.youtube.com/@sxxyrry" target="_blank" rel="noopener noreferrer" class="social-link"><span class="social-icon">🎞️</span><span>YouTube</span></a></div></div><div class="footer-section"><h3>快速导航</h3><ul class="quick-links"><li><a href="./index.html">首页</a></li><li><a href="./README.md">使用说明</a></li><li><a href="./ToolsList.md">工具列表</a></li><li><a href="#" onclick="window.scrollTo(0,0); return false;">回到顶部</a></li></ul></div></div><div class="footer-bottom"><p>构建于现代Web技术 | 支持所有主流浏览器</p></div></div>`;
    
    // 将footer添加到body的最后
    document.body.appendChild(footer);
});