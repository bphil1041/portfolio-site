import { Parallax } from 'react-parallax';
import Sky from '../../assets/sky.png';

const ImageOne = () => (
    <Parallax className='sky-image' bgImage={Sky} strength={800}>
        <div className='content'>
            <span className='image-txt'>Sky</span>
        </div>
    </Parallax>
);

export default ImageOne