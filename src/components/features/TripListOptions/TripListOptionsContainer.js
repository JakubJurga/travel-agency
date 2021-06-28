import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTag, removeTag, changeFromDuration, changeToDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters

  addTag: tags => dispatch(addTag(tags)),
  removeTag: tags => dispatch(removeTag(tags)),
  changeFromDuration: duration => dispatch(changeFromDuration(duration)),
  changeToDuration: duration => dispatch(changeToDuration(duration)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
