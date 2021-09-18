import type { FunctionComponent, ReactElement, ReactNode } from 'react'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'
import cx from 'classnames'

import styles from './Carousel.module.scss'

interface CarouselProps {
  elementsInfo: any[],
  renderMethod: FunctionComponent,
  interval?: number
}

const Carousel = ({
  elementsInfo,
  renderMethod,
  interval = 5000
}: CarouselProps) => {
  const renderCarouselList = (): ReactElement[] => {
    return elementsInfo.map(item => renderMethod(item)) as ReactElement[]
  }

  const customArrowNext = (clickHandler: () => void, hasNext: boolean): ReactNode => {
    return hasNext && (
      <div
        onClick={clickHandler}
        className={cx(styles.ArrowButton, styles.ArrowButtonRight)}
      >
        <i className={cx("bi bi-arrow-right-square", styles.ArrowIcon)} />
      </div>
    )
  }

  const customArrowPrev = (clickHandler: () => void, hasPrev: boolean): ReactNode => {
    return hasPrev && (
      <div
        onClick={clickHandler}
        className={cx(styles.ArrowButton, styles.ArrowButtonLeft)}
      >
        <i className={cx("bi bi-arrow-left-square", styles.ArrowIcon)} />
      </div>
    )
  }


  return (
    <ResponsiveCarousel
      className={styles.Carousel}
      interval={interval}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={800}
      renderArrowNext={customArrowNext}
      renderArrowPrev={customArrowPrev}
      showArrows
      autoPlay
      infiniteLoop
    >
      {renderCarouselList()}
    </ResponsiveCarousel>
  )
}

export default Carousel
