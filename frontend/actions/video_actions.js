import * as VideoAPIUtil from './../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';

const receiveAllVideos = payload => ({
    type: RECEIVE_ALL_VIDEOS,
    payload
})

const receiveVideo = payload => ({
    type: RECEIVE_VIDEO,
    payload
})

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
})

const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
})

export const fetchAllVideos = () => dispatch => {
    return VideoAPIUtil.fetchAllVideos()
        .then(payload => dispatch(receiveAllVideos(payload)))
};

export const fetchVideo = videoId => dispatch => {
    return VideoAPIUtil.fetchVideo(videoId)
        .then(payload => {
            dispatch(receiveVideo(payload));
        })
};

export const createVideo = video => dispatch => {
    return VideoAPIUtil.createVideo(video)
        .then(payload => (dispatch(receiveVideo(payload))),
        err => (dispatch(receiveVideoErrors(err.responseJSON)))
        )
};

export const updateVideo = video => dispatch => {
    return VideoAPIUtil.updateVideo(video)
        .then(payload => (dispatch(receiveVideo(payload))),
        err => (dispatch(receiveVideoErrors(err.responseJSON)))
        )

};

export const deleteVideo = videoId => dispatch => {
    return VideoAPIUtil.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)))
};