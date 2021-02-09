<template>
    <div class="post-list">

        <ul>
            <li :key="post.id"
                v-for="post in posts"
            >
                {{reversedMessage}}
                <span>
                     {{post.id}}
                </span>

                <span>
                    {{post.title}}
                </span>

                <div>
                    <!--<button-->
                            <!--@click=" createDetail(post)"-->

                    <!--&gt;-->
                        <!--View details-->

                    <!--</button>-->

                       <router-link
                               v-if="posts"
                               class="post-link"
                               exact-path
                               :to="{
                                    name: 'post',
                                    params: {
                                    post:post,
                                    id: post.id,
                                    }
                               }"
                       >
                           View details
                       </router-link>


                </div>
            </li>
        </ul>
    </div>
</template>

<script>
console.log('sdf')
import axios from 'axios';

export default {
    name: 'PostList',
    components: {
    },
    data(){
        return {
            selectedPost: null,
            posts: null,
            errored: false,
            loading: true
        }
    },
    created (){
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts = response.data
            })
            .catch(error => {
                this.errored = error

            })
            .finally(() => this.loading = false)
    },
    computed:{
        reversedMessage: function () {
           console.log(this.posts)
            return '';
        }
    },
    methods: {
        // getPostId(id){
        //     this.selectedPost = this.posts.filter(post=>post.id === id)[0];
        //
        // },
        //
        // createDetail(post){
        //     console.log(post)
        //     this.$router.push({
        //         name: 'post',
        //         params: {
        //             id: post.id,
        //             post
        //         }
        //     })
        // }

    },
}

</script>

<style scoped>
    .post-list {
        margin: 20px 20px;
        display: flex;
        justify-content: center;
    }

    ul {
        list-style: none;
        width: 600px
    }

    ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        border-radius: 3px;
        border: 1px solid lightgrey;
        height: 40px;
    }
    ul > li > span:nth-child(1){
        margin: 0 10px;
        flex-shrink: 0;
    }
    ul > li > span:nth-child(2){
        margin-right: 10px;
        white-space: nowrap;
        overflow: hidden;
        flex-shrink: 1;
        text-overflow: ellipsis;
    }
    ul > li >  div {
        height: 100%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: end;
    }

    button {
        font-size: 12px;
        padding: 0 3px;
        border: none;
        outline: none;
        cursor: pointer;
    }
    button:hover{
        background: white;
    }

    .post-link {
        margin-right: 4px;
        font-size: 12px;
        display: block;
        float: right;
        color: grey;
        text-decoration: none;
        border-radius: 3px;
    }
    .post-link:hover{
        color: mediumpurple;
    }

    @media screen and (max-width: 640px) {
        ul {
            list-style: none;
            min-width: 100%
        }
        ul > li  {
            flex-direction: column;
            height: min-content;
            text-overflow: ellipsis;
        }
        ul > li > span:nth-child(2){
            max-width: 100%;
            margin-right: -10px;
        }
    }

</style>