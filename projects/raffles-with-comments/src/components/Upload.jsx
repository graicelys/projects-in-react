import DropzoneArea from './DropzoneArea';
import PropTypes from 'prop-types';


//Este será el componente principal que combina la lógica de subir archivos y la presentación.

const Upload = ({ onFilesAdded }) => {
  return (
    <div>
      <DropzoneArea onFilesAdded = {onFilesAdded}/>
    </div>
  );
};

Upload.propTypes = {
    onFilesAdded: PropTypes.func.isRequired,
  };
  

export default Upload;
