import React, {useRef, useState} from "react";
import * as styles from "./slider.module.scss";
import useWindowWidth from "../../../../hooks/use-window-width";

type RenderProps = {
    imageCollection: any
}

const Slider:React.FC<RenderProps> = ({imageCollection }) => {

    const [currentImage, setCurrentImage] = useState(0)
    const isMobile = useWindowWidth() < 720;

    return (
       <section className={styles.container}>
           <div className={styles.imagesContainer}>
               <div className={styles.imageContainer}>
                   <img className={styles.image} loading="lazy" src={imageCollection[currentImage].url} alt="" />
               </div>
           </div>
           {isMobile ? (
               <div className={styles.controlsContainer}>
                   <button className={styles.control} onClick={previousSlide}>{'<'}</button>
                   <button className={styles.control} onClick={nextSlide}>{'>'}</button>
               </div>
           ) : (
               <div className={styles.controlsContainer}>
                   <button className={styles.control} onClick={nextSlide}>{'>'}</button>
                   <button className={styles.control} onClick={previousSlide}>{'<'}</button>
               </div>
           )}
       </section>
    )

    function nextSlide() {
        if(currentImage < imageCollection.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    }

    function previousSlide() {
        if(currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    }
}

export default Slider
