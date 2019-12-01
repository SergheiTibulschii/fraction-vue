<template>
    <div id='comments-container'>
        <error :message='error'/>
        <div id='add-comment-container'>
            <input v-model='newComment' placeholder='Add a comment' id='add-comment-text' type='text'/>
            <button @click='requestAddComment' id='add-comment-btn'>Add Comment</button>
        </div>
        <ul>
            <li v-bind:key='comment' v-for='(comment, index) in comments'>
                <comment 
                    @onCommentDelete='requestCommentDelete' 
                    :value='comment'
                    :commentId='index'
                    v-bind:key='index'
                />
            </li>
        </ul>
    </div>
</template>

<script>
import error from '@/components/Error'
import comment from '@/components/Comment'

export default {
    name: 'Comments',
    data() {
        return {
            error: '',
            newComment: '',
            ws: null,
            comments: [
                "Comment 1",
                "Comment 2",
                "Comment 3",
                "Comment 4",
            ]
        }
    },
    methods: {
        requestAddComment() {
            this.ws.send(JSON.stringify({id: null, content: this.newComment}))
        },
        requestCommentDelete(index) {
            this.ws.send(JSON.stringify({id: index}))
        },
        removeComment(index) {
            this.comments = this.comments.filter((comment, i) => i !== index)
        },
        addComment(content) {
            this.comments.unshift(content)
            this.newComment = ''
        }
    },
    created() {
        this.ws = new WebSocket('ws://echo.websocket.org');
        this.ws.onopen = function() {
            console.log('WS connection established')
        };
        this.ws.onmessage = (msg) =>  {
            try {
                const { content, id } = JSON.parse(msg.data)
                if(id !== null) this.removeComment(+id)
                else if(!id && content) this.addComment(content);
            } catch (error) {
                this.error = error.message
            }
        }
    },
    beforeDestroy() {
        this.ws.close()
    },
    components: {
        error,
        comment
    }
}
</script>

<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 10px;
}
#comments-container {
    display: flex;
    width: 50%;
    flex-direction: column;
}

input {
    font-size: 1.1em;
}
#add-comment-container {
    display: flex;
}
#add-comment-btn {
    padding: 5px 10px;
}
#add-comment-text{
    font-size: 1em;
    padding: 5px 10px;
    margin-right: 5px;
}
</style>