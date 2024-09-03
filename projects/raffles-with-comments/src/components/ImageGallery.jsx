import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const ImageGallery = ({ files }) => {
    const [objctUrls, setObjectUrls] = useState([])

    useEffect(() => {
        const urls = files.map(file => URL.createObjectURL(file));
        setObjectUrls(urls);

        return () => {
            urls.forEach(url => URL.revokeObjectURL(url))
        }
    }, [files])

    return (
        <div className="gallery">
        {objctUrls.map((url,index) =>(
            <img
            key={index}
            src={url}
            alt={`capture-${index}`}
            style = {{ width: '100px', height: '100px', margin: '10px' }}
            />
        ))}
        </div>
    )
    
}

ImageGallery.propTypes = {
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ImageGallery;
