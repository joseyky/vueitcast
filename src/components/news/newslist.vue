<template>
    <div id="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link v-bind="{to:'/news/newsinfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis' v-text="item.zhaiyao">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        <div class="ft">
                            <span>发表时间：{{item.add_time|datefmt('YYYY-MM-DD HH:mm:ss')}} </span>
                            <span class="click">{{item.click}}</span>
                        </div>
                    </div>
                </router-link>
            </li>


        </ul>
    </div>

</template>
<script>
    import {Toast} from 'mint-ui';
    import common from '../../kits/common.js'
    export default{
        data(){
             return {
                list:[]
            }
        },
        created(){
            this.getlist();
        },
        methods:{
            getlist:function(){
                let url = common.apidomain+'/api/getnewslist';
                this.$http.get(url).then(res=>{
                    if(res.body.status !=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.list = res.body.message;
                })
            }
        }
    }
</script>
<style scoped>
.mui-table-view img{
    height: 80px;
    width: 80px;
}
    .mui-table-view .mui-media-object{
        max-width:80px;
        line-height: 80px;
    }
    .ft{
        margin-top: 1.5em;
        font-size:12px;
        color:#0094ff;
    }
    .ft .click{
        margin-left: 20px;
    }
</style>