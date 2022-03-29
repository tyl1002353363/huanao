<template>
    <div class="shop">
        <img :src="data.src" class="shop-pic" />
        <div class="shop-info">
            <p class="name">{{data.name}}</p>
            <div class="tags">
                <div class="tag-item" v-for="(tag, index) in data.tags" :key="index">{{tag}}</div>
            </div>
            <div class="business">
                <img :src="data.business.src" class="business-pic" />
                <p class="business-name">{{data.business.name}}</p>
                <span class="shop-price">{{data.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShopItem",
    props: ['data']
}
</script>

<style lang="less" scoped>
.shop{
    border-radius: 16px;
    background: #404040;
    &+.shop{
        margin-top: 12px;
    }
}

.shop-pic{
    display: block;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
}

.shop-info{
    padding: 4px 10px;
    .name{
        color: #fff;
        font-size: 16px;
    }
    .tags{
        margin-top: 6px;
        display: flex;

    }
    .tag-item{
        display: inline-flex;
        height: 16px;
        background: #DFCFAF;
        color: #624404;
        font-size: 12px;
        padding: 0 6px;
        border-radius: 3px;
        &+.tag-item{
            margin-left: 6px;
        }
    }
    .business{
        margin-top: 6px;
        display: flex;
        align-items: center;
        .business-pic{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 3px;
        }
        .business-name{
            color: #C4C5C5;
            font-size: 12px;
        }
        .shop-price{
            margin-left: auto;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
        }
    }
}
</style>