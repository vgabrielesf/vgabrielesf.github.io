import React from 'react';

const ImageCarousel = ({ images, onImageClick }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {/* Primeira imagem - ocupa 2x2 */}
                <div 
                    className="col-span-2 row-span-2 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => onImageClick && onImageClick(images[0])}
                >
                    <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                        <img
                            src={images[0]?.src}
                            alt={images[0]?.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {images[0]?.alt}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Rendering 3D
                        </p>
                    </div>
                </div>

                {/* Imagens menores - ocupam 1x1 cada */}
                {images.slice(1).map((img, idx) => (
                    <div
                        key={idx + 1}
                        className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => onImageClick && onImageClick(img)}
                    >
                        <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {img.alt}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Rendering 3D
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
