import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import "./slider.scss";

interface SliderProps {
  setShowIndex: (index: number) => void;
  showItems: number;
  listElements: JSX.Element[];
  manualIndexChange: boolean;
}

const Slider: FC<SliderProps> = (props: SliderProps) => {
  const { showItems, listElements, setShowIndex, manualIndexChange } = props;
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const elementsPerPage = showItems;

  const handleNextClick = () => {
    let nextIndex = currentIndex + elementsPerPage;
    nextIndex = nextIndex > listElements.length ? listElements.length : nextIndex;
    setCurrentIndex(nextIndex % listElements.length);
  };

  const handlePrevClick = () => {
    let prevIndex = currentIndex - elementsPerPage;
    prevIndex = prevIndex < 0
      ? (listElements.length - (listElements.length % showItems === 0 ? showItems : listElements.length % showItems))
      : prevIndex;
    setCurrentIndex(prevIndex % listElements.length);
  };


  const updateCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const renderGroupItems = (): JSX.Element[] => {
    const final: JSX.Element[] = [];

    listElements.forEach((element: JSX.Element, index: number) => {
      if (index % showItems === 0) {
        final.push(
          <div key={`group_${index}`} className='slider__carousel__group' style={{ flex: `0 0 100%` }}>
            {listElements.slice(index, index + showItems).map((el, i) => (
              <div key={index + i} className='slider__carousel__group__element'>
                {el}
              </div>
            ))}
          </div>
        );
      }
    });
    
    return final;
  };


  useEffect(() => {
    setCurrentTranslate(-currentIndex * (carouselRef.current ? carouselRef.current.clientWidth : 0) / elementsPerPage);
    setShowIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    updateCarousel();
  }, [currentTranslate]);

  useEffect(() => {
    if (!manualIndexChange) {
      setCurrentIndex(0);
    }
  }, [listElements]);

  return (
    <div className='slider'>
      <div className="slider__carousel" ref={carouselRef}>
        {renderGroupItems()}
      </div>
      <button className="slider__prev-button" onClick={handlePrevClick}>&lt;</button>
      <button className="slider__next-button" onClick={handleNextClick}>&gt;</button>
    </div>
  );
}

export default Slider;
