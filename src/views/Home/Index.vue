<template>
    <div>
        <div class="notice">
            <span class="notice-text">公告</span>
            <span class="notice-con">幻脑黑暗森林系列盲盒已上线，集齐12个</span>
        </div>
        <div class="banner">
            <img src="@/assets/images/banner.png" />
        </div>
        <div class="tab">
            <router-link tag="span" to="/">数字藏品</router-link>
            <router-link tag="span" to="/">发售日历</router-link>
            <router-link tag="span" to="/">精选资讯</router-link>
        </div>
    </div>
</template>

<style scoped lang="less">
.notice{
    height: 32px;
    border-radius: 16px;
    color: #FFFFFF;
    background: #404040;
    display: flex;
    align-items: center;
}

.notice-text{
    padding: 0 16px 0 10px;
    background: #222222;
    font-size: 18px;
    font-weight: bold;
    height: 100%;
    display: inline-flex;
    align-items: center;
    border-radius: 16px 0 0 16px;
}

.notice-con{
    padding: 0 16px 0 4px;
}

.banner{
    margin-top: 12px;
    height: 136px;
    border-radius: 16px;
    img{
        width: 100%;
    }
}

.tab{
    padding: 15px 0 20px;
    span{
        color: #C4C5C5;
        font-size: 18px;
        &+span{
            margin-left: 25px;
        }
    }
}
</style>