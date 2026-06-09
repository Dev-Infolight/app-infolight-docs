
import { useRef, useState } from "react"
import styles from './style.module.css';

interface ZoomableImageProps {
    src: string;
    alt?: string;
    className?: string;
}

export default function ZoomableImage({ src, alt, className }: ZoomableImageProps) {

    const popoverRef = useRef<HTMLDivElement>(null);
    const [zoom, setZoom] = useState<number>(1);

    function zoomIn() {
        setZoom((value) => Math.min(value + 0.25, 1.5))
    }

    function zoomOut() {
        setZoom((value) => Math.max(value - 0.25, 1))
    }

    function resetZoom() {
        setZoom(1);
    }

    function handleOpenModal() {

        popoverRef?.current?.showPopover();

    }

    function handleCloseModal() {
        resetZoom();
        popoverRef?.current?.hidePopover();

    }

    return (
        <>
            <img 
                src={src}
                alt={alt}
                className={className}
                onClick={handleOpenModal}
                style={{cursor: 'zoom-in'}}
            />
            <div
                ref={popoverRef}
                popover="auto"
                onClick={handleCloseModal}
                className={styles.modal}
            >
                <div
                    className={styles.zoomContainer}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.zoomToolbar}>
                        <button onClick={zoomOut} >-</button>
                        <button onClick={resetZoom} >1x</button>
                        <button onClick={zoomIn} >+</button>
                        <button onClick={handleCloseModal}>X</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img 
                            src={src}
                            alt={alt}
                            className={styles.image}
                            style={{transform: `scale(${zoom})`}}
                        />
                    </div>
                </div>
            </div>
        </>
    );

}