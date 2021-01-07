import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchDuration, RemoveTag, AddTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeSearchDuration: payload => dispatch(changeSearchDuration(payload)),
  AddTag: tag => dispatch(AddTag(tag)),
  RemoveTag: tag => dispatch(RemoveTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
