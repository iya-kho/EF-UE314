import PropTypes from 'prop-types';
import '../styles/Layout.scss';

export function Layout ({ children }) {
  return (
    <div className='out-wrapper'>
      <div className='inner-wrapper'>
        <h1>Gestion des utilisateurs</h1>
        {children}
      </div>
    </div>
  );}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};