<template>
    <div id="tmpl">
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p>{{info.add_time | datefmt('YYYY-MM-DD')}} {{info.click}}次浏览</p>
        </div>
        <div id="content" v-html="info.content"></div>
    </div>
</template>
<script>
    export default{
        data(){
             return{
                id:0,
                 info:[]
            }
        },
        created(){
            this.id=this.$route.params.id;
            this.getinfo();
        },
    methods:{
        getinfo:function(){
            let url = 'http://webhm.top:8899/api/getnew/'+this.id;
            this.$http.get(url).then(res=>{
                if(res.body.status!=0){
                    alert(res.body.message);
                    return;
                }
                this.info = res.body.message[0];
            });
        }
    }
    }
</script>
<style scoped>
    .title h4{
        color:#0094ff;
    }
    .title p{
        color:rgba(0,0,0,0.5);
    }
    .title,#content{
        padding:5px;
    }
</style>