import React, {PropTypes} from 'react';

function MasterPage ({children}) {
  return (
    <div className='shopping'>
      {children}
    </div>
  );
}

MasterPage.defaultProps = {
  children: PropTypes.node
};

MasterPage.propTypes = {
  children: PropTypes.node
};

export default MasterPage;
