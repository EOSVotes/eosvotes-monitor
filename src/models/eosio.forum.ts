import { Schema } from 'mongoose';
import { BaseActionSchema } from './base';

// Models = Schemas for MongoDB
export const PostSchema = new Schema(Object.assign({
    // Required
    account: {
        type: String,
        required: 'account_name'
    },
    post_uuid: {
        type: String,
        required: 'post_uuid'
    },
    title: {
        type: String,
        required: 'title'
    },
    content: {
        type: String,
        required: 'content'
    },
    // Optional
    reply_to_account: {
        type: String
    },
    reply_to_post_uuid: {
        type: String
    },
    certify: {
        type: Boolean
    },
    json_metadata: {
        type: Object,
        set: (v: any) => {
            if (!v) return {}
            return JSON.parse(v)
        },
        get: (v: any) => { return v }
    }
}, BaseActionSchema))

export const VoteSchema = new Schema(Object.assign({
    voter: {
        type: String,
        required: 'account_name'
    },
    proposition: {
        type: String,
        required: 'proposition'
    },
    proposition_hash: {
        type: String,
        required: 'proposition_hash'
    },
    vote_value: {
        type: String,
        required: 'vote_value'
    }
}, BaseActionSchema));

export const RemoveSchema = new Schema(Object.assign({
    voter: {
        type: String,
        required: 'account_name'
    },
    post_uuid: {
        type: String,
        required: 'post_uuid'
    }
}, BaseActionSchema));