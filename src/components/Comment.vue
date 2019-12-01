<template>
    <div class="comment">
        {{ value }} <vButton text='Delete' class='add-comment' v-bind:key='`btn-delete-${commentId}`' :onClick='$evt => handleCommentDelete($evt, commentId)'/>
    </div>
</template>

<script>
import button from '@/components/Button'

export default {
    name: 'Comment',
    props: ['value', 'commentId'],
    methods: {
        handleCommentDelete($evt, index) {
            this.$emit('onCommentDelete', index)
        }
    },
    components: {
        vButton: button
    }
}
</script>

<style>
.comment {
    padding: 5px;
}
.add-comment {
    display: inline-block;
    padding: 5px 15px;
    border: 1px solid green;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background: transparent;
}
</style>