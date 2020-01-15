import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideo, fetchAllVideos } from "./../../actions/video_actions";

const mSP = (state, ownProps) => {
    return({
    video: state.entities.videos[ownProps.match.params.videoId],
    relatedVideos: Object.values(state.entities.relatedVideos),
    users: state.entities.users,
    currentUser: state.session.id
    })
};

const mDP = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchAllVideos: () => dispatch(fetchAllVideos)
})

export default connect(mSP, mDP)(VideoShow);