<template>
    <div class="footer">
        <div class="footer-item">
            <svg-icon icon-class="home"/>
            首页
        </div>
        <div class="footer-item">
            <svg-icon icon-class="find"/>
            发现
        </div>
        <div class="footer-item">
            <svg-icon icon-class="person"/>
            我的
        </div>
    </div>
</template>

<style scoped lang="less">
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #404040;
    display: flex;
    padding: 4px 0;
}

.footer-item{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    color: #C4C5C5;
    font-size: 12px;
    flex: 1 1 100%;
    .svg-icon{
        font-size: 22px;
    }
}
</style>