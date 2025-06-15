import PropTypes from 'prop-types';
import azureIcon from '../assets/icons/azureIcon.png';

const AzureIcon = ({ className, style }) => (
  <img
    src={azureIcon}
    alt="Azure"
    className={className}
    style={style}
  />
);

AzureIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

AzureIcon.defaultProps = {
  className: '',
  style: {}
};

export default AzureIcon;