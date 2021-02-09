<template>
    <div class="post">
        <div>
            <div class="wrapper">

             <router-link to="/posts">Back to posts</router-link>

            </div>

            <div class="post-header">
            <span>
                {{post.id}}
            </span>
                <h3>
                    {{post.title}}
                </h3>
            </div>

            <div class="post-body">
                <p>
                    {{post.body}}
                </p>
                <span>
                 posted by user id {{post.userId}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        props: {
            post: Object
        },
        computed: {
        }
    }
</script>

<style>
    .post {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    .post > div {
        width: 600px;
    }

    .wrapper {
        width: 100%;
        height: 40px;
    }

   .post-header {
        height: 40px;
        background: lavender;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;

    }
    .post-header > span {
        flex-shrink: 0;
        padding-left: 10px;
        padding-right: 10px;
        background: lavender;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .post-header > h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        flex-shrink: 3;
        margin-right: 28px;
    }

    .post-body {
        margin-top: 10px;
    }

    .post-body > p {
        padding: 4px 28px;
    }

    .post-body > span {
        display: inline-block;
        margin-top: 10px;
        float: right;
        font-size: 12px;
        color: grey;
    }

    .router-link-active {
        padding: 3px;
        display: block;
        float: right;
        color: grey;
        background:lavender;
        text-decoration: none;
        border-radius: 3px;
    }
    .router-link-active:hover{
        background: lightsteelblue;
        color: #ffffff;
    }

</style>
