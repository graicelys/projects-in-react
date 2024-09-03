import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import DropzoneInstructions from './DropzoneInstructions';


//Manejará la lógica de arrastrar y soltar utilizando react-dropzone.

const DropzoneArea = ({ onFilesAdded }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => onFilesAdded(acceptedFiles),
  });

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <DropzoneInstructions />
    </div>
  );
};

DropzoneArea.propTypes = {
  onFilesAdded: PropTypes.func.isRequired,
};

export default DropzoneArea;
